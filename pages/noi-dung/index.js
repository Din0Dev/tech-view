import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SectionDesCription from "components/SectionDescription";
import DefaultLayout from "layout/DefaultLayout";

const propTypes = {};

const DescriptionPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <DefaultLayout>
      <div className="section-description">
        <SectionDesCription />
      </div>
    </DefaultLayout>
  );
};

DescriptionPage.propTypes = propTypes;
export default DescriptionPage;
