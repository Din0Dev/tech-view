import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Col, Row } from "antd";
import CardItemWithReadMore from "components/CardItemWithReadMore";
import CardItem from "components/CardIem";

const propTypes = {};

const SectionAttention = (props) => {
  //! State
  const dispatch = useDispatch();

  const listItem = [
    {
      id: 1,
      title:
        "Smartphone màn hình 'siêu phân giải 4K' của Xiaomi lộ diện, cả Apple và Samsung 'toát mồ hôi'",
      ImageSrc: "/static/assets/img/tin-tuc/section_attention_1.png",
    },
    {
      id: 2,
      title: "Samsung xóa mọi bằng chứng về sự tồn tại của Galaxy S21 FE",
      ImageSrc: "/static/assets/img/tin-tuc/section_attention_2.png",
    },

    {
      id: 3,
      title: "iPhone 13 giao hàng chậm trễ vì làn sóng COVID tại Việt Nam",
      ImageSrc: "/static/assets/img/tin-tuc/section_attention_3.png",
    },
    {
      id: 4,
      title: "Huawei Mate 50 sẽ ra mắt quý hai năm 2022 với Snapdragon 898",
      ImageSrc: "/static/assets/img/tin-tuc/section_attention_4.png",
    },
  ];
  //! Function
  //! Render
  return (
    <div className="section-news-readmore">
      <CardItemWithReadMore
        title="Đáng chú ý"
        customComponent={
          <Row gutter={30}>
            {listItem.map((el) => (
              <Col lg={6} xs={24} md={24}>
                <CardItem
                  key={el.id}
                  title={el.title}
                  ImageSrc={el.ImageSrc}
                  author=""
                />
              </Col>
            ))}
          </Row>
        }
      />
    </div>
  );
};

SectionAttention.propTypes = propTypes;
export default SectionAttention;
