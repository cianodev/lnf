import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  notification,
} from "antd";

import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "@/store/reducer/user";

const { Title, Link, Text } = Typography;

function Registration() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [api, contextHolder] = notification.useNotification();

  const { fetching, status } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (status) {
      api.success({
        message: 'New user created!',
        description: <div>Yay! Try <Link href="/login">log-in</Link> to the page.</div>,
      })
    }
  }, [status])

  const user = localStorage.getItem('user')
  const isLogged = localStorage.getItem('isLogged')

  React.useEffect(() => {
    if(user && isLogged) {
      navigate('/profile')
    }
  }, [user, isLogged, navigate])

  const handleSubmitRegistrationForm = React.useCallback(
    (data) => {
      dispatch(registerUser(data));
      form.resetFields();
    },
    [dispatch, form, api]
  );

  return (
    <div className="lnf-registration">
      {contextHolder}
      <Row gutter={[40, 40]} className="lnf-registration-wrapper">
        <Col span={12}>
          <Card className="lnf-registration-card" bordered>
            <div className="lnf-registration-card-title">
              <Title level={2}>Register a New Account</Title>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmitRegistrationForm}
              autoComplete="off"
            >
              <Form.Item
                label="Complete Name"
                name="full_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Complete Name",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

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
                label="Contact Number"
                name="contact_info"
                rules={[
                  {
                    required: true,
                    message: "Please input your Contact Number",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    pattern: /^[A-Za-z0-9._%+-]+@usc\.edu\.ph$/,
                    message: "The email should be affiliated to usc.edu.ph",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
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
              <Row className="lnf-registration-footer">
                <Col span={12}>
                  <Link className="text-hoverable" href="/login">
                    I already have an account
                  </Link>
                </Col>
                <Col span={12} className="justify-button-end">
                  <Button
                    className="lnf-create-account-btn"
                    type="secondary"
                    htmlType="submit"
                    disabled={fetching}
                  >
                    Create Account
                  </Button>
                </Col>
              </Row>
            </Form>
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
