import * as React from "react";
import { Typography } from "antd";

import aboutImage from "@/assets/images/about.svg";

const { Title, Text, Paragraph } = Typography;

function WhatWeDo() {
  return (
    <div className="lnf-what-we-do">
      <div className="lnf-what-we-do-header">
        <div>
          <div className="lnf-what-we-do-title">
            <Title level={1}>Lost and Found Management System</Title>
          </div>

          <div className="lnf-what-we-do-details">
            <Text>Last Update December 01, 2023</Text>
          </div>
        </div>
      </div>
      <div className="lnf-what-we-do-content">
        <div className="lnf-what-we-do-content-title">
          <Title level={2}>What we do</Title>
        </div>

        <Paragraph>
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </Paragraph>

        <Paragraph>
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus
          sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras
          volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a
          in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec
          arcu sed elit scelerisque tempor ornare tristique. Integer faucibus
          duis praesent tempor feugiat ornare in. Erat libero egestas porttitor
          nunc pellentesque mauris et pulvinar eget.
        </Paragraph>

        <div className="lnf-what-we-do-content-image">
          <img src={aboutImage} />
        </div>

        <Paragraph>
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
          in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
          tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
          accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in
          viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
          vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum
          amet, nisi eu id.
        </Paragraph>
      </div>
    </div>
  );
}

export { WhatWeDo as default };
