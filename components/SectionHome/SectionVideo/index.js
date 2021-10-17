import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Col, Row } from "antd";
import Title from "components/Title";
import SectionVideoScrollBar from "./SectionVideoScrollBar";
import Meta from "antd/lib/card/Meta";
import ReadMore from "components/Icon/ReadMore";

const propTypes = {};

const SectionVideo = (props) => {
  //! State
  const listVideo = [
    {
      id: 1,
      title:
        "1 - Galaxy Z Flip3 có độ bền ấn tượng, bẻ ngược bằng tay không hề hấn gì",
      VideoSrc: "/static/assets/video/VideosNews.mp4",
      poster: "/static/assets/video/thumb.png",
    },
    {
      id: 2,
      title:
        "2 -Galaxy Z Flip3 có độ bền ấn tượng, bẻ ngược bằng tay không hề hấn gì",
      VideoSrc: "/static/assets/video/VideosNews.mp4",
      poster: "/static/assets/video/thumb.png",
    },
    {
      id: 3,
      title:
        "3 - Galaxy Z Flip3 có độ bền ấn tượng, bẻ ngược bằng tay không hề hấn gì",
      VideoSrc: "/static/assets/video/VideosNews.mp4",
      poster: "/static/assets/video/thumb.png",
    },
    {
      id: 4,
      title:
        "4 - Galaxy Z Flip3 có độ bền ấn tượng, bẻ ngược bằng tay không hề hấn gì",
      VideoSrc: "/static/assets/video/VideosNews.mp4",
      poster: "/static/assets/video/thumb.png",
    },
  ];
  const [show, setShow] = useState(true);
  const [objClicked, setObjClicked] = useState(listVideo[0]);
  const title = <Title label="VIDEOS MỚI" />;
  //! Function
  const onClickItemSlider = (item) => {
    setObjClicked(item);
  };

  //! Render
  return (
    <div className="section-video-custom">
      <Card title={title} extra={<ReadMore />}>
        <Row gutter={17}>
          <Col className="gutter-row section-video-custom-preview" span={16}>
            {show && (
              <Card
                
                cover={
                  <video width="100%" height="100%" controls>
                    <source src={objClicked?.VideoSrc} />
                  </video>
                }
              >
                <Meta description={objClicked.title} />
              </Card>
            )}
          </Col>
          <Col className="gutter-row section-video-scrollbar" span={8}>
            <SectionVideoScrollBar
              listVideo={listVideo}
              onClickItem={onClickItemSlider}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

SectionVideo.propTypes = propTypes;
export default SectionVideo;
