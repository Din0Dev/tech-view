import React from "react";
import Link from "next/link";
import { Footer } from "antd/lib/layout/layout";
import { Col, Row } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const FooterLayout = (props) => {
  return (
    <Footer className="footer-custom" style={{ textAlign: "center" }}>
      <Row>
        <Col lg={16} md={24} xs={24}>
          <h3>TECHVIEW</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tin-tuc">Tech</Link>
            </li>
            <li>
              <Link href="/review-all">Reviews</Link>
            </li>
            <li>Life</li>
            <li>How-to?</li>
          </ul>
        </Col>
        <Col lg={8} md={24} xs={24}>
          <p>FOLLOW</p>
          <div className="social">
            <FacebookOutlined />
            <InstagramOutlined />
            <YoutubeOutlined />
          </div>
        </Col>
      </Row>
    </Footer>
  );
};
export default FooterLayout;
