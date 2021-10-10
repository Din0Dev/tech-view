import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const propTypes = {
  description: PropTypes.string,
  VideoSrc: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.number,
  author: PropTypes.string,
  poster: PropTypes.string,
  onClick: PropTypes.func,
};

const CardItemVideo = (props) => {
  const {
    description = "TITLE",
    VideoSrc = "",
    width = "100%",
    className = "",
    poster = "",
    onClick = () => {},
  } = props;
  //! State

  //! Function

  //! Render
  return (
    <div className="CardItemVideo-Custom">
      <Card
        hoverable
        className={className}
        style={{ width: width }}
        cover={
          <video width="100%" height="100%" poster={poster}>
            <source src={VideoSrc} />
          </video>
        }
        onClick={onClick}
      >
        <Meta description={description} />
      </Card>
    </div>
  );
};

CardItemVideo.propTypes = propTypes;
export default CardItemVideo;
