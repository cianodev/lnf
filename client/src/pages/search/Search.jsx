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

const categoryColor = Object.freeze({
  gadgets: "#1677ff",
  money: "#52c41a",
  accessories: "#FA8C16",
  books: "#722ED1",
  others: "#eb2f96",
});

function Search() {
  const dispatch = useDispatch();

  const { items, fetching } = useSelector((state) => state.item);

  React.useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch, getAllItems]);

  return (
    <div className="lnf-search">
      <div className="lnf-search-header">
        <div>
          <div className="lnf-search-title">
            <Title level={2}>Search Pages</Title>
          </div>

          <div>
            <Row gutter={[8, 8]}>
              <Col span={6}>
                <Input size="large" placeholder="Search Item" />
              </Col>

              <Col span={5}>
                <DatePicker
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="When"
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
                />
              </Col>

              <Col span={6}>
                <Input size="large" placeholder="Location" />
              </Col>

              <Col span={1}>
                <Button icon={<SearchOutlined />} size="large" type="primary" />
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
