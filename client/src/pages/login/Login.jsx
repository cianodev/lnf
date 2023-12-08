import * as React from "react";
import { Card, Row, Col, Typography, Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "@/store/reducer/user";
import { useNavigate } from "react-router-dom";

const { Title, Link, Text } = Typography;

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { fetching } = useSelector((state) => state.user)

  const user = localStorage.getItem('user')
  const isLogged = localStorage.getItem('isLogged')

  React.useEffect(() => {
    if(user && isLogged) {
      navigate('/profile')
    }
  }, [user, isLogged, navigate])

  const handleSubmitLoginForm = React.useCallback((data) => {
    dispatch(loginUser(data));
  }, [dispatch, loginUser]);

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
              onFinish={handleSubmitLoginForm}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password",
                  },
                ]}
              >
                <Input size="large" type="password" />
              </Form.Item>
              {/* Buttons */}
              <Row className="lnf-login-footer">
                <Col span={12}>
                  <Link className="text-hoverable" href="/registration">
                    New user?
                  </Link>
                </Col>
                <Col span={12} className="justify-button-end">
                  <Button
                    className="lnf-login-account-btn"
                    type="secondary"
                    htmlType="submit"
                    disabled={fetching}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
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
