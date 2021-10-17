import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import Title from "components/Title";
import CardItem from "components/CardIem";
import CardItemHorizontal from "components/CardItemHorizontal";
import ReadMore from "components/Icon/ReadMore";

const propTypes = {};

const SectionAndroid = (props) => {
  //! State
  const listCard = [
    {
      id: 1,
      title: "Nokia trở lại cuộc chơi máy tính bảng với Nokia T20 giá 5tr đồng",
      imgSrc: "/static/assets/img/tin-tuc-mobile/adr_1.png",
    },
    {
      id: 2,
      title: "Nokia G300 5G bất ngờ lộ ảnh kèm thông số kỹ thuật chi tiết",
      imgSrc: "/static/assets/img/tin-tuc-mobile/adr_2.png",
    },
    {
      id: 3,
      title:
        "Android TV là gì? Nền tảng TV thông minh của Google được giải thích đầy đủ",
      imgSrc: "/static/assets/img/tin-tuc-mobile/adr_3.png",
    },
    {
      id: 4,
      title: "TOP 4 mẫu điện thoại màn hình gập đáng mua nhất hiện nay",
      imgSrc: "/static/assets/img/tin-tuc-mobile/adr_4.png",
    },
    {
      id: 5,
      title:
        "6 triệu nên mua điện thoại android gì 2021 chụp hình đẹp, pin khỏe?",
      imgSrc: "/static/assets/img/tin-tuc-mobile/adr_5.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-new">
      <Title label="Android" />
      <Row gutter={30}>
        <Col span={10}>
          {listCard.map((item) => (
            <CardItemHorizontal
              key={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
            />
          ))}
          <ReadMore href="/tin-tuc" />
        </Col>
        <Col span={14}>
          <Row>
            <Col span={24}>
              <CardItem
                title="Android 12: Mọi thứ bạn cần biết"
                author=""
                ImageSrc="/static/assets/img/tin-tuc-mobile/adr_6.png"
              />
            </Col>
            <Col span={12} className="section-new-inner-left">
              <CardItem
                title="Hình ảnh mới của Samsung Galaxy S22 Ultra với cụm camera độc nhất thị trường"
                author=""
                ImageSrc="/static/assets/img/tin-tuc-mobile/adr_7.png"
              />
            </Col>
            <Col span={12} className="section-new-inner-right">
              <CardItem
                title="Khi nào điện thoại của tôi có Android 12?"
                author=""
                ImageSrc="/static/assets/img/tin-tuc-mobile/adr_8.png"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

SectionAndroid.propTypes = propTypes;
export default SectionAndroid;
