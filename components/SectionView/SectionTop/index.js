import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";

const propTypes = {};

const SectionTop = (props) => {
  //! State
  const dispatch = useDispatch();
  const listItemTop = [
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
    {
      id: 5,
      title:
        "Galaxy Watch thế hệ tiếp theo có thể sạc bằng năng lượng mặt trời",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_1.png",
    },
    {
      id: 6,
      title:
        "OPPO Watch Free ra mắt, thiết kế cao cấp như Apple Watch, giá rẻ bất ngờ",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_2.png",
    },

    {
      id: 7,
      title: "iPhone 13 Mini không thể sạc nhanh với Magsafe",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_3.png",
    },
    {
      id: 8,
      title: "Đối thủ 'nặng ký' của Galaxy Z FLip3 sẽ ra mắt trong năm nay",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_4.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="sectoin-top">
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
        {listItemTop.map((el) => (
          <Col span={6}>
            <CardItem
              key={el.id}
              title={el.title}
              author=""
              ImageSrc={el.ImageSrc}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

SectionTop.propTypes = propTypes;
export default SectionTop;
