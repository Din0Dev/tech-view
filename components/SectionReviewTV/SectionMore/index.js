import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import PaginationCommon from "components/PaginationCommon";
import CardItem from "components/CardIem";
import { Col, Row } from "antd";
import { randomDate } from "utils/randomDate";
const propTypes = {};

const SectionMore = (props) => {
  //! State
  const dispatch = useDispatch();
  const listItem = [
    {
      id: 1,
      title: "Trải nghiệm Android 12 trên Realme GT Neo2",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_1.png",
      rate: randomRate(),
    },
    {
      id: 2,
      title:
        "Google chính thức ra mắt Android 12 nhưng không cập nhật smartphone khiến người dùng bối rối",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_2.png",
      rate: randomRate(),
    },
    {
      id: 3,
      title: "Huawei Mate V sẽ ra mắt vào tháng 12 năm nay",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_3.png",
      rate: randomRate(),
    },
    {
      id: 4,
      title: "Vizio P-Series Quantum X (P85QX-H1): Ý tưởng sáng sủa của Vizio",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_4.png",
      rate: randomRate(),
    },
    {
      id: 5,
      title:
        "Huawei Matebook 16 ra mắt với Ryzen 7 5800H và màn hình tỷ lệ 3:2",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_5.png",
      rate: randomRate(),
    },
    {
      id: 6,
      title:
        "iPad Air với màn hình OLED tiếp tục bị dời sang năm 2023 khiến nhiều iFan thất vọng",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_6.png",
      rate: randomRate(),
    },
    {
      id: 7,
      title:
        "TCL 6-Series (R635) Đánh giá TV 4K HDR: Giá trị tốt nhất năm 2020?",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_7.png",
      rate: randomRate(),
    },
    {
      id: 8,
      title: "Macbook Pro M1X vẫn sẽ xuất hiện vào tháng tới",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_8.png",
      rate: randomRate(),
    },
    {
      id: 9,
      title:
        "Điểm danh các công nghệ diệt khuẩn trên tủ lạnh hiệu quả nhất hiện nay",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_9.png",
      rate: randomRate(),
    },
    {
      id: 10,
      title: "Dịch vụ Work from Home của HP đưa máy in văn phòng vào nhà bạn",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_10.png",
      rate: randomRate(),
    },
    {
      id: 11,
      title:
        "Trải nghiệm iPad Pro 2020 từ góc nhìn của người chưa bao giờ dùng máy tính bảng",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_11.png",
      rate: randomRate(),
    },
    {
      id: 12,
      title: "Đánh giá TV Hisense H8G Quantum 4K HDR: Rất đáng giá",
      ImageSrc: "/static/assets/img/tin-tuc/section_more_12.png",
      rate: randomRate(),
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-more">
      <Title label="Xem thêm tin" />
      <Row gutter={30}>
        {listItem.map((el) => (
          <Col lg={6} md={24} xs={24}>
            <CardItem
              key={el.id}
              title={el.title}
              ImageSrc={el.ImageSrc}
              isRate={true}
              rate={el.rate}
              author=""
            />
          </Col>
        ))}
      </Row>
      <PaginationCommon />
    </div>
  );
};

SectionMore.propTypes = propTypes;
export default SectionMore;
