import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import FormSign from "components/FormSign";

const propTypes = {};

const SignIn = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="sign-in">
      <Row>
        <Col span={12}>
          <img src="/static/assets/img/tech-view_logo_white.png" />
        </Col>
        <Col span={12}>
          <FormSign label="Đăng nhập" />
        </Col>
      </Row>
    </div>
  );
};

SignIn.propTypes = propTypes;
export default SignIn;
