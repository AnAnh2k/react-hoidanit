import { Button, Input, Form, notification, Divider } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = async (values) => {
    // console.log("Success:", values);
    // Here you can call your API to register the user
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    if (res.data) {
      api.success({
        message: "Register User Successful",
        description: "Đăng ký user thành công",
      });
      // setTimeout(() => {
      //   navigate("/login");
      // }, 1000); // Chờ 1 giây rồi mới chuyển trang
      navigate("/login");
    } else {
      api.error({
        message: "Register User Failed",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <>
      {contextHolder}
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
          <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please input your username!" },
              {
                pattern: /^[0-9]+$/,
                message: "Please input a valid phone number!",
              },
              {
                maxWidth: 10,
                message: "Phone number cannot exceed 10 digits.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div>
            <Button
              type="primary"
              onClick={() => {
                form.submit();
              }}
            >
              Register
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
          </div>
          <Divider />
          <div>
            Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default RegisterPage;
