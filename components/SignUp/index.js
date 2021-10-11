import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import FormSign from "components/FormSign";
import Link from "next/link";

const propTypes = {};

const SignUp = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="sign-in">
      <Row>
        <Col className="sign-in-img" span={8}>
          <Link href="/">
            <img src="/static/assets/img/tech-view_logo_white.png" />
          </Link>
        </Col>
        <Col className="sign-in-form" span={16}>
          <FormSign label="Đăng ký" isSignUp={true} />
        </Col>
      </Row>
    </div>
  );
};

SignUp.propTypes = propTypes;
export default SignUp;
