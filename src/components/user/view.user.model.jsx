import { Input, Modal, Drawer, Button, notification } from "antd";
import { useState, useEffect } from "react";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api.service";
export default function ViewUserModal(props) {
  const { open, setOpen, dataUpdate, setDataUpdate, loadUser } = props;
  useEffect(() => {
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

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [api, contextHolder] = notification.useNotification();

  const handleOnchangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    //step 1:upload file to server
    const reUpload = await handleUploadFile(selectedFile, "avatar");
    if (reUpload.data) {
      //success
      const newAvatar = reUpload.data.fileUploaded;
      //step 2: update user avatar in database
      const resUpdateAvatar = await updateUserAvatarAPI(
        newAvatar,
        id,
        fullName,
        phone
      );
      if (resUpdateAvatar.data) {
        setOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();
        api.success({
          message: "Update User Avatar Success",
          description: "Cập nhật ảnh đại diện thành công",
        });
      } else {
        //failed
        api.error({
          message: "Error Update User Avatar",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
      console.log("newAvatar", newAvatar);
    } else {
      //failed
      api.error({
        message: "Upload Failed",
        description: JSON.stringify(reUpload.message),
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Drawer
        width={"40vw"}
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
            <div
              style={{
                marginTop: "10px",
                marginBottom: "15px",
                height: "100px",
                width: "150px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/images/avatar/${avatar}`}
                alt=""
              />
            </div>
            <div>
              <label
                htmlFor="btnUpload"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "8px 12px",
                  background: "blue",
                  marginTop: "15px",
                  color: "white",
                  borderRadius: "4px",
                  width: "fit-content",
                  cursor: "pointer",
                }}
              >
                Upload Avatar
              </label>
              <input
                type="file"
                onChange={(event) => {
                  handleOnchangeFile(event);
                }}
                hidden
                id="btnUpload"
              />
            </div>
            {preview && (
              <>
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "15px",
                    height: "100px",
                    width: "150px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={preview}
                    alt=""
                  />
                </div>
                <Button
                  type="primary"
                  onClick={() => {
                    handleUpdateUserAvatar();
                  }}
                >
                  Save
                </Button>
              </>
            )}
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
