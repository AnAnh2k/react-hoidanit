import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("hoidanit");
  const [email, setEmail] = useState("hoidanit");
  const [password, setPassword] = useState("hoidanit");
  const [phone, setPhone] = useState("hoidanit");
  const [api, contextHolder] = notification.useNotification();

  const handleClickBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res && res.data) {
      api.success({
        message: "create user",
        description: "Tạo mới user thành công",
      });
    }
    console.log("check res: ", res);

    console.log(res, res.data);
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div>
          {contextHolder}
          <Button
            type="primary"
            onClick={() => {
              handleClickBtn();
            }}
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
