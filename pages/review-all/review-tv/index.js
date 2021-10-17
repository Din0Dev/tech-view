import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DefaultLayout from "layout/DefaultLayout";
import SectionTop from "components/SectionReviewTV/SectionTop";
import SectionNewsRate from "components/SectionReviewTV/SectionNewsRate";
import SectionMore from "components/SectionReviewTV/SectionMore";
import SectionSeeMore from "components/SectionSeeMore";

const propTypes = {};

const ReviewTVPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div className="review-tv-page">
        <SectionTop />
        <SectionNewsRate />
        <SectionSeeMore />
      </div>
    </DefaultLayout>
  );
};

ReviewTVPage.propTypes = propTypes;
export default ReviewTVPage;
