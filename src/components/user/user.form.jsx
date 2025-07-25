import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { loadUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res && res.data) {
      api.success({
        message: "Create user",
        description: "Tạo mới user thành công",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      api.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setIsModalOpen(false);
  };

  return (
    <div className="user-form" style={{ margin: "21px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table users</h3>
        {contextHolder}
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Create User
        </Button>
      </div>

      <Modal
        title="Create User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => setIsModalOpen(false)}
        maskClosable={false}
        okText="Create"
      >
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
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
