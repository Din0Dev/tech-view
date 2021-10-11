import React from "react";
import Link from "next/link";
import { Button, Menu, Popover } from "antd";
import { Header } from "antd/lib/layout/layout";
import Search from "antd/lib/input/Search";
import ButtonUser from "components/ButtonUser";
import withLoggedIn from "HOC/withLoggedIn";
import ButtonInfo from "components/ButtonInfo";
import { useSelector } from "react-redux";
const HeaderLayout = (props) => {
  const authReducer = useSelector((state) => state.authReducer);
  const isLogin = authReducer?.auth?.isLogin;
  //! State
  const content = (
    <Search placeholder="input search text" style={{ width: 200 }} />
  );

  return (
    <Header
      className="header-custom"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="header-navbar">
        <div className="header-navbar-left">
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Tech</Menu.Item>
            <Menu.Item key="3">Review</Menu.Item>
            <Menu.Item key="4">Life</Menu.Item>
            <Menu.Item key="5">How-to?</Menu.Item>
          </Menu>
        </div>
        <div className="header-navnar-right">
          <Popover placement="bottomRight" content={content} trigger="click">
            <Button>
              <img src="/static/assets/img/icon/search.svg" /> Search
            </Button>
          </Popover>
          {isLogin ? <ButtonInfo /> : <ButtonUser />}
        </div>
      </div>
    </Header>
  );
};

export default HeaderLayout;
