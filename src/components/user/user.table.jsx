import { Space, Table, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserModal from "./view.user.model";
import { deleteUsersAPI } from "../../services/api.service";
import { notification, Popconfirm } from "antd";
const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);

  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <>
            <a
              href="#"
              onClick={() => {
                setDataUpdate(record);
                setOpen(true);
              }}
            >
              {record._id}
            </a>
          </>
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            style={{
              cursor: "pointer",
              color: "blue",
              fontSize: "18px",
            }}
          />
          <Popconfirm
            title="Delete User"
            description={`Bạn có chắc chắn muốn xóa user "${record.fullName}" không?`}
            onConfirm={() => handleDeleteBtn(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              style={{ cursor: "pointer", color: "red", fontSize: "18px" }}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDeleteBtn = async (id) => {
    const res = await deleteUsersAPI(id);
    if (res && res.data) {
      api.success({
        message: "Delete user",
        description: "Xóa user thành công",
      });

      await loadUser();
    } else {
      api.error({
        message: "Error deletete user",
        description: JSON.stringify(res.message),
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserModal
        open={open}
        setOpen={setOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
