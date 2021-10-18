import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import { Button, Image, Row, Form, Col, Input } from "antd";

const propTypes = {};

const TabActivity = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="tab-infomation">
      <div className="tab-infomation-title">
        <Title label="Hoạt động gần đây" />
      </div>
      <div className="tab-infomation-activity">
        <Row>
          <Col span={12} className="tab-infomation-seen">
            Bài viết đã xem
          </Col>
          <Col span={12}>
            Bài viết đã thích
          </Col>

        </Row>
      </div>
    </div>
  );
};

TabActivity.propTypes = propTypes;
export default TabActivity;
