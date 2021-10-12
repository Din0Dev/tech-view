import React from "react";
import Link from "next/link";
import { Footer } from "antd/lib/layout/layout";
import { Col, Row } from "antd";

const FooterLayout = (props) => {
  return (
    <Footer className="footer-custom" style={{ textAlign: "center" }}>
      <Row>
        <Col span={16}>
          <h3>TECHVIEW</h3>
          <ul>
            <li>Home</li>
            <li>Tech</li>
            <li>Reviews</li>
            <li>Life</li>
            <li>How-to?</li>
          </ul>
        </Col>
        <Col span={8}>
          <p>FOLLOW</p>
          <div className="social">
            <img src="/static/assets/img/icon/lg.png" />
            <img src="/static/assets/img/icon/insta.svg" />
            <img src="/static/assets/img/icon/youtube.svg" />
          </div>
        </Col>
      </Row>
    </Footer>
  );
};
export default FooterLayout;
