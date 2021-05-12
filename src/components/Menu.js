import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  LoginOutlined,
  PlayCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function MenuPrincipal() {
  const [state, setState] = useState(false);

  const toggleCollapsed = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={["2"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={state}
        className="menu"
      >
        
        <Menu.Item key="1" icon={<LoginOutlined />}>
          <Link  to="/singin">Sing In</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/myprofile">My Profile</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PlayCircleOutlined />}>
          <Link to="/shows">Shows</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<QuestionCircleOutlined />}>
          <Link to="/faq">FAQ</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
