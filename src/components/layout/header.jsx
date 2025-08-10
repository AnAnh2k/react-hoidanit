import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  UsergroupAddOutlined,
  HomeOutlined,
  BookOutlined,
  UserAddOutlined,
  LoginOutlined,
  SettingOutlined,
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
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
      children: [
        {
          key: "register",
          label: <Link to="/register">Register</Link>,
          icon: <UserAddOutlined />,
        },
        {
          key: "login",
          label: <Link to="/Login">Login</Link>,
          icon: <LoginOutlined />,
        },
      ],
    },
    // {
    //   label: <Link to="/register">Register</Link>,
    //   key: "register",
    //   icon: <UserAddOutlined />,
    // },
    // {
    //   label: <Link to="/Login">Login</Link>,
    //   key: "login",
    //   icon: <LoginOutlined />,
    // },
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
