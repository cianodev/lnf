import * as React from "react";
import { Card, Row, Col, Typography, Form, Input, Button } from "antd";

const { Title, Link, Text } = Typography;

function Login() {
  const handleSubmitRegistrationForm = React.useCallback(() => {}, []);

  return (
    <div className="lnf-login">
      <Row gutter={[40, 40]} className="lnf-login-wrapper">
        <Col span={12}>
          <Card className="lnf-login-card" bordered>
            <div className="lnf-login-card-title">
              <Title level={2}>Login</Title>
            </div>

            <Form
              layout="vertical"
              onFinish={handleSubmitRegistrationForm}
              autoComplete="off"
            >
              <Form.Item label="Username" name="username">
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input size="large" type="password" />
              </Form.Item>
            </Form>
            {/* Buttons */}
            <Row className="lnf-login-footer">
              <Col span={12}>
                <Link className="text-hoverable" href="/login">
                  Forgot Password
                </Link>
              </Col>
              <Col span={12} className="justify-button-end">
                <Button className="lnf-login-account-btn" type="secondary">
                  Login
                </Button>
              </Col>
            </Row>
            {/* Banner */}
            <div className="lnf-login-banner">
              <div className="lnf-login-banner-header">
                <Text strong>OUR MISSION</Text>
              </div>

              <Title level={4}>We make sure to provide free service</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra{" "}
              </Text>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <div>
            <Title>We&apos;d love to hear from you</Title>
            <Text>
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </Text>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export { Login as default };
