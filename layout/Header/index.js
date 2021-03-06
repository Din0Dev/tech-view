import React from "react";
import Link from "next/link";
import { Button, Col, Dropdown, Menu, Popover, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import Search from "antd/lib/input/Search";
import ButtonUser from "components/ButtonUser";
import ButtonInfo from "components/ButtonInfo";
import { useSelector } from "react-redux";
import NavbarM from "components/Mobile/NavbarM";
const HeaderLayout = (props) => {
  const authReducer = useSelector((state) => state.authReducer);
  const isLogin = authReducer?.auth?.isLogin;

  //! State

  const content = (
    <Search placeholder="input search text" style={{ width: 200 }} />
  );

  const tech = (
    <Row>
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/tin-tuc#tin-tuc-mobile">
            Điện thoại
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/tin-tuc#tin-tuc-may-tinh">
            Máy tính
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/tin-tuc#tin-tuc-game">
            Gaming
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/tin-tuc#tin-tuc-xe">
            Xe
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/tin-tuc">
            All
          </a>
        </Menu.Item>
      </Menu>
    </Row>
  );

  const reviews = (
    <Row>
      <Col className="review-left" span={12}>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all#danh-gia-dien-thoai-mtb">
            Điện thoại
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all#danh-gia-dien-thoai-mtb">
            Máy tính bảng
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all#danh-gia-laptop-pc">
            Laptop
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all#danh-gia-laptop-pc">
            Máy tính
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all">
            All
          </a>
        </Menu.Item>
      </Col>
      {/*  */}
      <Col className="review-right" span={12}>
        <Menu.Item>
          <Link rel="noopener noreferrer" href="/review-tv">
            TV
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all#danh-gia-them">Loa</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all#danh-gia-them">Tai nghe</a>
        </Menu.Item>  
        <Menu.Item>
          <a rel="noopener noreferrer" href="/review-all#danh-gia-them">Đồng hồ thông minh</a>
        </Menu.Item>
      </Col>
    </Row>
  );
  //! Render
  return (
    <Header
      className="header-custom"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="header-navbar">
        <div className="header-navbar-left">
          <Link href="/">
            <div className="logo" />
          </Link>
          <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Dropdown
                overlay={tech}
                className="dropdown-custom"
                placement="bottomLeft"
                trigger={["click"]}
              >
                <button onClick={(e) => e.preventDefault()}>Tin tức</button>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="3">
              <Dropdown
                overlay={reviews}
                className="dropdown-custom"
                placement="bottomLeft"
                trigger={["click"]}
              >
                <button onClick={(e) => e.preventDefault()}>Đánh giá</button>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/goc-nhin">Góc nhìn</Link>
            </Menu.Item>
            <Menu.Item key="5">How-to?</Menu.Item>
          </Menu>
        </div>
        <div className="header-navnar-right">
          <div className="header-navbar-right-button">
            <Popover placement="bottomRight" content={content} trigger="click">
              <Button>
                <img src="/static/assets/img/icon/search.svg" /> Search
              </Button>
            </Popover>
            {isLogin ? <ButtonInfo /> : <ButtonUser />}
          </div>
          <div className="header-navbar-right-button-mobile">
            <NavbarM isLogin={isLogin} />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderLayout;
