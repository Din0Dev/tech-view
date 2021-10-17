import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionSeeMore from "components/SectionSeeMore";

const propTypes = {};

const SeeMorePage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-see-more">
      <SectionSeeMore />
    </div>
  );
};

SeeMorePage.propTypes = propTypes;
export default SeeMorePage;
