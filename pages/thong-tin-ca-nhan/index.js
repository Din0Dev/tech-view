import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import withLoggedIn from "HOC/withLoggedIn";
import SectionInfomation from "components/SectionInfomation";

const propTypes = {};

const InfomationPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="infomation-page">
      <SectionInfomation />
    </div>
  );
};

InfomationPage.propTypes = propTypes;
export default withLoggedIn(InfomationPage);
