import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import Title from "components/Title";
import CardItem from "components/CardIem";
import CardItemHorizontal from "components/CardItemHorizontal";
import ReadMore from "components/Icon/ReadMore";

const propTypes = {};

const SectionMobile = (props) => {
  //! State
  const listCard = [
    {
      id: 1,
      title:
        "Apple vẫn bất ngờ phát hành macOS Big Sur 11.6.1 Beta dù đang thử nghiệm macOS 12",
      imgSrc: "/static/assets/img/section-new/tin-moi-left_1.png",
    },
    {
      id: 2,
      title: "Nokia G300 5G bất ngờ lộ ảnh kèm thông số kỹ thuật chi tiết",
      imgSrc: "/static/assets/img/section-new/tin-moi-left_2.png",
    },
    {
      id: 3,
      title: "Hacker có thể lợi dụng AirTag để tấn công lừa đảo",
      imgSrc: "/static/assets/img/section-new/tin-moi-left_3.png",
    },
    {
      id: 4,
      title:
        "Apple vẫn bất ngờ phát hành macOS Big Sur 11.6.1 Beta dù đang thử nghiệm macOS 12",
      imgSrc: "/static/assets/img/section-new/tin-moi-left_4.png",
    },
    {
      id: 5,
      title:
        "Apple vẫn bất ngờ phát hành macOS Big Sur 11.6.1 Beta dù đang thử nghiệm macOS 12",
      imgSrc: "/static/assets/img/section-new/tin-moi-left_5.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-new">
      <Title label="Mobile" />
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
                title="Tra tấn iPhone 13 Pro Max: Mặt kính Ceramic Shield, khung thép có giúp thiết bị sống sót?"
                author=""
                ImageSrc="/static/assets/img/section-new/tin-moi-right_1.png"
              />
            </Col>
            <Col span={12} className="section-new-inner-left">
              <CardItem
                title="Hình ảnh mới của Samsung Galaxy S22 Ultra với cụm camera độc nhất thị trường"
                author=""
                ImageSrc="/static/assets/img/section-new/tin-moi-right_2.png"
              />
            </Col>
            <Col span={12} className="section-new-inner-right">
              <CardItem
                title="3 chiếc iPhone chính hãng có giá rẻ nhất trong tháng 10, vẫn được khách Việt ưa chuộng"
                author=""
                ImageSrc="/static/assets/img/section-new/tin-moi-right_3.png"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

SectionMobile.propTypes = propTypes;
export default SectionMobile;
