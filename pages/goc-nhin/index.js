import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionTop from "components/SectionView/SectionTop";
import SectionList from "components/SectionView/SectionList";
import DefaultLayout from "layout/DefaultLayout";
const propTypes = {};

const ViewPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div className="section-view">
        <SectionTop />
        <SectionList />
      </div>
    </DefaultLayout>
  );
};

ViewPage.propTypes = propTypes;
export default ViewPage;
