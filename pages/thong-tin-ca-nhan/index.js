import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import withLoggedIn from "HOC/withLoggedIn";

const propTypes = {};

const InfomationPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return <div>Thông tin cá nhân</div>;
};

InfomationPage.propTypes = propTypes;
export default withLoggedIn(InfomationPage);
