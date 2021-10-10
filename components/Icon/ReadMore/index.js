import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

const propTypes = {};

const ReadMore = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="icon-read-more">
      <p>Xem Thêm</p>
      <img src="/static/assets/img/icon/Arrow.svg" />
    </div>
  );
};

ReadMore.propTypes = propTypes;
export default ReadMore;
