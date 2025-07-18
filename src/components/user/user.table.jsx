import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { fetchAllUsersAPI } from "../../services/api.service";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([
    {
      _id: "1",
      fullName: "An Đức Anh",
      email: "anducanh125@gmail.com",
    },
  ]);

  useEffect(() => {
    console.log(">>>> run useEffect 111");
    loadUser();
  }, []);

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
    const res = await fetchAllUsersAPI();
    setDataUsers(res.data);
  };

  console.log(">>>> run useEffect 000");

  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;
