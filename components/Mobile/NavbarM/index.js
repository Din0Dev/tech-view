import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Menu from "rc-menu/lib/Menu";
import { Button, Drawer, Dropdown, Input, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import ButtonUser from "components/ButtonUser";
import ButtonInfo from "components/ButtonInfo";
const propTypes = {};

const NavbarM = (props) => {
  const { isLogin = false } = props;
  const { Search } = Input;
  //! State
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  //
  const tech = (
    <Row>
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Điện thoại
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Máy tính
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            Gaming
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            Xe
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            All
          </a>
        </Menu.Item>
      </Menu>
    </Row>
  );

  const reviews = (
    <Row>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Điện thoại
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Máy tính bảng
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Laptop
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Máy tính
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/review-all">
          All
        </a>
      </Menu.Item>
      <Menu.Item>
        <Link rel="noopener noreferrer" href="/review-tv">
          TV
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Loa
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Tai nghe
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Đồng hồ thông minh
        </a>
      </Menu.Item>
    </Row>
  );
  //! Function
  const logo = <img src="/static/assets/img/tech-view-logo_color.svg" />;
  //!Render;
  return (
    <div className="navbar-mobile">
      <Button type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title={logo}
        placement="right"
        onClose={onClose}
        visible={visible}
        className="drawer-menu"
      >
        {/*  */}
        <div className="menu-mobile">
          <Search placeholder="Tìm kiếm..." allowClear style={{ width: 200 }} />
          <ul style={{ color: "black" }}>
            <li>
              <Link href="/">Trang Chủ</Link>
            </li>
            <li>
              <Link href="/tin-tuc">Tin Tức</Link>
            </li>
            <li>
              <Link href="/">Đánh Giá</Link>
            </li>
            <li>
              <Link href="/goc-nhin">Góc nhìn</Link>
            </li>
            <li>
              <Link href="/">How-to?</Link>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="menu-user">
          {isLogin ? (
            <ButtonInfo isMobile={true} />
          ) : (
            <ButtonUser isMobile={true} />
          )}
        </div>
      </Drawer>
    </div>
  );
};

NavbarM.propTypes = propTypes;
export default NavbarM;
