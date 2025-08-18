import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  UsergroupAddOutlined,
  HomeOutlined,
  BookOutlined,
  UserAddOutlined,
  LoginOutlined,
  SettingOutlined,
  AliwangwangOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context.jsx";

const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);
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
    ...(!user.id
      ? [
          {
            key: "login",
            label: <Link to="/login">Login</Link>,
            icon: <LoginOutlined />,
          },
          {
            key: "register",
            label: <Link to="/register">Register</Link>,
            icon: <UserAddOutlined />,
          },
        ]
      : []),
    ...(user.id
      ? [
          {
            key: "setting",
            label: `Wellcome ${user.fullName || "Guest"}`,
            icon: <AliwangwangOutlined />,
            children: [
              {
                key: "logout",
                label: <Link to="/login">Logout</Link>,
                icon: <LogoutOutlined />,
              },
            ],
          },
        ]
      : []),

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

  const onClick = (e) => {
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
