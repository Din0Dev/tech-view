import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Drawer } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "redux/actions";

const propTypes = {};

const ButtonUser = (props) => {
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

  //! Render
  return (
    <div className="button-user">
      <Button onClick={showDrawer}>
        {isMobile ? (
          `Đăng nhập/Đăng ký`
        ) : (
          <img src="/static/assets/img/icon/use.svg" />
        )}
      </Button>
      <Drawer
        title="User Manager"
        placement="right"
        onClose={onClose}
        visible={visible}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="button-user-inner">
          <Link href="/dang-nhap">
            <Button className="sign-in">Đăng Nhập</Button>
          </Link>
          <Link href="/dang-ky">
            <Button className="sign-up">Đăng Ký</Button>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

ButtonUser.propTypes = propTypes;
export default ButtonUser;
