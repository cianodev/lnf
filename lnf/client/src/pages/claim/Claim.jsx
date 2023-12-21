import React, { useState } from "react";
import { Typography, Card, Row, Col, Input, Button, Checkbox } from "antd";
import { EnvironmentFilled, CalendarOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Claim() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      console.log("Form submitted!");
    } else {
      console.log("Please accept the terms and conditions.");
    }
  };

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
                <Row gutter={[0, 24]}>
                  <Col span={24}>
                    <Typography>
                      <Title level={4}>Claim Details</Title>
                      <Row gutter={[0, 16]}>
                        <Col span={24}>
                          <strong>
                            <h4>Complete Name</h4>
                          </strong>
                          <Input placeholder="Enter your name" />
                        </Col>
                        <Col span={24}>
                          <strong>
                            <h4>Email</h4>
                          </strong>
                          <Input placeholder="Enter your email" />
                        </Col>
                        <Col span={24}>
                          <strong>
                            <h4>Contact number</h4>
                          </strong>
                          <Input placeholder="Enter your contact number" />
                        </Col>
                        <Col span={24}>
                          <strong>
                            <h4>Reason for Claim</h4>
                          </strong>
                          <Input.TextArea rows={4} placeholder="Enter reason" />
                        </Col>
                        <Col span={24}>
                          <strong>
                            <h4>Specific Details about the Item</h4>
                          </strong>
                          <Input.TextArea
                            rows={4}
                            placeholder="Enter details"
                          />
                        </Col>
                      </Row>
                    </Typography>
                  </Col>
                </Row>
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
                <Col span={24}>
                  <Typography>
                    <Title level={2}>Step by Step Guide</Title>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse
                    </p>
                  </Typography>
                </Col>
              </Row>
            </Col>
          </Row>

          <div style={{ marginTop: "30px" }}>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
              I accept the terms and conditions and the privacy policy.
            </Checkbox>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                type="primary"
                onClick={handleSubmit}
                disabled={!isChecked}
                style={{
                  backgroundColor: "#042000",
                  borderColor: "#042000",
                  color: "#ffffff",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Claim;
