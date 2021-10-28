import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import Link from "next/link";

const propTypes = {};

const ErrorPage = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="error-page">
      {/* <div className="err-page-bg">
        <img src="/static/assets/img/back404.png" />
      </div> */}
      <div className="err-page-inner">
        <div className="err-oops">Ooops...</div>
        <div className="err-page-not-found">Page not found</div>
        <div className="err-page-reason">
          The page you are looking for doesn’t exit or an other error occurred,
          go back to home page
        </div>
        <div className="err-page-button">
          <Link href="/">
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ErrorPage.propTypes = propTypes;
export default ErrorPage;
