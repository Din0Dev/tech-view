import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button, Drawer, message } from "antd";
import Link from "next/link";
import { logout } from "redux/actions";
import router from "next/router";
const propTypes = {};

const ButtonInfo = (props) => {
  const { isMobile = false } = props;
  //! State
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  //! Function
  const key = "updatable";
  const onLogout = () => {
    dispatch(logout());
    message.success({
      content: "Đăng xuất thành công!",
      key,
      duration: 2,
    });
  };
  //! Render
  return (
    <div className="button-user">
      <Button onClick={showDrawer}>
        {isMobile ? (
          `Tài khoản`
        ) : (
          <img src="/static/assets/img/icon/avanho.png" />
        )}
      </Button>
      <Drawer
        title="Xin chào, Nam Do!"
        placement="right"
        onClose={onClose}
        visible={visible}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="button-user-inner">
          <Link href="/thong-tin-ca-nhan">
            <Button className="sign-in">Thông tin cá nhân</Button>
          </Link>
          <Button className="sign-out" onClick={onLogout}>
            Đăng xuất
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

ButtonInfo.propTypes = propTypes;
export default ButtonInfo;
