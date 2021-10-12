import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionTop from "components/SectionNewsMobile/SectionTop";
import DefaultLayout from "layout/DefaultLayout";
import SectionMobile from "components/SectionNewsMobile/SectionMobile";
import SectionTablet from "components/SectionNewsMobile/SectionTablet";
import SectionApple from "components/SectionNewsMobile/SectionApple";
import SectionAndroid from "components/SectionNewsMobile/SectionAndroid";
import SectionMore from "components/SectionNewsMobile/SectionMore";

const propTypes = {};

const NewMobilePage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div className="new-mobile-page">
        <SectionTop />
        <SectionMobile />
        <SectionTablet />
        <SectionApple />
        <SectionAndroid />
        <SectionMore />
      </div>
    </DefaultLayout>
  );
};

NewMobilePage.propTypes = propTypes;
export default NewMobilePage;
