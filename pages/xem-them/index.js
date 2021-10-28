import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionSeeMore from "components/SectionSeeMore";
import DefaultLayout from "layout/DefaultLayout";

const propTypes = {};

const SeeMorePage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div className="section-see-more">
        <SectionSeeMore />
      </div>
    </DefaultLayout>
  );
};

SeeMorePage.propTypes = propTypes;
export default SeeMorePage;
