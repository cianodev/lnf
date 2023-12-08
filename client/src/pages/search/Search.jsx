import * as React from "react";
import { Typography, Input, DatePicker, Button, Row, Col, Card } from "antd";

import { ReadOutlined, CalendarOutlined } from "@ant-design/icons";

import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function Search() {
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
                <Input size="large" placeholder="Category" />
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
              <Text strong>Search Results</Text>
            </div>
          </Col>
        </Row>
        <div className="lnf-search-content-card-footer">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card
                hoverable
                bordered
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <div className="lnf-search-content-card-footer">
                  <Title level={5}>Lorem</Title>
                  <div>
                    <ReadOutlined />
                    <Text>Address</Text>
                  </div>
                  <div>
                    <CalendarOutlined />
                    <Text>mm/dd/yyyy</Text>
                  </div>
                </div>

                <div className="lnf-search-content-card-footer-button">
                  <Button size="small" type="primary">
                    View Item
                  </Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                bordered
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <div>
                  <Title level={5}>Lorem</Title>
                  <div>
                    <ReadOutlined />
                    <Text>Address</Text>
                  </div>
                  <div>
                    <CalendarOutlined />
                    <Text>mm/dd/yyyy</Text>
                  </div>
                </div>

                <div className="lnf-search-content-card-footer-button">
                  <Button size="small" type="primary">
                    View Item
                  </Button>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                bordered
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <div className="lnf-search-content-card-footer">
                  <Title level={5}>Lorem</Title>
                  <div>
                    <ReadOutlined />
                    <Text>Address</Text>
                  </div>
                  <div>
                    <CalendarOutlined />
                    <Text>mm/dd/yyyy</Text>
                  </div>
                </div>

                <div className="lnf-search-content-card-footer-button">
                  <Button size="small" type="primary">
                    View Item
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export { Search as default };
