import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";
import CardItemHorizontal from "components/CardItemHorizontal";
import { randomRate } from "../../../utils/randomRate";
const propTypes = {};

const SectionTop = (props) => {
  //! State
  const dispatch = useDispatch();
  const listItem = [
    {
      id: 1,
      title: "Đánh giá NINTENDO SWITCH OLED: Nâng cấp là một bản nâng cấp",
      rate: randomRate(),
      imgSrc: "/static/assets/img/review-all/top_2.png",
    },
    {
      id: 2,
      title: "Metroid Dread đánh giá: Nữ hoàng đã trở lại, rất đáng khen ngợi",
      rate: randomRate(),
      imgSrc: "/static/assets/img/review-all/top_3.png",
    },
    {
      id: 3,
      title:
        "Đánh giá Toyota Highlander Platinum 2021: SUV cỡ trung tiết kiệm nhiên liệu",
      rate: randomRate(),
      imgSrc: "/static/assets/img/review-all/top_4.png",
    },
    {
      id: 4,
      title: "Đánh giá Hyundai Tucson Hybrid Limited AWD 2022: Thêm sức mạnh",
      rate: randomRate(),
      imgSrc: "/static/assets/img/review-all/top_5.png",
    },
    {
      id: 5,
      title:
        " Đánh giáAmazon Fire TV Stick 4K Max : Thêm lựa chọn cho người dùng",
      rate: randomRate(),
      imgSrc: "/static/assets/img/review-all/top_6.png",
    },
    {
      id: 1,
      title:
        "Lái thử Mercedes-Benz EQS : Sang trọng Đánh giá NINTENDO SWITCH OLED: Nâng cấp là một bản nâng cấp",
      rate: randomRate(),
      imgSrc: "/static/assets/img/review-all/top_7.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-top">
      <Row>
        <Col lg={24}>
          <CardItem
            title="Đánh giá nhanh Porsche Taycan Turbo S 2020 : Đỉnh cao xe điện"
            ImageSrc="/static/assets/img/review-all/top_1.png"
          />
        </Col>
        {listItem.map((el) => (
          <Col lg={12} md={12} xs={24}>
            <CardItemHorizontal
              key={el.id}
              isReverse={true}
              title={el.title}
              isRate={true}
              rate={el.rate}
              isAuthor={true}
              author={el.author}
              imgSrc={el.imgSrc}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

SectionTop.propTypes = propTypes;
export default SectionTop;
