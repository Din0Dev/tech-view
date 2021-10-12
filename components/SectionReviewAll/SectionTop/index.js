import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";
import CardItemHorizontal from "components/CardItemHorizontal";

const propTypes = {};

const SectionTop = (props) => {
  //! State
  const dispatch = useDispatch();
  const listItem = [
    {
      id: 1,
      title: "Đánh giá NINTENDO SWITCH OLED: Nâng cấp là một bản nâng cấp",
      rate: 4,
      author: "10h",
    },
    {
      id: 2,
      title: "Metroid Dread đánh giá: Nữ hoàng đã trở lại, rất đáng khen ngợi",
      rate: 3,
      author: "11h",
    },
    {
      id: 3,
      title:
        "Đánh giá Toyota Highlander Platinum 2021: SUV cỡ trung tiết kiệm nhiên liệu",
      rate: 5,
      author: "2h",
    },
    {
      id: 4,
      title: "Đánh giá Hyundai Tucson Hybrid Limited AWD 2022: Thêm sức mạnh",
      rate: 4,
      author: "10h",
    },
    {
      id: 5,
      title:
        " Đánh giáAmazon Fire TV Stick 4K Max : Thêm lựa chọn cho người dùng",
      rate: 5,
      author: "3h",
    },
    {
      id: 1,
      title:
        "Lái thử Mercedes-Benz EQS : Sang trọng Đánh giá NINTENDO SWITCH OLED: Nâng cấp là một bản nâng cấp",
      rate: 4,
      author: "6h",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-top">
      <Row>
        <Col span={24}>
          <CardItem title="Đánh giá nhanh Porsche Taycan Turbo S 2020 : Đỉnh cao xe điện" />
        </Col>
        {listItem.map((el) => (
          <Col span={12}>
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
