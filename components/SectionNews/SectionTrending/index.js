import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Col, Row } from "antd";
import CardItemWithReadMore from "components/CardItemWithReadMore";
import CardItem from "components/CardIem";

const propTypes = {};

const SectionTrending = (props) => {
  //! State
  const dispatch = useDispatch();

  const listItem = [
    {
      id: 1,
      title:
        "Galaxy Watch thế hệ tiếp theo có thể sạc bằng năng lượng mặt trời",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_1.png",
    },
    {
      id: 2,
      title:
        "OPPO Watch Free ra mắt, thiết kế cao cấp như Apple Watch, giá rẻ bất ngờ",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_2.png",
    },

    {
      id: 3,
      title: "iPhone 13 Mini không thể sạc nhanh với Magsafe",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_3.png",
    },
    {
      id: 4,
      title: "Đối thủ 'nặng ký' của Galaxy Z FLip3 sẽ ra mắt trong năm nay",
      ImageSrc: "/static/assets/img/tin-tuc/section_trending_4.png",
    },
  ];
  //! Function
  //! Render
  return (
    <div className="section-news-readmore">
      <CardItemWithReadMore
        title="Trending"
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

SectionTrending.propTypes = propTypes;
export default SectionTrending;
