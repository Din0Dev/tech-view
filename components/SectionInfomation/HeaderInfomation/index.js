import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import { Button, Col, Row } from "antd";
const propTypes = {};

const HeaderInfomation = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Header className="header-infomation" style={{ width: "100%" }}>
      <Row className="header-navbar">
        <Col span={12} className="header-navbar-left">
          <Link href="/">
            <div className="logo" />
          </Link>
        </Col>
        <Col span={12} className="header-navbar-right">
          <img src="/static/assets/img/icon/avanho.png" />
          <Button>Trợ giúp</Button>
        </Col>
      </Row>
    </Header>
  );
};

HeaderInfomation.propTypes = propTypes;
export default HeaderInfomation;
