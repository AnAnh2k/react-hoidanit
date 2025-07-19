import React, { useEffect } from "react";
import { Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI, updateUserAPI } from "../../services/api.service";
export default function UpdateUserModal(props) {
  const {
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadUser,
  } = props;
  useEffect(() => {
    console.log("check dataUpdate", dataUpdate);
    if (dataUpdate) {
      setID(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);
  const [fullName, setFullName] = useState("");
  const [id, setID] = useState("");
  const [phone, setPhone] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phone);
    if (res && res.data) {
      api.success({
        message: "Create user",
        description: "Cập nhật user thành công",
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
    setID("");
    setDataUpdate(null);
    setPhone("");
    setIsModalUpdateOpen(false);
  };
  return (
    <>
      {contextHolder}
      <Modal
        title="Update User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalUpdateOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => setIsModalUpdateOpen(false)}
        maskClosable={false}
        okText={"Save"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>ID</span>
            <Input value={id} disabled />
          </div>
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
    </>
  );
}
