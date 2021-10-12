import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionTop from "components/SectionReviewAll/SectionTop";
import DefaultLayout from "layout/DefaultLayout";
import SectionMobileTablet from "components/SectionReviewAll/SectionMobileTablet";
import SectionComputer from "components/SectionReviewAll/SectionComputer";
import SectionCarHeadPhone from "components/SectionReviewAll/SectionCarHeadPhone";
import SectionMore from "components/SectionReviewAll/SectionMore";

const propTypes = {};

const ReviewAllPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div className="review-all-page">
        <SectionTop />
        <SectionMobileTablet />
        <SectionComputer />
        <SectionCarHeadPhone />
        <SectionMore />
      </div>
    </DefaultLayout>
  );
};

ReviewAllPage.propTypes = propTypes;
export default ReviewAllPage;
