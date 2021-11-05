import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Title from "components/Title";
import PaginationCommon from "components/PaginationCommon";
import CardItem from "components/CardIem";
import { Col, Row } from "antd";
import CardItemHorizontal from "components/CardItemHorizontal";
import { randomDate } from "../../../utils/randomDate";
import { randomRate } from "utils/randomRate";
const propTypes = {};

const SectionMore = (props) => {
  //! State
  const dispatch = useDispatch();
  const listItem = [
    {
      id: 1,
      title: "Trải nghiệm Android 12 trên Realme GT Neo2",
      imgSrc: "/static/assets/img/review-all/more_1.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 2,
      title:
        "Google chính thức ra mắt Android 12 nhưng không cập nhật smartphone khiến người dùng bối rối",
      imgSrc: "/static/assets/img/review-all/more_2.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 3,
      title: "Huawei Mate V sẽ ra mắt vào tháng 12 năm nay",
      imgSrc: "/static/assets/img/review-all/more_3.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 4,
      title: "Vizio P-Series Quantum X (P85QX-H1): Ý tưởng sáng sủa của Vizio",
      imgSrc: "/static/assets/img/review-all/more_4.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 5,
      title:
        "Huawei Matebook 16 ra mắt với Ryzen 7 5800H và màn hình tỷ lệ 3:2",
      imgSrc: "/static/assets/img/review-all/more_5.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 6,
      title:
        "iPad Air với màn hình OLED tiếp tục bị dời sang năm 2023 khiến nhiều iFan thất vọng",
      imgSrc: "/static/assets/img/review-all/more_6.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 7,
      title:
        "TCL 6-Series (R635) Đánh giá TV 4K HDR: Giá trị tốt nhất năm 2020?",
      imgSrc: "/static/assets/img/review-all/more_7.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 8,
      title: "Macbook Pro M1X vẫn sẽ xuất hiện vào tháng tới",
      imgSrc: "/static/assets/img/review-all/more_8.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 9,
      title:
        "Điểm danh các công nghệ diệt khuẩn trên tủ lạnh hiệu quả nhất hiện nay",
      imgSrc: "/static/assets/img/review-all/more_9.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 10, 
      title: "Dịch vụ Work from Home của HP đưa máy in văn phòng vào nhà bạn",
      imgSrc: "/static/assets/img/review-all/more_10.png",
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-more">
      <Title label="Xem thêm đánh giá" />
      <Row gutter={30}>
        {listItem.map((el) => (
          <Col lg={12} md={24} xs={24}>
            <CardItemHorizontal
              isReverse={true}
              key={el.id}
              title={el.title}
              imgSrc={el.imgSrc}
              isRate={true}
              rate={el.rate}
              isAuthor={true}
              author={el.author}
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
