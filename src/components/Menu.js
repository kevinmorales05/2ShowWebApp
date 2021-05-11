import React, {useState} from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {
    Link
  } from "react-router-dom";


export default function MenuPrincipal() {

    const [state, setState] = useState(false)
   
    
     const toggleCollapsed = () => {
        if(state===true){
            setState(false)
        } 
        else{
            setState(true)
        }
        
        
      };

    return (
        <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(state ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={state}
          className="menu"
          
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/singin">Sing In</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
          <Link to="/myprofile">My Profile</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
          <Link to="/shows">Shows</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
          <Link to="/faq">FAQ</Link>
          </Menu.Item>
         
          
        </Menu>
      </div>
    )
}
