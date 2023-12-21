import React, { useState } from "react";
import { Typography, Card, Row, Col, Input, Button, Checkbox } from "antd";
import { EnvironmentFilled, CalendarOutlined } from "@ant-design/icons";

const { Title } = Typography;

function ItemView() {
  return (
    <div className="lnf-report">
      {/* Header */}
      <div className="lnf-report-header">
        <Title level={2}>Item Claim Page</Title>
      </div>

      {/* Content */}
      <div className="lnf-report-content">
        <Card className="lnf-report-content-card">
          <Row gutter={[30, 0]}>
            {/* Left Column */}
            <Col span={12}>
              <div
                style={{
                  border: "1px solid #ccc",
                  height: "450px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                Picture or Content Here
              </div>
              <div style={{ marginTop: "20px" }}>
              </div>
            </Col>

            {/* Right Column */}
            <Col span={12}>
              <Row gutter={[0, 16]}>
                <Col span={24}>
                  <Typography>
                    <Title level={1}>Report Details</Title>
                    <p>posted by: UserName123</p>
                    <Row gutter={[16, 0]}>
                      <Col span={12}>
                        <Typography.Title level={3}>LOST ITEM</Typography.Title>
                      </Col>
                      <Col span={12}>
                        <Typography.Title level={3}>CATEGORY</Typography.Title>
                      </Col>
                    </Row>
                    <Typography.Text>
                      <EnvironmentFilled style={{ marginRight: 8 }} /> Cebu,
                      Philippines
                    </Typography.Text>
                    <p>
                      <CalendarOutlined style={{ marginRight: 8 }} />
                      April 13, 2022 8:30 AM
                    </p>
                    <Typography.Title level={4}>Contact</Typography.Title>
                    <Row gutter={[16, 0]}>
                      <Col span={12}>
                        <p>+234 09012346514</p>
                      </Col>
                      <Col span={12}>
                        <p>hello@largerthani.cor</p>
                      </Col>
                    </Row>
                  </Typography>
                </Col>
                <Col span={24}>
                  <Typography>
                    <Title level={4}>Description</Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod libero a odio fermentum euismod.
                    </p>
                  </Typography>
                </Col>
                <Col span={24}>
                  <Typography>
                    <Title level={4}>Location</Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod libero a odio fermentum euismod. Duis cursus
                      mi quis eros elementum tristique.
                    </p>
                  </Typography>
                </Col>
              </Row>
            </Col>
          </Row>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#042000",
                  borderColor: "#042000",
                  color: "#ffffff",
                }}
              >
                Submit
              </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ItemView;
