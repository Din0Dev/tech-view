import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DefaultLayout from "layout/DefaultLayout";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";

const propTypes = {};

const SectionSeeMore = (props) => {
  //! State
  const dispatch = useDispatch();
  const listItem = [
    {
      id: 1,
      title: "Trải nghiệm Android 12 trên Realme GT Neo2",
      ImageSrc: "/static/assets/img/review-tv/a1.png",
    },
    {
      id: 2,
      title:
        "Google chính thức ra mắt Android 12 nhưng không cập nhật smartphone khiến người dùng bối rối",
      ImageSrc: "/static/assets/img/review-tv/a2.png",
    },
    {
      id: 3,
      title: "Huawei Mate V sẽ ra mắt vào tháng 12 năm nay",
      ImageSrc: "/static/assets/img/review-tv/a3.png",
    },
    {
      id: 4,
      title: "Vizio P-Series Quantum X (P85QX-H1): Ý tưởng sáng sủa của Vizio",
      ImageSrc: "/static/assets/img/review-tv/a4.png",
    },
    {
      id: 5,
      title:
        "Huawei Matebook 16 ra mắt với Ryzen 7 5800H và màn hình tỷ lệ 3:2",
      ImageSrc: "/static/assets/img/review-tv/a5.png",
    },
    {
      id: 6,
      title:
        "iPad Air với màn hình OLED tiếp tục bị dời sang năm 2023 khiến nhiều iFan thất vọng",
      ImageSrc: "/static/assets/img/review-tv/a6.png",
    },
    {
      id: 7,
      title:
        "TCL 6-Series (R635) Đánh giá TV 4K HDR: Giá trị tốt nhất năm 2020?",
      ImageSrc: "/static/assets/img/review-tv/a7.png",
    },
    {
      id: 8,
      title: "Macbook Pro M1X vẫn sẽ xuất hiện vào tháng tới",
      ImageSrc: "/static/assets/img/review-tv/a8.png",
    },
    {
      id: 9,
      title:
        "Điểm danh các công nghệ diệt khuẩn trên tủ lạnh hiệu quả nhất hiện nay",
      ImageSrc: "/static/assets/img/review-tv/a9.png",
    },
    {
      id: 10,
      title: "Dịch vụ Work from Home của HP đưa máy in văn phòng vào nhà bạn",
      ImageSrc: "/static/assets/img/review-tv/a10.png",
    },
    {
      id: 11,
      title:
        "Trải nghiệm iPad Pro 2020 từ góc nhìn của người chưa bao giờ dùng máy tính bảng",
      ImageSrc: "/static/assets/img/review-tv/a11.png",
    },
    {
      id: 12,
      title: "Đánh giá TV Hisense H8G Quantum 4K HDR: Rất đáng giá",
      ImageSrc: "/static/assets/img/review-tv/a12.png",
    },
    {
      id: 13,
      title: "Trải nghiệm Android 12 trên Realme GT Neo2",
      ImageSrc: "/static/assets/img/review-tv/a13.png",
    },
    {
      id: 14,
      title:
        "Google chính thức ra mắt Android 12 nhưng không cập nhật smartphone khiến người dùng bối rối",
      ImageSrc: "/static/assets/img/review-tv/a14.png",
    },
    {
      id: 15,
      title: "Huawei Mate V sẽ ra mắt vào tháng 12 năm nay",
      ImageSrc: "/static/assets/img/review-tv/a15.png",
    },
    {
      id: 16,
      title: "Vizio P-Series Quantum X (P85QX-H1): Ý tưởng sáng sủa của Vizio",
      ImageSrc: "/static/assets/img/review-tv/a16.png",
    },
    {
      id: 17,
      title:
        "Huawei Matebook 16 ra mắt với Ryzen 7 5800H và màn hình tỷ lệ 3:2",
      ImageSrc: "/static/assets/img/review-tv/a17.png",
    },
    {
      id: 18,
      title:
        "iPad Air với màn hình OLED tiếp tục bị dời sang năm 2023 khiến nhiều iFan thất vọng",
      ImageSrc: "/static/assets/img/review-tv/a18.png",
    },
    {
      id: 19,
      title:
        "TCL 6-Series (R635) Đánh giá TV 4K HDR: Giá trị tốt nhất năm 2020?",
      ImageSrc: "/static/assets/img/review-tv/a19.png",
    },
    {
      id: 20,
      title: "Macbook Pro M1X vẫn sẽ xuất hiện vào tháng tới",
      ImageSrc: "/static/assets/img/review-tv/a20.png",
    },
    {
      id: 21,
      title:
        "Điểm danh các công nghệ diệt khuẩn trên tủ lạnh hiệu quả nhất hiện nay",
      ImageSrc: "/static/assets/img/review-tv/a21.png",
    },
    {
      id: 22,
      title: "Dịch vụ Work from Home của HP đưa máy in văn phòng vào nhà bạn",
      ImageSrc: "/static/assets/img/review-tv/a22.png",
    },
    {
      id: 23,
      title:
        "Trải nghiệm iPad Pro 2020 từ góc nhìn của người chưa bao giờ dùng máy tính bảng",
      ImageSrc: "/static/assets/img/review-tv/a23.png",
    },
    {
      id: 24,
      title: "Đánh giá TV Hisense H8G Quantum 4K HDR: Rất đáng giá",
      ImageSrc: "/static/assets/img/review-tv/a24.png",
    },
  ];
  //! Function

  //! Render
  return (
    <DefaultLayout>
      <Row gutter={30}>
        {listItem.map((el) => (
          <Col span={6}>
            <CardItem
              key={el.id}
              author=""
              title={el.title}
              ImageSrc={el.ImageSrc}
            />
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  );
};

SectionSeeMore.propTypes = propTypes;
export default SectionSeeMore;
