import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SignIn from "components/SignIn";

const propTypes = {};

const SignInPage = (props) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <div className="section-sign-in">
      <SignIn />
    </div>
  );
};

SignInPage.propTypes = propTypes;
export default SignInPage;
