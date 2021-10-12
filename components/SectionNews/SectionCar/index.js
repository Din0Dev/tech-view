import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItemNews from "components/CardItemNews";

const propTypes = {};

const SectionCar = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItemLeft = [
    {
      id: 1,
      title: "2022 Toyota GR 86 : Cảm giác mạnh đáp ứng công nghệ hiện đại",
      imgSrc: "/static/assets/img/tin-tuc/section_car_left_2.png",
    },
    {
      id: 2,
      title: "Những chiếc xe đi lại tốt nhất cho năm 2021",
      imgSrc: "/static/assets/img/tin-tuc/section_car_left_3.png",
    },
    {
      id: 3,
      title: "Màn hình hiển thị head-up (HUDs) tốt nhất cho năm 2021",
      imgSrc: "/static/assets/img/tin-tuc/section_car_left_4.png",
    },
  ];
  const listItemRight = [
    {
      id: 1,
      title:
        "Tesla Cybertruck trì hoãn có nghĩa là nó sẽ không ra đường cho đến năm tới",
        imgSrc: "/static/assets/img/tin-tuc/section_car_right_3.png",

    },
    {
      id: 2,
      title: "Những tiện ích xe hơi tuyệt vời nhất cho năm 2021",
      imgSrc: "/static/assets/img/tin-tuc/section_car_right_4.png",

    },
    {
      id: 3,
      title: "Ra mắt Toyota tundra 2022 cạnh tranh với Ford F-150",
      imgSrc: "/static/assets/img/tin-tuc/section_car_right_5.png",

    },
  ];

  //! Render
  return (
    <div className="section-mobile">
      <CardItemNews
        href="#"
        label="Tin tức xe"
        itemLeft1="Elon Musk tuyên bố Tesla sẽ chuyển trụ sở chính ra khỏi California"
        itemRight1="Z của Nissan trở lại tương lai với kiểu dáng retro, công nghệ hiện đại"
        itemRight2="Elon Musk tiết lộ cách ev không phải Tesla sẽ sử dụng Superchargers"
        imageSrcLeft1="/static/assets/img/tin-tuc/section_car_left_1.png"
        imageSrcRight1="/static/assets/img/tin-tuc/section_car_right_1.png"
        imageSrcRight2="/static/assets/img/tin-tuc/section_car_right_2.png"
        listItemLeft={listItemLeft}
        listItemRight={listItemRight}
      />
    </div>
  );
};

SectionCar.propTypes = propTypes;
export default SectionCar;
