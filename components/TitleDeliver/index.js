import React from "react";
import PropTypes from "prop-types";
import { Divider } from "antd";

const propTypes = {
  label: PropTypes.string,
  orientation: PropTypes.string,
};

const TitleDeliver = (props) => {
  const { orientation = "left", label = "TITLE" } = props;
  //! State

  //! Function

  //! Render
  return <Divider orientation={orientation}>{label}</Divider>;
};

TitleDeliver.propTypes = propTypes;
export default TitleDeliver;
