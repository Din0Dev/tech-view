import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItemReview from "components/CardItemReview";

const propTypes = {};

const SectionMobileTablet = (props) => {
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
        "Đánh giá iPhone 13 Pro của Apple: Tốt nhất trong số những điều tốt nhất",
      imgSrc: "",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: 5,
      author: "By NamDo",
      title: "Đánh giá Samsung Galaxy S21 5G: Đúng công thức, sai thành phần",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: 3,
      author: "By NamDo",
      title:
        "Đánh giá OnePlus 9 Pro: Điện thoại thông minh đáng tin cậy nhất bạn có thể mua",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: 4,
      author: "By NamDo",
      title:
        "Đánh giá Samsung Galaxy Z Flip 3: Tương lai có thể gập lại đã sẵn sàng cho tất cả mọi người",
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
      title: "Đánh giá Lenovo Tab P11 Pro: Phần cứng tuyệt vời ",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: 3,
      author: "By NamDo",
      title: "Đánh giá Apple iPad Air (2020): iPad Pro giá bình dân",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: 4,
      author: "By NamDo",
      title: "Đánh giá Apple Pencil 2: Lựa chọn mới của mọi người",
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
            label="Điện thoại"
            titleTop="Điện thoại tốt nhất năm 2021"
            authorTop="By NamDo"
            listItem={listLeft}
            href="#"
          />
        </Col>
        <Col span={12}>
          <CardItemReview
            label="Máy tính bảng"
            titleTop="Máy tính bảng tốt nhất năm 2021"
            authorTop="By NamDo"
            listItem={listRight}
            href="#"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionMobileTablet.propTypes = propTypes;
export default SectionMobileTablet;