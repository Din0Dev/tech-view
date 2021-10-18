import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import { Button, Image, Row, Form, Col, Input } from "antd";

const propTypes = {};

const TabInfomation = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="tab-infomation">
      <div className="tab-infomation-title">
        <Title label="Thông tin cá nhân" />
        <Button className="btn-edit">Chỉnh sửa</Button>
      </div>
      <div className="tab-infomation-ava">
        <Image width={312} src="/static/assets/img/avatar.png" />
      </div>
      <div className="tab-infomation-form">
        <Form>
          <Row gutter={30}>
            <Col span={12}>
              <Form.Item label="Tên" className="input-custom">
                <Input placeholder="input placeholder" value="Nam" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Họ" className="input-custom">
                <Input placeholder="input placeholder" value="Do" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col span={12}>
              <Form.Item label="Giới tính" className="input-custom">
                <Input placeholder="input placeholder" value="Nam" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Năm sinh" className="input-custom">
                <Input placeholder="input placeholder" value="1998" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col span={12}>
              <Form.Item label="Nick name" className="input-custom">
                <Input placeholder="input placeholder" value="NamDo" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

TabInfomation.propTypes = propTypes;
export default TabInfomation;
