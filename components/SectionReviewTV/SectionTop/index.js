import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";
import Title from "components/Title";

const propTypes = {};

const SectionTop = (props) => {
  //! State
  const dispatch = useDispatch();
  const listItem = [
    {
      id: 1,
      title: "TV tốt nhất năm 2021 với giá dưới 20 triệu đồng",
      ImageSrc: "/static/assets/img/review-tv/top_3.png",
    },
    {
      id: 2,
      title: "Những thương hiệu TV tốt nhất năm 2021",
      ImageSrc: "/static/assets/img/review-tv/top_4.png",
    },
    {
      id: 3,
      title: "TV 4K tốt nhất",
      ImageSrc: "/static/assets/img/review-tv/top_5.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-review-tv-top">
      <Title label="TV Review" />
      <Row gutter={30}>
        <Col lg={12} md={24} xs={24}>
          <CardItem
            title="Tv tốt nhất năm 2021"
            author=""
            ImageSrc="/static/assets/img/review-tv/top_1.png"
          />
        </Col>
        <Col lg={12} md={24} xs={24}>
          <CardItem
            title="Tv 4K tốt nhất dưới 10 triệu đồng trong  năm 2021"
            author=""
            ImageSrc="/static/assets/img/review-tv/top_2.png"
          />
        </Col>
        {listItem.map((el) => (
          <Col lg={6} md={12} xs={12}>
            <CardItem
              key={el.id}
              title={el.title}
              ImageSrc={el.ImageSrc}
              author={el.author}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

SectionTop.propTypes = propTypes;
export default SectionTop;
