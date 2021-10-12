import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItemNews from "components/CardItemNews";

const propTypes = {};

const SectionComputer = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItemLeft = [
    {
      id: 1,
      title: "Nvidia RTX 3090 Ti có thể nhiều sức mạnh hơn RTX 3090",
      imgSrc: "/static/assets/img/tin-tuc/section_pc_left_2.png",
    },
    {
      id: 2,
      title:
        "Các thợ mỏ tiền điện tử đã phá vỡ thông qua card đồ họa LHR của Nvidia một lần nữa",
      imgSrc: "/static/assets/img/tin-tuc/section_pc_left_3.png",
    },
    {
      id: 3,
      title:
        "Valve tiết lộ nội bộ Steam Deck, cho thấy khó khăn như thế nào để nâng cấp",
      imgSrc: "/static/assets/img/tin-tuc/section_pc_left_4.png",
    },
  ];
  const listItemRight = [
    {
      id: 1,
      title:
        "Surface Laptop Studio ra mắt: RTX 3050 Ti, màn hình 120Hz, giá từ 36 triệu đồng",
      imgSrc: "/static/assets/img/tin-tuc/section_pc_right_3.png",
    },
    {
      id: 2,
      title: "Intel Alder Lake có thể nhanh hơn tới 45% so với thế hệ trước",
      imgSrc: "/static/assets/img/tin-tuc/section_pc_right_4.png",
    },
    {
      id: 3,
      title: "AMD cảnh báo Rằng Windows 11 làm chậm các trò chơi tới 15%",
      imgSrc: "/static/assets/img/tin-tuc/section_pc_right_5.png",
    },
  ];

  //! Render
  return (
    <div className="section-mobile">
      <CardItemNews
        href="#"
        label="Tin tức máy tính"
        itemLeft1="Windows 11: Ngày phát hành, lịch cập nhật, tính năng mới và hơn thế nữa"
        itemRight1="iMac Pro 2021: Đây là tất cả những gì chúng ta biết cho đến nay"
        itemRight2="Microsoft Surface Duo 2: Mọi thứ bạn cần biết"
        imageSrcLeft1="/static/assets/img/tin-tuc/section_pc_left_1.png"
        imageSrcRight1="/static/assets/img/tin-tuc/section_pc_right_1.png"
        imageSrcRight2="/static/assets/img/tin-tuc/section_pc_right_2.png"
        listItemLeft={listItemLeft}
        listItemRight={listItemRight}
      />
    </div>
  );
};

SectionComputer.propTypes = propTypes;
export default SectionComputer;
