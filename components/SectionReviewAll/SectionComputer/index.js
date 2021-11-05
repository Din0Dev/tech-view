import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItemReview from "components/CardItemReview";
import { randomDate } from "../../../utils/randomDate";
import { randomRate } from "../../../utils/randomRate";

const propTypes = {};

const SectionComputer = (props) => {
  //! State
  const dispatch = useDispatch();
  const listLeft = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title: "Đánh giá Microsoft Surface Laptop Studio: Kỳ lạ và tuyệt vời",
      imgSrc: "/static/assets/img/review-all/laptop_2.png",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Lenovo ThinkPad P15 Gen 2: Máy trạm di động trường học cũ",
      imgSrc: "/static/assets/img/review-all/laptop_3.png",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Lenovo ThinkPad X1 Extreme Gen 4 Đánh giá: Nhanh nhưng không hoàn hảo",
      imgSrc: "/static/assets/img/review-all/laptop_4.png",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title: "Đánh giá OLED Dell XPS 15: Tốt nhất tiếp tục trở nên tốt hơn",
      imgSrc: "/static/assets/img/review-all/laptop_5.png",
    },
  ];
  const listRight = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Apple iPad Pro 12,9 inch (2021): Nhiều hơn bạn cần, chính xác những gì bạn muốn",
      imgSrc: "/static/assets/img/review-all/pc_2.png",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Razer Huntsman V2 TKL: Một lập luận thuyết phục cho bàn phím có dây",
      imgSrc: "/static/assets/img/review-all/pc_3.png",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Dell 32 4K USB-C Hub Monitor: Hoàn hảo kết nối 4K thuận tiện",
      imgSrc: "/static/assets/img/review-all/pc_4.png",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Marsback Zephyr Pro đánh giá: Một con chuột tuyệt vời đến nỗi nó có quạt bên trong",
      imgSrc: "/static/assets/img/review-all/pc_5.png",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-review-inner">
      <Row gutter={30}>
        <Col lg={12} md={12} xs={24}>
          <CardItemReview
            label="Laptop"
            titleTop="Những máy tính xách tay tốt nhất để mua vào năm 2021"
            authorTop="By NamDo"
            listItem={listLeft}
            ImageSrcTop="/static/assets/img/review-all/laptop_1.png"
            href="#"
          />
        </Col>
        <Col lg={12} md={12} xs={24}>
          <CardItemReview
            label="Máy tính"
            titleTop="Máy tính all in one để bàn tốt nhất cho năm 2021"
            authorTop="By NamDo"
            listItem={listRight}
            ImageSrcTop="/static/assets/img/review-all/pc_1.png"
            href="#"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionComputer.propTypes = propTypes;
export default SectionComputer;
