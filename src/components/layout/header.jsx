import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  UsergroupAddOutlined,
  HomeOutlined,
  BookOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const Header = () => {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/users">Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to="/books">Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
    {
      label: <Link to="/register">Register</Link>,
      key: "register",
      icon: <UserAddOutlined />,
    },
  ];
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
