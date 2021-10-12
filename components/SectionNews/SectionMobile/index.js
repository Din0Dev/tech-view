import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItemNews from "components/CardItemNews";

const propTypes = {};

const SectionMobile = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const listItemLeft = [
    {
      id: 1,
      title:
        "Verizon mở rộng dịch vụ 5G với internet di động gia đình và doanh nghiệp ở các thành phố mới",
      imgSrc: "/static/assets/img/tin-tuc/section_mobile_left_2.png",
    },
    {
      id: 2,
      title:
        "Apple phát hành iOS 15.1 Dev Beta 1: Một phút quay ProRes tốn tới 1GB bộ nhớ",
      imgSrc: "/static/assets/img/tin-tuc/section_mobile_left_3.png",
    },
    {
      id: 3,
      title: "Galaxy Note 8 chính thức bị Samsung 'bỏ lại' phía sau",
      imgSrc: "/static/assets/img/tin-tuc/section_mobile_left_4.png",
    },
  ];
  const listItemRight = [
    {
      id: 1,
      title:
        "Xiaomi Mix Fold 2 sẽ có màn hình 120Hz và camera ẩn dưới màn hình",
      imgSrc: "/static/assets/img/tin-tuc/section_mobile_right_3.png",
    },
    {
      id: 2,
      title:
        "Galaxy Z Flip3 và Z Fold3 của Samsung đạt doanh số 1 triệu chiếc tại Hàn Quốc",
      imgSrc: "/static/assets/img/tin-tuc/section_mobile_right_4.png",
    },
    {
      id: 3,
      title: "Redmi K40s tạm hoãn vì không đủ linh kiện sản xuất",
      imgSrc: "/static/assets/img/tin-tuc/section_mobile_right_5.png",
    },
  ];

  //! Render
  return (
    <div className="section-mobile">
      <CardItemNews
        href="#"
        label="Tin tức mobie"
        itemLeft1="iPhone 14 có thể giữ notch đặc biệt của nó trong một năm nữa bất chấp những tin đồn"
        itemRight1="Rò rỉ Google Pixel 6 mở rộng xác nhận nhận dạng khuôn mặt, vỏ Pixel mới"
        itemRight2="Moto G Pure có thể là điện thoại cao cấp  giá rẻ nhất của Motorola"
        imageSrcLeft1="/static/assets/img/tin-tuc/section_mobile_left_1.png"
        imageSrcRight1="/static/assets/img/tin-tuc/section_mobile_right_1.png"
        imageSrcRight2="/static/assets/img/tin-tuc/section_mobile_right_2.png"
        listItemLeft={listItemLeft}
        listItemRight={listItemRight}
        href="/tin-tuc/tin-tuc-mobile"
      />
    </div>
  );
};

SectionMobile.propTypes = propTypes;
export default SectionMobile;
