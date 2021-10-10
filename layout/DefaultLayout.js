import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import HeaderLayout from "./Header";
import { Fragment } from "react";
import FooterLayout from "./Footer";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
const propTypes = {};

const DefaultLayout = ({ children }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Layout className="layout-custom">
      <HeaderLayout />
      <Content className="container" style={{ marginTop: 72 }}>
        <div className="site-layout-background" style={{ margin: "50px 0" }}>
          {children}
        </div>
      </Content>
      <FooterLayout />
    </Layout>
  );
};

DefaultLayout.propTypes = propTypes;
export default DefaultLayout;
