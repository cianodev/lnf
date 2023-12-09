import * as React from "react";
import { Row, Col, Typography } from "antd";

import profileModel from "@/assets/images/model.svg";

const { Title, Text } = Typography;

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="lnf-profile">
      <div className="lnf-profile-header">
        <div style={{ marginBottom: "2rem" }}>
          <Text strong>Profile</Text>
        </div>
        <Row>
          <Col span={12}>
            <Title>{user.username}</Title>
            <div style={{ marginTop: "2rem" }}>
              <Title level={5}>Contact Information</Title>

              <Text>{user.contact_info}</Text>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <Title level={5}>Name</Title>

              <Text>{user.full_name}</Text>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <Title level={5}>Email</Title>

              <Text>{user.email}</Text>
            </div>
          </Col>

          <Col span={12} style={{display: 'flex',justifyContent: 'center'}}>
            <div
              style={{
                marginTop: '-5rem',
                borderRadius: "50rem",
                width: 500,
                height: 500,
                overflow: "hidden",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img src={profileModel} width={500}/>
            </div>
          </Col>
        </Row>
      </div>
      {console.log(user)}
    </div>
  );
}

export { Profile as default };
