import { Input, Modal, Drawer } from "antd";
import { useState, useEffect } from "react";
export default function ViewUserModal(props) {
  const { open, setOpen, dataUpdate, setDataUpdate } = props;
  useEffect(() => {
    console.log("check dataUpdate", dataUpdate);
    if (dataUpdate) {
      setID(dataUpdate._id);
      setAvatar(dataUpdate.avatar);
      setFullName(dataUpdate.fullName);
      setEmail(dataUpdate.email);
      setCreatedAt(dataUpdate.createdAt);
      setIsActive(dataUpdate.isActive);
      setRole(dataUpdate.role);
      setUpdatedAt(dataUpdate.updatedAt);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [role, setRole] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [fullName, setFullName] = useState("");
  const [id, setID] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <Drawer
        title="View User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        onClose={() => {
          setOpen(false);
          setDataUpdate(null);
        }}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>ID</span>
            <Input value={id} disabled />
          </div>
          <div>
            <span>Avatar</span>
            <Input value={avatar} disabled />
          </div>
          <div>
            <span>FullName</span>
            <Input value={fullName} disabled />
          </div>
          <div>
            <span>Email</span>
            <Input value={email} disabled />
          </div>

          <div>
            <span>Created At</span>
            <Input value={createdAt} disabled />
          </div>
          <div>
            <span>Is Active</span>
            <Input value={isActive ? "Yes" : "No"} disabled />
          </div>
          <div>
            <span>Role</span>
            <Input value={role} disabled />
          </div>
          <div>
            <span>Updated At</span>
            <Input value={updatedAt} disabled />
          </div>

          <div>
            <span>Phone</span>
            <Input value={phone} disabled />
          </div>
        </div>
      </Drawer>
    </>
  );
}
