import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SignUp from "components/SignUp";
const propTypes = {};

const SignUpPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-sign-in">
      <SignUp />
    </div>
  );
};

SignUpPage.propTypes = propTypes;
export default SignUpPage;
