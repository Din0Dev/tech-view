import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import CardItem from "components/CardIem";
import Title from "components/Title";

const propTypes = {};

const SectionPreview = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <Row className="section-preview" gutter={30}>
      <Col className="gutter-row" span={16}>
        {/*  */}
        <Row className="section-preview-left" gutter={30}>
          {/*  */}
          <Col className="gutter-row section-preview-inner-left" span={16}>
            <CardItem
              className="section-preview-inner-left-top"
              title={
                "Trên tay iPhone 13 Pro và iPhone 13 Pro Max: Màu sắc mới cực đẹp!"
              }
              ImageSrc="/static/assets/img/section-preview/section-preview-left_1.jpg"
            />
            <Row className="section-preview-inner-left-bottom">
              <Col span={12}>
                <CardItem
                  className="section-preview-inner-left-bottom-inner-left"
                  title={
                    "iPad mini 6 gặp lỗi màn hình, gây hiện tượng bên nhanh bên chậm khi cuộn trang"
                  }
                  ImageSrc="/static/assets/img/section-preview/section-preview-left_2.png"
                />
              </Col>
              <Col span={12}>
                <CardItem
                  className="section-preview-inner-left-bottom-inner-right"
                  title={
                    "iPhone 13 xách tay tại Việt Nam mất giá 10 triệu sau 2 ngày"
                  }
                  ImageSrc="/static/assets/img/section-preview/section-preview-left_3.png"
                />
              </Col>
            </Row>
          </Col>
          {/*  */}
          <Col className="gutter-row section-preview-inner-right" span={8}>
            <CardItem
              title={
                "Galaxy Z Flip3 có độ bền ấn tượng, bẻ ngược bằng tay không hề hấn gì"
              }
              ImageSrc="/static/assets/img/section-preview/section-preview-left_4.png"
            />
            <CardItem
              title={
                "Ghi nhận trường hợp Galaxy Z Fold3 bốc cháy đầu tiên, người dùng có nên lo lắng hay không?"
              }
              ImageSrc="/static/assets/img/section-preview/section-preview-left_5.png"
            />
          </Col>
        </Row>
      </Col>
      <Col className="gutter-row" span={8}>
        <div className="section-preview-right">
          <Title label={"Đáng chú ý"} />
          <CardItem
            title={"TikTok đạt 1 tỷ người dùng mỗi tháng trên toàn thế giới"}
            ImageSrc="/static/assets/img/section-preview/dang-chu-y_1.png"
          />
          <CardItem
            title={"Tình trạng thiếu chip có thể sẽ kết thúc vào năm tới"}
            ImageSrc="/static/assets/img/section-preview/dang-chu-y_2.png"
          />
          <CardItem
            title={"Không lo lộ hình ảnh 'nhạy cảm' với tính năng mới trên "}
            ImageSrc="/static/assets/img/section-preview/dang-chu-y_3.png"
          />
          <CardItem
            title={"iOS 15 lại dính lỗi thông báo bộ nhớ  "}
            ImageSrc="/static/assets/img/section-preview/dang-chu-y_4.png"
          />
        </div>
      </Col>
    </Row>
  );
};

SectionPreview.propTypes = propTypes;
export default SectionPreview;
