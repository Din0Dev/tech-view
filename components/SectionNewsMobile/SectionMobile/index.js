import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItemNews from "components/CardItemNews";
import { randomDate } from "utils/randomDate";
import { randomRate } from "../../../utils/randomRate";

const propTypes = {};

const SectionMobile = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItemLeft = [
    {
      id: 1,
      title:
        "Đánh giá iPhone 13 Pro của Apple: Tốt nhất trong số những điều tốt nhất",
      imgSrc: "/static/assets/img/tin-tuc-mobile/mobile_4.png",
      isAuthor: true,
      isRate: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 2,
      title: "Đánh giá Samsung Galaxy S21 5G: Đúng công thức, sai thành phần",
      imgSrc: "/static/assets/img/tin-tuc-mobile/mobile_5.png",
      isAuthor: true,
      isRate: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 3,
      title:
        "Đánh giá OnePlus 9 Pro: Điện thoại thông minh đáng tin cậy nhất bạn có thể mua",
      imgSrc: "/static/assets/img/tin-tuc-mobile/mobile_6.png",
      isAuthor: true,
      isRate: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
  ];
  const listItemRight = [
    {
      id: 1,
      title:
        "Đánh giá Samsung Galaxy Z Fold 3: Khả năng gập lại mà bạn đang chờ đợi",
      imgSrc: "/static/assets/img/tin-tuc-mobile/mobile_7.png",

      isAuthor: true,
      isRate: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 2,
      title:
        "Đánh giá Motorola Moto Edge 20 Pro: Một chiếc điện thoại rất tốt ở phân khúc tầm trung",
      imgSrc: "/static/assets/img/tin-tuc-mobile/mobile_8.png",
      isAuthor: true,
      isRate: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
    {
      id: 3,
      title: "Đánh giá iPhone 13 của Apple: iPhone dành cho số đông",
      imgSrc: "/static/assets/img/tin-tuc-mobile/mobile_9.png",
      isAuthor: true,
      isRate: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
    },
  ];

  //! Render
  return (
    <div className="section-mobile">
      <CardItemNews
        href="#"
        label="Điện thoại"
        itemLeft1="Điện thoại tốt nhất năm 2021"
        itemRight1="Điện thoại Android tốt nhất năm 2021"
        itemRight2="iPhone tốt nhất để mua vào năm 2021"
        imageSrcLeft1="/static/assets/img/tin-tuc-mobile/mobile_1.png"
        imageSrcRight1="/static/assets/img/tin-tuc-mobile/mobile_2.png"
        imageSrcRight2="/static/assets/img/tin-tuc-mobile/mobile_3.png"
        listItemLeft={listItemLeft}
        listItemRight={listItemRight}
        href="/tin-tuc/tin-tuc-mobile"
      />
    </div>
  );
};

SectionMobile.propTypes = propTypes;
export default SectionMobile;
