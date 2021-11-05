import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItemReview from "components/CardItemReview";
import { randomDate } from "../../../utils/randomDate";
import { randomRate } from "../../../utils/randomRate";

const propTypes = {};

const SectionCarHeadPhone = (props) => {
  //! State
  const dispatch = useDispatch();
  const listLeft = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title: "Đánh giá Hyundai Tucson Hybrid Limited AWD 2022: Thêm sức mạnh và hiệu quả",
      imgSrc: "/static/assets/img/review-all/car_2.png",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Kia K5 2.5 GT 2021: Một kỷ nguyên mới",
      imgSrc: "/static/assets/img/review-all/car_3.png",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Toyota Venza 2021: Star gazer",
      imgSrc: "/static/assets/img/review-all/car_4.png",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title: "Đánh giá Volkswagen Arteon 2021: Sự sang trọng của Đức cho tất cả mọi người",
      imgSrc: "/static/assets/img/review-all/car_5.png",
    },
  ];
  const listRight = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Edifier NeoBuds Pro: Một tiêu chuẩn mới trong âm thanh giá cả phải chăng",
      imgSrc: "/static/assets/img/review-all/hp_2.png",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Sony WF-1000XM4: Tai nghe không dây gần như hoàn hảo",
      imgSrc: "/static/assets/img/review-all/hp_3.png",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Beats Studio Buds: Đây là AirPods Pro Lite",
      imgSrc: "/static/assets/img/review-all/hp_4.png",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Corsair Virtuoso RGB Wireless XT đánh giá: Một tai nghe tốt ngoài chơi game",
      imgSrc: "/static/assets/img/review-all/hp_5.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-review-inner">
      <Row gutter={30}>
        <Col lg={12} md={12} xs={24}>
          <CardItemReview
            label="Xe"
            titleTop="Những chiếc xe tốt nhất đang bán trên thị trường"
            authorTop="By NamDo"
            listItem={listLeft}
            ImageSrcTop="/static/assets/img/review-all/car_1.png"
            href="#"
          />
        </Col>
        <Col lg={12} md={12} xs={24}>
          <CardItemReview
            label="Tai nghe"
            titleTop="Tai nghe tốt nhất năm 2021"
            authorTop="By NamDo"
            listItem={listRight}
            ImageSrcTop="/static/assets/img/review-all/hp_1.png"
            href="#"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionCarHeadPhone.propTypes = propTypes;
export default SectionCarHeadPhone;
