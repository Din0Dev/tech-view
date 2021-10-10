import React from "react";
import PropTypes from "prop-types";
import Title from "components/Title";
import TitleDeliver from "components/TitleDeliver";
import { Form, Input, Button } from "antd";

const propTypes = {
  label: PropTypes.string,
};

const FormSign = (props) => {
  const { label = "FORM" } = props;
  //! State
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  //! Function

  //! Render
  return (
    <div className="form-sign">
      <Title label={label} />
      <div className="form-login-social">
        <Button>
          <img src="/static/assets/img/icon/google.svg" /> Tiếp tục với Google
        </Button>
        <Button>
          <img src="/static/assets/img/icon/facebook.svg" />
          Tiếp tục với Facebook
        </Button>
        <div className="form-login-social-or">
          <TitleDeliver orientation="center" label="hoặc" />
        </div>
        <div className="form-login-form">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            validateMessages={validateMessages}
            autoComplete="off"
          >
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                {label}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

FormSign.propTypes = propTypes;
export default FormSign;
