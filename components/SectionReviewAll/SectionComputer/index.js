import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItemReview from "components/CardItemReview";

const propTypes = {};

const SectionComputer = (props) => {
  //! State
  const dispatch = useDispatch();
  const listLeft = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title:
        "Đánh giá Microsoft Surface Laptop Studio: Kỳ lạ và tuyệt vời",
      imgSrc: "",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title: "Đánh giá Lenovo ThinkPad P15 Gen 2: Máy trạm di động trường học cũ",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: 3,
      author: "By NamDo",
      title:
        "Lenovo ThinkPad X1 Extreme Gen 4 Đánh giá: Nhanh nhưng không hoàn hảo",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: 4,
      author: "By NamDo",
      title:
        "Đánh giá OLED Dell XPS 15: Tốt nhất tiếp tục trở nên tốt hơn",
      imgSrc: "",
    },
  ];
  const listRight = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title:
        "Đánh giá Apple iPad Pro 12,9 inch (2021): Nhiều hơn bạn cần, chính xác những gì bạn muốn",
      imgSrc: "",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title: "Đánh giá Razer Huntsman V2 TKL: Một lập luận thuyết phục cho bàn phím có dây",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: 3,
      author: "By NamDo",
      title: "Đánh giá Dell 32 4K USB-C Hub Monitor: Hoàn hảo kết nối 4K thuận tiện",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: 4,
      author: "By NamDo",
      title: "Marsback Zephyr Pro đánh giá: Một con chuột tuyệt vời đến nỗi nó có quạt bên trong",
      imgSrc: "",
    },
  ];
  //! Function

  //! Render
  return (
    <div className="section-review-inner">
      <Row gutter={30}>
        <Col span={12}>
          <CardItemReview
            label="Laptop"
            titleTop="Những máy tính xách tay tốt nhất để mua vào năm 2021"
            authorTop="By NamDo"
            listItem={listLeft}
            href="#"
          />
        </Col>
        <Col span={12}>
          <CardItemReview
            label="Máy tính"
            titleTop="Máy tính all in one để bàn tốt nhất cho năm 2021"
            authorTop="By NamDo"
            listItem={listRight}
            href="#"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionComputer.propTypes = propTypes;
export default SectionComputer;