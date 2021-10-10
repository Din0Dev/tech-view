import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ItemSection from "components/ItemSection";
import { Col, Row } from "antd";

const propTypes = {};

const SectionCard = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  const dataCenter = {
    title: "Tech",
    titleCenter:
      "Đột phá công nghệ ấn tượng trên Z Fold 3 thay đổi cách đa nhiệm của những tech-fan “sành sỏi” nhất",
    titleLeft:
      "Tech Wire Asia: Kỹ sư công nghệ Việt Nam lọt vào 'mắt xanh' của Google Cloud",
    titleRight:
      "Điểm danh các công nghệ diệt khuẩn trên tủ lạnh hiệu quả nhất hiện nay",
    imgsrcCenter: "/static/assets/img/section-card/tech_1.png",
    imgsrcLeft: "/static/assets/img/section-card/tech_2.png",
    imgsrcRight: "/static/assets/img/section-card/tech_3.png",
  };
  const dataLeft = {
    title: "Reviews",
    titleCenter:
      "Review nhanh khẩu trang 'Optimus Prime' siêu ngầu, muốn tái sử dụng bao nhiêu lần đều được",
    titleLeft:
      "Trải nghiệm Realme 6 Pro: thêm 1 triệu đồng để đổi lấy chip chơi game tốt hơn bản thường có đáng không?",
    titleRight:
      "Trải nghiệm iPad Pro 2020 từ góc nhìn của người chưa bao giờ dùng máy tính bảng",
    imgsrcCenter: "/static/assets/img/section-card/review_1.png",
    imgsrcLeft: "/static/assets/img/section-card/review_2.png",
    imgsrcRight: "/static/assets/img/section-card/review_3.png",
  };
  const dataRight = {
    title: "How-to?",
    titleCenter:
      "So sánh iPad mini 6 và iPad mini 5: Có đáng để  chờ đợi trong 2 năm?",
    titleLeft: "Liệu bạn có cần iPhone 13 Pro Max dung lượng lên đến 1TB? ",
    titleRight:
      "7 tiêu chí chọn smartwatch ưng ý trong năm 2021 cực kỳ chi tiết mà bạn không nên bỏ qua",
    imgsrcCenter: "/static/assets/img/section-card/how-to_1.png",
    imgsrcLeft: "/static/assets/img/section-card/how-to_2.png",
    imgsrcRight: "/static/assets/img/section-card/how-to_3.png",
  };
  //! Render
  return (
    <div className="section-card">
      <Row gutter={30}>
        <Col span={8}>
          <ItemSection
            title={dataCenter.title}
            titleCenter={dataCenter.titleCenter}
            titleLeft={dataCenter.titleLeft}
            titleRight={dataCenter.titleRight}
            imgsrcCenter={dataCenter.imgsrcCenter}
            imgsrcLeft={dataCenter.imgsrcLeft}
            imgsrcRight={dataCenter.imgsrcRight}
          />
        </Col>
        <Col span={8}>
          <ItemSection
            title={dataLeft.title}
            titleCenter={dataLeft.titleCenter}
            titleLeft={dataLeft.titleLeft}
            titleRight={dataLeft.titleRight}
            imgsrcCenter={dataLeft.imgsrcCenter}
            imgsrcLeft={dataLeft.imgsrcLeft}
            imgsrcRight={dataLeft.imgsrcRight}
          />
        </Col>
        <Col span={8}>
          <ItemSection
            title={dataRight.title}
            titleCenter={dataRight.titleCenter}
            titleLeft={dataRight.titleLeft}
            titleRight={dataRight.titleRight}
            imgsrcCenter={dataRight.imgsrcCenter}
            imgsrcLeft={dataRight.imgsrcLeft}
            imgsrcRight={dataRight.imgsrcRight}
          />
        </Col>
      </Row>
    </div>
  );
};

SectionCard.propTypes = propTypes;
export default SectionCard;
