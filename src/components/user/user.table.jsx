import { Space, Table, Tag } from "antd";
import { useState } from "react";
import { fetchAllUsersAPI } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
    {
      _id: "1",
      fullName: "An Đức Anh",
      email: "anducanh125@gmail.com",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const loadUser = async () => {
    console.log(">>> run loadUser start");

    const res = await fetchAllUsersAPI();
    console.log(">>> run loadUser end", res.data);
    setDataUsers(res.data);
  };

  loadUser();

  return <Table columns={columns} dataSource={dataUsers} />;
};

export default UserTable;
