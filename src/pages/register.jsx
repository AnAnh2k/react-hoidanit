import { Button, Input, Form } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    // Here you can call your API to register the user
  };
  return (
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
          label="Full Name"
          name="fullName"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          // rules={[{ required: true, message: "Please input your username!" }]}
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
        </div>
      </div>
    </Form>
  );
};

export default RegisterPage;
