import * as React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function Report() {
  return (
    <div className="lnf-report">
      <div className="lnf-report-header">
        <div>
          <div className="lnf-report-title">
            <Title level={2}>Report an Item</Title>
          </div>
        </div>
      </div>

      <div className="lnf-report-content"></div>
    </div>
  );
}

export default Report;
