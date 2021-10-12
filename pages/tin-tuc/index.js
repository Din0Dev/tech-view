import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DefaultLayout from "layout/DefaultLayout";
import SectionTop from "components/SectionNews/SectionTop";
import SectionAttention from "components/SectionNews/SectionAttention";
import SectionTrending from "components/SectionNews/SectionTrending";
import SectionMobile from "components/SectionNews/SectionMobile";
import SectionComputer from "components/SectionNews/SectionComputer";
import SectionGames from "components/SectionNews/SectionGames";
import SectionCar from "components/SectionNews/SectionCar";
import SectionMore from "components/SectionNews/SectionMore";

const propTypes = {};

const NewsPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <SectionTop />
      <SectionAttention />
      <SectionTrending />
      <SectionMobile />
      <SectionComputer />
      <SectionGames />
      <SectionCar />
      <SectionMore />
    </DefaultLayout>
  );
};

NewsPage.propTypes = propTypes;
export default NewsPage;
