import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItem from "components/CardIem";
import { Col, Row } from "antd";

const propTypes = {};

const SectionTop = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-top">
      <Row gutter={30}>
        <Col span={12}>
          <CardItem
            title="Các trang công nghệ thế giới đánh giá sao về iPhone 13 series?"
            author=""
            ImageSrc="/static/assets/img/tin-tuc/section_top_1.png"
          />
        </Col>
        <Col span={12}>
          <CardItem
            title="Microsoft ra mắt Surface Duo 2 và Surface Go 3: Nhiều nâng cấp đột phá!"
            author=""
            ImageSrc="/static/assets/img/tin-tuc/section_top_2.png"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionTop.propTypes = propTypes;
export default SectionTop;
