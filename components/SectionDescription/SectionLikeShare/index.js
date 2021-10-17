import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button, Col, Row } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
const propTypes = {};

const SectionLikeShare = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-like-share">
      <Row>
        <Col span={12}>
          <Button style={{marginRight: "15px"}} type="primary" icon={<LikeOutlined />}>
            10
          </Button>
          <Button icon={<DislikeOutlined />}>1</Button>
        </Col>
        <Col span={12} style={{display: 'flex', justifyContent: 'right'}}>
          <Button type="primary" icon={<ShareAltOutlined />}>
            Chia sẻ
          </Button>
        </Col>
      </Row>
    </div>
  );
};

SectionLikeShare.propTypes = propTypes;
export default SectionLikeShare;
