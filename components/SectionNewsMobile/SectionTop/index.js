import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";
import Title from "components/Title";
import CardItemNewsMobile from "components/CardItemNewsMobile";

const propTypes = {};

const SectionTop = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItem = [
    {
      id: 1,
      title: "Verizon mở rộng dịch vụ 5G với ở các thành phố mới",
      category: "mobile",
    },
    {
      id: 2,
      title: "iPhone 13 Mini không thể sạc nhanh với Magsafe",
      category: "mobile",
    },
    {
      id: 3,
      title: 'Đối thủ "nặng ký" của Galaxy Z FLip3 sẽ ra mắt trong năm nay',
      category: "mobile",
    },
    {
      id: 4,
      title: "iPhone 13 giao hàng chậm trễ vì làn sóng COVID tại Việt Nam",
      category: "mobile",
    },
  ];

  const listNews = [
    {
      id: 1,
      description: "TikTok đạt 1 tỷ người dùng mỗi tháng trên toàn thế giới",
      createAt: "1 Ngày trước",
      category: "Mobile",
    },
    {
      id: 2,
      description: "Tình trạng thiếu chip có thể sẽ kết thúc vào năm tới",
      createAt: "1 Ngày trước",
      category: "Mobile",
    },
    {
      id: 3,
      description:
        "Không lo lộ hình ảnh 'nhạy cảm' với tính năng mới trên Android 12",
      createAt: "1 Ngày trước",
      category: "Mobile",
    },
    {
      id: 4,
      description: "iOS 15 lại dính lỗi thông báo bộ nhớ ",
      createAt: "1 Ngày trước",
      category: "Mobile",
    },
  ];
  //! Render
  return (
    <div className="section-news-mobile-top">
      <Row gutter={30}>
        <Col span={18}>
          <CardItem title="iPhone 14 có thể giữ notch đặc biệt của nó trong một năm nữa bất chấp những tin đồn" />
        </Col>
        <Col span={6}>
          <Title label="Tin tức mới nhất" />
          {listNews.map((el) => (
            <CardItemNewsMobile
              key={el.id}
              category={el.category}
              createAt={el.createAt}
              description={el.description}
            />
          ))}
        </Col>
        {listItem.map((el) => (
          <Col span={6}>
            <CardItem
              key={el.id}
              title={el.title}
              ImageSrc={el.ImageSrc}
              author={el.category}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

SectionTop.propTypes = propTypes;
export default SectionTop;
