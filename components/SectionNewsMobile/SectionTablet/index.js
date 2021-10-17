import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItemNewsWithOneTop from "components/CardItemNewsWithOneTop";

const propTypes = {};

const SectionTablet = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItemLeft = [
    {
      id: 1,
      title: "Đánh giá Galaxy Tab S7 Plus: hoàn hảo",
      imgSrc: "/static/assets/img/tin-tuc-mobile/tablet_3.png",
      isAuthor: true,
      isRate: true,
      rate: 5,
      author: "By Namdo",
    },
    {
      id: 2,
      title: "Đánh giá iPad của Apple (2020)",
      imgSrc: "/static/assets/img/tin-tuc-mobile/tablet_4.png",
      isAuthor: true,
      isRate: true,
      rate: 5,
      author: "By Namdo",
    },
    {
      id: 3,
      title: "Đánh giá Apple Pencil 2: Lựa chọn mới của mọi người",
      imgSrc: "/static/assets/img/tin-tuc-mobile/tablet_5.png",
      isAuthor: true,
      isRate: true,
      rate: 4,
      author: "By Namdo",
    },
  ];
  const listItemRight = [
    {
      id: 1,
      title:
        "Đánh giá Apple iPad Pro 12,9 inch (2021): Nhiều hơn bạn cần, chính xác những gì bạn muốn",
      imgSrc: "/static/assets/img/tin-tuc-mobile/tablet_6.png",
      isAuthor: true,
      isRate: true,
      rate: 4,
      author: "By Namdo",
    },
    {
      id: 2,
      title: "Đánh giá Lenovo Tab P11 Pro: Phần cứng tuyệt vời ",
      imgSrc: "/static/assets/img/tin-tuc-mobile/tablet_7.png",
      isAuthor: true,
      isRate: true,
      rate: 5,
      author: "By Namdo",
    },
    {
      id: 3,
      title: "Đánh giá Apple iPad Air (2020): iPad Pro giá bình dân",
      imgSrc: "/static/assets/img/tin-tuc-mobile/tablet_8.png",
      isAuthor: true,
      isRate: true,
      rate: 5,
      author: "By Namdo",
    },
  ];

  //! Render
  return (
    <div className="section-mobile">
      <CardItemNewsWithOneTop
        href="#"
        label="Máy tính bảng"
        itemLeft1="Máy tính bảng chơi game tốt nhất năm 2021"
        itemRight1="Máy tính bảng tốt nhất năm 2021"
        imageSrcLeft1="/static/assets/img/tin-tuc-mobile/tablet_1.png"
        imageSrcRight1="/static/assets/img/tin-tuc-mobile/tablet_2.png"
        listItemLeft={listItemLeft}
        listItemRight={listItemRight}
        href="/tin-tuc/tin-tuc-mobile"
      />
    </div>
  );
};

SectionTablet.propTypes = propTypes;
export default SectionTablet;
