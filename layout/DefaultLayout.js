import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import HeaderLayout from "./Header";
import { Fragment } from "react";
import FooterLayout from "./Footer";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import CheckableTagCommon from "components/CheckableTagCommon";
const propTypes = {};

const DefaultLayout = ({ children }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Layout className="layout-custom">
      <HeaderLayout />
      <Content style={{ marginTop: 72 }}>
        <div className="header-tag">
          <CheckableTagCommon />
        </div>
        <div
          className="container site-layout-background"
        >
          {children}
        </div>
      </Content>
      <FooterLayout />
    </Layout>
  );
};

DefaultLayout.propTypes = propTypes;
export default DefaultLayout;
