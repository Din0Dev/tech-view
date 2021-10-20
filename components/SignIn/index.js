import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import FormSign from "components/FormSign";
import Link from "next/link";
const propTypes = {};

const SignIn = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="sign-in">
      <Row>
        <Col className="sign-in-img is-mobile" lg={8} md={24} xs={24}>
          <Link href="/">
            <img src="/static/assets/img/tech-view-logo_white.svg" />
          </Link>
        </Col>
        <Col className="sign-in-form" lg={16} md={24} xs={24}>
          <FormSign label="Đăng nhập" />
        </Col>
      </Row>
    </div>
  );
};

SignIn.propTypes = propTypes;
export default SignIn;
