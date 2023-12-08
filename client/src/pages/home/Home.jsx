import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Space, Input, Row, Col, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import lostIcon from "@/assets/images/lost.svg";
import foundIcon from "@/assets/images/found.svg";

const { Title } = Typography;

function Home() {
  const navigate = useNavigate();

  const isLogged = localStorage.getItem('isLogged')

  const handleReportFoundClick = React.useCallback(() => {
    navigate(isLogged ? "/report?type=found" : "/login");
  }, [navigate, isLogged]);

  const handleReportLostClick = React.useCallback(() => {
    navigate(isLogged ? "/report?type=lost" : "/login");
  }, [navigate]);

  return (
    <div className="lnf-home">
      <div className="lnf-home-banner">
        <div>
          <Space direction="vertical" size="large">
            <Title className="text-strong">
              Find,
              <br />
              Claim,
              <br />
              Reconnect
            </Title>

            <Button size="large" onClick={handleReportFoundClick}>
              I think I Found Something!
            </Button>

            <div>
              <Space>
                <Input placeholder="Search Item" size="large" />
                <Input placeholder="Location" size="large" />
                <Button icon={<SearchOutlined />} size="large" type="primary" />
              </Space>
            </div>
          </Space>
        </div>
      </div>
      <div className="lnf-home-content">
        <div className="lnf-home-content-header">
          <Title>Discover the Lost, Claim the Found</Title>
        </div>
        <div>
          <Row gutter={[30, 30]}>
            <Col span={12}>
              <Card
                hoverable={true}
                bordered={true}
                className="lnf-home-content-card"
                onClick={handleReportLostClick}
              >
                <Space size="large">
                  <img alt="example" src={lostIcon} />
                  <Title level={3}>Report A Lost Item</Title>
                </Space>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                hoverable={true}
                bordered={true}
                className="lnf-home-content-card"
                onClick={handleReportFoundClick}
              >
                <Space size="large">
                  <img alt="example" src={foundIcon} />
                  <Title level={3}>Report Found Item</Title>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export { Home as default };
