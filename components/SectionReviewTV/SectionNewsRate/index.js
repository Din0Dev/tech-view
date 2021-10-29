import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItem from "components/CardIem";
import { Col, Row } from "antd";
import Title from "components/Title";
import CardItemHorizontal from "components/CardItemHorizontal";

const propTypes = {};

const SectionNewsRate = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItem = [
    {
      id: 1,
      title: "Đánh giá TV LG A1 OLED 4K HDR: Ít OLED hơn với ít tiền hơn",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_1.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 2,
      title: "Đánh giá TV OLED Sony A80J",
      rate: 4,
      ImageSrc: "/static/assets/img/review-tv/sen_2.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 3,
      title: "Đánh giá TV TCL 8K 6-Series (R648)",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_3.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 4,
      title: "Đánh giá TV TCL 85R745 85 inch 4K HDR",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_4.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 5,
      title: "Đánh giá TV LG C1 OLED 4K HDR",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_5.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 6,
      title: "Đánh giá TV Samsung QN90A Neo QLED 4K HDR: Bạn sẽ thích xem nó",
      rate: 4,
      ImageSrc: "/static/assets/img/review-tv/sen_6.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 7,
      title: "Đánh giá TV TCL 8K 6-Series (R648)",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_7.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 8,
      title: "Đánh giá TV TCL 85R745 85 inch 4K HDR",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_8.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 9,
      title: "Đánh giá TV OLED LG G1 Gallery Series: Sáng, đẹp, thông minh",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_9.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
    {
      id: 10,
      title: "Đánh giá TV OLED Sony Bravia XR A90J 4K HDR: OLED tiên tiến",
      rate: 5,
      ImageSrc: "/static/assets/img/review-tv/sen_10.png",
      author:
        "Thiết kế luôn là sự khác biệt tồn tại giữa hai dòng sản phẩm Iphone bản tiêu chuẩn",
    },
  ];
  //! Render
  return (
    <div className="section-news-rate">
      <Title label="Đánh giá mới nhất" />
      <Row gutter={30}>
        {listItem.map((el) => (
          <Col lg={12} xs={24}>
            <CardItemHorizontal
              key={el.id}
              rate={el.rate}
              title={el.title}
              imgSrc={el.ImageSrc}
              author={el.author}
              isRate={true}
              isReverse={true}
              isAuthor={true}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

SectionNewsRate.propTypes = propTypes;
export default SectionNewsRate;
