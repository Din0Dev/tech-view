import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card } from "antd";
import ReadMore from "components/Icon/ReadMore";

const propTypes = {};

const CardItemWithReadMore = ({ title = "", href = "#", customComponent }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Card title={title} extra={<ReadMore href={href} />}>
      {customComponent}
    </Card>
  );
};

CardItemWithReadMore.propTypes = propTypes;
export default CardItemWithReadMore;
