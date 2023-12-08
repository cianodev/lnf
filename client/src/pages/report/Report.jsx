import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Typography,
  Card,
  Form,
  Input,
  Row,
  Col,
  Radio,
  DatePicker,
  Select,
  Button,
  notification,
} from "antd";
import { reportItem } from "@/store/reducer/item";

const { Title, Text } = Typography;

function Report() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [searchParams] = useSearchParams();

  const [api, contextHolder] = notification.useNotification();

  const { fetching, status } = useSelector((state) => state.item);

  React.useEffect(() => {
    if (status) {
      api.success({
        message: "New Report created!",
        description: (
          <div>
            The item submitted is now being reviewed by our staff.
          </div>
        ),
      });

      form.resetFields();
    }
  }, [status, form]);

  const handleRequestLostFound = React.useCallback(
    (data) => {
      const user = JSON.parse(localStorage.getItem("user"));

      dispatch(
        reportItem({
          ...data,
          user,
        })
      );
    },
    [dispatch, reportItem]
  );

  return (
    <div className="lnf-report">
      {contextHolder}
      <div className="lnf-report-header">
        <div>
          <div className="lnf-report-title">
            <Title level={2}>Report an Item</Title>
            <Text>Please be more details in describing the item</Text>
          </div>
        </div>
      </div>

      <div className="lnf-report-content">
        <Form
          form={form}
          onFinish={handleRequestLostFound}
          layout="vertical"
          autoComplete="off"
          initialValues={{
            item_type: searchParams.get("type"),
          }}
        >
          <Card className="lnf-report-content-card">
            <Title level={4}>Item Picture</Title>

            <Title level={4}>Item Information</Title>
            <Row gutter={[30, 0]}>
              <Col span={12}>
                <Form.Item label="Title" name="title">
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Item Type" name="item_type">
                  <Radio.Group size="large">
                    <Radio.Button value="lost">Lost</Radio.Button>
                    <Radio.Button value="found">Found</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Category" name="category">
                  <Select
                    size="large"
                    options={[
                      { value: "gadgets", label: "Gadgets" },
                      { value: "money", label: "Money" },
                      { value: "accessories", label: "Accessories" },
                      { value: "books", label: "Books" },
                      { value: "others", label: "Others" },
                    ]}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Date and Time Lost/Found"
                  name="date_lost_found"
                >
                  <DatePicker
                    size="large"
                    style={{ width: "100%" }}
                    showTime={{ format: "HH:mm" }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder="Select Date and Time"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Title level={4}>Specific Details</Title>
            <Text>*only if applicable</Text>
            <Row gutter={[30, 0]}>
              <Col span={12}>
                <Form.Item label="Model" name="modal">
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Serial#" name="serial_number">
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Primary Color" name="primary_color">
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Secondary Color" name="secondary_color">
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Brand" name="brand">
                  <Input size="large" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label="Specific Description"
                  name="specific_description"
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Type your message"
                    size="large"
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Specific Location" name="specific_location">
                  <Input.TextArea
                    rows={4}
                    placeholder="Type your message"
                    size="large"
                  />
                </Form.Item>
              </Col>

              <Col span={24} className="lnf-report-content-card-button-wrapper">
                <Button
                  className="lnf-report-content-card-button-wrapper-button"
                  size="large"
                  type="secondary"
                  htmlType="submit"
                  loading={fetching}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Card>
        </Form>
      </div>
    </div>
  );
}

export default Report;
