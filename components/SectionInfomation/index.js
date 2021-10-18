import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import HeaderInfomation from "./HeaderInfomation";
import ContainerInfomation from "./ContainerInfomation";

const propTypes = {};

const SectionInfomation = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-infomation">
      <HeaderInfomation />
      <ContainerInfomation />
    </div>
  );
};

SectionInfomation.propTypes = propTypes;
export default SectionInfomation;
