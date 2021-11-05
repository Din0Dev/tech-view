import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItemReview from "components/CardItemReview";
import { randomDate } from "utils/randomDate";
import { randomRate } from "../../../utils/randomRate";

const propTypes = {};

const SectionSmartWatchSpeaker = (props) => {
  //! State
  const dispatch = useDispatch();
  const listLeft = [
    {
      id: 1,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title: "Đánh giá loa Sony SRS-RA5000: Một thử nghiệm đắt tiền",
      imgSrc: "",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Harman / Kardon Soundsticks 4 đánh giá: Những gì cũ là mới một lần nữa",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Marshall Stanmore II ",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title: "Sonos Roam đánh giá: Loa nhỏ, có võ",
      imgSrc: "",
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
        "Đánh giá Samsung Galaxy Watch 4: Đồng hồ thông minh Wear OS tốt nhất cho cổ tay nhỏ",
      imgSrc: "",
    },
    {
      id: 2,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Samsung Galaxy Watch 4 Classic: Đồng hồ thông minh hạng nhất",
      imgSrc: "",
    },
    {
      id: 3,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Oppo Band đánh giá: Thiết bị đeo thể dục đầu tiên của Oppo không hấp dẫn",
      imgSrc: "",
    },
    {
      id: 4,
      isRate: true,
      isAuthor: true,
      rate: randomRate(),
      author: `By Namdo - ${randomDate()}`,
      title:
        "Đánh giá Fitbit Versa 3: Máy theo dõi thể dục hoàn hảo hàng ngày",
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
            label="Loa"
            titleTop="Loa không dây tốt nhất năm 2021"
            authorTop="By NamDo"
            listItem={listLeft}
            href="#"
          />
        </Col>
        <Col span={12}>
          <CardItemReview
            label="Đồng hồ thông minh"
            titleTop="Đồng hồ thông minh tốt nhất năm 2021"
            authorTop="By NamDo"
            listItem={listRight}
            href="#"
          />
        </Col>
      </Row>
    </div>
  );
};

SectionSmartWatchSpeaker.propTypes = propTypes;
export default SectionSmartWatchSpeaker;
