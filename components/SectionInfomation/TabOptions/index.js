import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import { Button, Image, Row, Form, Col, Input } from "antd";

const propTypes = {};

const TabOptions = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="tab-infomation">
      <div className="tab-infomation-title">
        <Title label="Tùy chọn" />
      </div>
      <div className="tab-infomation-form"></div>
    </div>
  );
};

TabOptions.propTypes = propTypes;
export default TabOptions;
