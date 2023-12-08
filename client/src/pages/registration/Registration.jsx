import * as React from "react";
import { Card, Row, Col, Typography, Form, Input, Button } from "antd";

const { Title, Link, Text } = Typography;

function Registration() {
  const handleSubmitRegistrationForm = React.useCallback(() => {}, []);

  return (
    <div className="lnf-registration">
      <Row gutter={[40, 40]} className="lnf-registration-wrapper">
        <Col span={12}>
          <Card className="lnf-registration-card" bordered>
            <div className="lnf-registration-card-title">
              <Title level={2}>Register a New Account</Title>
            </div>

            <Form
              layout="vertical"
              onFinish={handleSubmitRegistrationForm}
              autoComplete="off"
            >
              <Form.Item label="Complete Name" name="full_name">
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Username" name="username">
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Contact Number" name="contact_info">
                <Input size="large" />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input size="large" type="password" />
              </Form.Item>
            </Form>
            {/* Buttons */}
            <Row className="lnf-registration-footer">
              <Col span={12}>
                <Link className="text-hoverable" href="/login">
                  I already have an account
                </Link>
              </Col>
              <Col span={12} className="justify-button-end">
                <Button className="lnf-create-account-btn" type="secondary">
                  Create Account
                </Button>
              </Col>
            </Row>
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

export { Registration as default };
