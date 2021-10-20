import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "components/Title";
import TitleDeliver from "components/TitleDeliver";
import { Form, Input, Button, Modal, message } from "antd";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/actions";

const propTypes = {
  label: PropTypes.string,
};

const FormSign = (props) => {
  const { label = "FORM", isSignUp = false } = props;
  //! State
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} sai định dạng Email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const key = "updatable";
  const authReducer = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const isLogin = authReducer?.auth?.isLogin;
  if (isLogin) {
    router.push("/");
  }
  const onFinish = (values) => {
    if (isSignUp) {
      showModal();
    } else {
      if (
        values.username === "namdo@gmail.com" &&
        values.password === "123456"
      ) {
        message.success({ content: "Đăng nhập thành công!", key, duration: 2 });
        dispatch(
          login({
            username: values.username,
            password: values.password,
          })
        );
      } else {
        message.error({
          content: "Sai tài khoản hoặc mật khấu!",
          key,
          duration: 2,
        });
      }
    }
  };

  //
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Bạn chắc chắn muốn đăng ký ?");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("Đăng ký thành công, vui lòng đợi...");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  //! Function

  //! Render
  return (
    <div className="form-sign">
      <Modal
        title="Thông Báo"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      <Link href="/">
        <img
         className="is-not-mobile"
          src="/static/assets/img/tech-view-logo_color.svg"
          style={{ width: 300 }}
        />
      </Link>
      <Title label={label} />
      <div className="form-login-social">
        <a
          href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <img src="/static/assets/img/icon/google.svg" /> Tiếp tục với Google
          </Button>
        </a>
        <a
          href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <img src="/static/assets/img/icon/facebook.svg" />
            Tiếp tục với Facebook
          </Button>
        </a>
        <div className="form-login-social-or">
          <TitleDeliver orientation="center" label="hoặc" />
        </div>
        <div className="form-login-form">
          <Formik initialValues={{}} onSubmit={onFinish}>
            {(propsFormik) => (
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {isSignUp && (
                  <Form.Item
                    className="form-input-custom"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input className="input-field" placeholder="Họ và tên" />
                  </Form.Item>
                )}
                <Form.Item
                  className="form-input-custom"
                  name={["email"]}
                  rules={[{ type: "email" }]}
                >
                  <Input
                    className="input-field"
                    placeholder="Email"
                    onChange={propsFormik.handleChange("username")}
                  />
                </Form.Item>

                <Form.Item
                  className="form-input-custom"
                  name="password"
                  rules={[
                    { required: true, message: "Vui lòng điền mật khẩu!" },
                  ]}
                >
                  <Input.Password
                    className="input-field"
                    placeholder="Password"
                    onChange={propsFormik.handleChange("password")}
                  />
                </Form.Item>

                <Form.Item
                  className="button-submit"
                  wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Button
                    type="primary"
                    type="submit"
                    onClick={() => {
                      propsFormik.submitForm();
                    }}
                  >
                    {label}
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Formik>

          <div className="label-ready">
            {isSignUp ? (
              <span>
                Bạn đã là thành viên? <Link href="/dang-nhap">Đăng nhập</Link>
              </span>
            ) : (
              <span>
                Bạn chưa có tài khoản? <Link href="/dang-ky">Đăng ký</Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FormSign.propTypes = propTypes;
export default FormSign;
