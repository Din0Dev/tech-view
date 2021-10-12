import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";

const propTypes = {};

const ReadMore = ({ href = "/" }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Link href={href}>
      <div className="icon-read-more">
        <p>Xem Thêm</p>
        <img src="/static/assets/img/icon/Arrow.svg" />
      </div>
    </Link>
  );
};

ReadMore.propTypes = propTypes;
export default ReadMore;
