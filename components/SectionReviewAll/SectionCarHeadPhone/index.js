import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItemReview from "components/CardItemReview";

const propTypes = {};

const SectionCarHeadPhone = (props) => {
  //! State
  const dispatch = useDispatch();
  const listLeft = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title: "Đánh giá Hyundai Tucson Hybrid Limited AWD 2022: Thêm sức mạnh và hiệu quả",
      imgSrc: "",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title:
        "Đánh giá Kia K5 2.5 GT 2021: Một kỷ nguyên mới",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: 3,
      author: "By NamDo",
      title:
        "Đánh giá Toyota Venza 2021: Star gazer",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: 4,
      author: "By NamDo",
      title: "Đánh giá Volkswagen Arteon 2021: Sự sang trọng của Đức cho tất cả mọi người",
      imgSrc: "",
    },
  ];
  const listRight = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title:
        "Đánh giá Edifier NeoBuds Pro: Một tiêu chuẩn mới trong âm thanh giá cả phải chăng",
      imgSrc: "",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title:
        "Đánh giá Sony WF-1000XM4: Tai nghe không dây gần như hoàn hảo",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: 3,
      author: "By NamDo",
      title:
        "Đánh giá Beats Studio Buds: Đây là AirPods Pro Lite",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: 4,
      author: "By NamDo",
      title:
        "Corsair Virtuoso RGB Wireless XT đánh giá: Một tai nghe tốt ngoài chơi game",
      imgSrc: "",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-review-inner">
      <Row gutter={30}>
        <Col span={12}>
          <CardItemReview
            label="Xe"
            titleTop="Những chiếc xe tốt nhất đang bán trên thị trường"
            authorTop="By NamDo"
            listItem={listLeft}
            href="#"
          />
        </Col>
        <Col span={12}>
          <CardItemReview
            label="Tai nghe"
            titleTop="Tai nghe tốt nhất năm 2021"
            authorTop="By NamDo"
            listItem={listRight}
            href="#"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionCarHeadPhone.propTypes = propTypes;
export default SectionCarHeadPhone;
