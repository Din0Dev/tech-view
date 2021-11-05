import React from "react";
import PropTypes from "prop-types";
import { randomDate } from "utils/randomDate";

const propTypes = {
  topLabel: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

const CardItemTopTrending = (props) => {
  const { topLabel = "#1", title = "Title", author = `By Namdo - ${randomDate()}` } = props;
  //! State

  //! Function

  //! Render
  return (
    <div className="card-item-top-trending-custom">
      <div className="card-item-top-trending-custom-top-label">{topLabel}</div>
      <div className="card-item-top-trending-custom-detail">
        <div className="card-item-top-trending-custom-detail-title">
          {title}
        </div>
        <div className="card-item-top-trending-custom-detail-credit">
          {author}
        </div>
      </div>
    </div>
  );
};

CardItemTopTrending.propTypes = propTypes;
export default CardItemTopTrending;
