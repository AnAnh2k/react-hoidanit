import { Button, Input, Form, notification, Divider, message } from "antd";
import { Link, NavLink } from "react-router-dom";

import { loginUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, contextHolder2] = message.useMessage();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    // console.log("Success:", values);
    // alert("Login successful with values: " + JSON.stringify(values));
    const res = await loginUserAPI(values.email, values.password);
    if (res.data) {
      messageApi.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/");
      }, 1000); // Chờ 1 giây rồi mới chuyển trang
      // navigate("/");
    } else {
      api.error({
        message: "Error Login",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };
  return (
    <>
      {contextHolder}
      {contextHolder2}
      <fieldset
        style={{
          justifyContent: "center",
          marginTop: "100px",
          width: "600px",
          margin: "100px auto 0",
          border: "1px solid #ccc",
          padding: "15px",

          borderRadius: "5px",
        }}
      >
        <legend>Đăng nhập</legend>
        <Form
          form={form}
          layout="vertical"
          style={{ maxWidth: "600px", margin: "auto" }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <div
            style={{
              margin: "50px",
            }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Please input a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                loading={loading}
                type="primary"
                onClick={() => {
                  form.submit();
                }}
              >
                Login
              </Button>
              {/* <Button
              onClick={() => {
                form.setFieldsValue({
                  email: "anducanh",
                  fullName: "An Duc Anh",
                  phone: "0123456789",
                });
                console.log("Form Values:");

                // form.getFieldsValue();
              }}
            >
              Test
            </Button> */}
              <Link to="/">
                Go to homepage <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </Form>
        <Divider></Divider>
        <div style={{ textAlign: "center" }}>
          Chưa có tài khoản?{" "}
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "#1677ff" }}
          >
            Đăng ký tại đây
          </Link>
        </div>
      </fieldset>
    </>
  );
};

export default LoginPage;
