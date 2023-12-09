import * as React from "react";
import _ from "lodash";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Card,
  Tag,
  Space,
  Select,
  Badge,
} from "antd";

import { CalendarOutlined, CodepenOutlined } from "@ant-design/icons";

import { SearchOutlined } from "@ant-design/icons";

import { getAllItems } from "@/store/reducer/item";

const { Title, Text } = Typography;

import lostIcon from "@/assets/images/lost.svg";
import foundIcon from "@/assets/images/found.svg";
import { useSearchParams } from "react-router-dom";

const categoryColor = Object.freeze({
  gadgets: "#1677ff",
  money: "#52c41a",
  accessories: "#FA8C16",
  books: "#722ED1",
  others: "#eb2f96",
});

function Search() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const { items: allReportedItems, fetching } = useSelector(
    (state) => state.item
  );

  const [search, setSearch] = React.useState(searchParams.get("item") || "");
  const [dateLostFound, setDateLostFound] = React.useState("");
  const [category, setCategory] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(
    searchParams.get("location") || ""
  );

  const [items, setItems] = React.useState(allReportedItems || []);
  React.useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch, getAllItems]);

  React.useEffect(() => {
    setItems(allReportedItems);
  }, [allReportedItems]);

  React.useEffect(() => {}, [searchParams]);

  const handleSearch = React.useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handleDateLostFound = React.useCallback((event) => {
    setDateLostFound(event);
  }, []);

  const handleCategory = React.useCallback((event) => {
    setCategory(event);
  }, []);

  const handleCurrentLocation = React.useCallback((event) => {
    setCurrentLocation(event.target.value);
  }, []);

  const handleFilterItems = React.useCallback(() => {
    const filteredValues = allReportedItems.filter(
      (data) =>
        data.title.toLowerCase().includes(search.toLowerCase()) &&
        data.specific_location
          .toLowerCase()
          .includes(currentLocation.toLowerCase()) &&
        data.category.toLowerCase().includes(category.toLowerCase())
    );

    // moment(data.date_lost_found ).format('L') === moment(dateLostFound).format('L')

    setItems(filteredValues);
  }, [allReportedItems, search, location, category, dateLostFound]);

  return (
    <div className="lnf-search">
      <div className="lnf-search-header">
        <div>
          <div className="lnf-search-title">
            <Title level={2}>Lost/Found errorItems</Title>
            <Text>List of all items that are reported</Text>
          </div>

          <div>
            <Row gutter={[8, 8]}>
              <Col span={6}>
                <Input
                  size="large"
                  placeholder="Search Item"
                  value={search}
                  onChange={handleSearch}
                />
              </Col>

              <Col span={5}>
                <DatePicker
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="When"
                  value={dateLostFound}
                  onChange={handleDateLostFound}
                />
              </Col>

              <Col span={6}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Category"
                  size="large"
                  options={[
                    { value: "gadgets", label: "Gadgets" },
                    { value: "money", label: "Money" },
                    { value: "accessories", label: "Accessories" },
                    { value: "books", label: "Books" },
                    { value: "others", label: "Others" },
                  ]}
                  value={category}
                  onChange={handleCategory}
                />
              </Col>

              <Col span={6}>
                <Input
                  onChange={handleCurrentLocation}
                  value={currentLocation}
                  size="large"
                  placeholder="Location"
                />
              </Col>

              <Col span={1}>
                <Button
                  icon={<SearchOutlined />}
                  size="large"
                  type="primary"
                  onClick={handleFilterItems}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="lnf-search-content">
        <Row>
          <Col>
            <div className="lnf-search-content-title">
              <Text strong>{items.length} Results Found</Text>
            </div>
          </Col>
        </Row>
        <div className="lnf-search-content-card-footer">
          <Row gutter={[16, 16]}>
            {items.map((item) => (
              <Col span={8} key={item._id}>
                <Badge.Ribbon
                  text={_.capitalize(item.item_type)}
                  color={item.item_type === "lost" ? "#ffadd2" : "#b7eb8f"}
                >
                  <Card
                    hoverable
                    bordered
                    cover={
                      <img
                        style={{
                          padding: "5rem",
                          backgroundColor:
                            item.item_type === "lost" ? "#fff0f6" : "#f6ffed",
                        }}
                        alt="example"
                        src={item.item_type === "lost" ? lostIcon : foundIcon}
                      />
                    }
                  >
                    <div className="lnf-search-content-card-footer">
                      <Title level={5}>{_.capitalize(item.title)}</Title>
                      <div>
                        <Space>
                          <CalendarOutlined />
                          <Text>
                            {moment(item.date_lost_found).format("LLL")}
                          </Text>
                        </Space>
                      </div>
                    </div>

                    <div className="lnf-search-content-card-footer-button">
                      <Tag
                        icon={<CodepenOutlined />}
                        color={categoryColor[item.category]}
                      >
                        {_.capitalize(item.category)}
                      </Tag>
                    </div>
                  </Card>
                </Badge.Ribbon>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export { Search as default };
