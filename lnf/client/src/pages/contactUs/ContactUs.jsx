import * as React from "react";
import {
  Typography,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Space,
  Divider,
  Form,
} from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function ContactUs() {
  return (
    <div className="lnf-contact-us">
      <div className="lnf-contact-us-header">
        <Row gutter={[50, 50]}>
          <Col span={12}>
            <Text strong>Contact Us</Text>
            <Title level={1}>We&apos;d love to hear from you</Title>
            <Text>
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </Text>
          </Col>

          <Col span={12}>
            <div>
              <Title level={5}>Let&apos;s Talk</Title>
              <Space size="large">
                <Text>+234 09012346514</Text>
                <Text>support@lostandfound.com</Text>
              </Space>
            </div>

            <Divider />

            <div>
              <Title level={5}>Head Office</Title>
              <Text>
                Gov. M. Cuenco Avenue, Barangay Talamban, Cebu City 6000 Cebu
              </Text>
            </div>

            <Divider />

            <div>
              <Title level={5}>Department</Title>
              <Text>Information Technology</Text>
            </div>

            <div className="lnf-contact-us-socials">
              <Space>
                <FacebookOutlined />
                <TwitterOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
              </Space>
            </div>
          </Col>
        </Row>
      </div>

      <div className="lnf-contact-us-content">
        <Form layout="vertical" autoComplete="off">
          <Row gutter={[30, 0]}>
            <Col span={12}>
              <Form.Item label="First Name" name="first_name">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name" name="last_name">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Email" name="email">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Subject" name="subject">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Message" name="subject">
                <Input.TextArea rows={4} placeholder="Type your message" />
              </Form.Item>
            </Col>
            <Col offset={10}>
              <Button type="primary">Send Message</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default ContactUs;
