import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardItemVideo from "components/CardItemVideo";

const propTypes = {};

const SectionVideoScrollBar = ({ listVideo = [], onClickItem = () => {} }) => {
  //! State
  const dispatch = useDispatch();

  //! Function
  //! Render
  return (
    <div className="section-scrollbar">
      {listVideo.map((el) => (
        <CardItemVideo
          onClick={() => onClickItem(el)}
          key={el.id}
          description={el.title}
          VideoSrc={el.VideoSrc}
          poster={el.poster}
        />
      ))}
    </div>
  );
};

SectionVideoScrollBar.propTypes = propTypes;
export default SectionVideoScrollBar;
