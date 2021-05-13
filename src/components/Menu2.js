import React, {useState} from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { CaretRightFilled } from "@ant-design/icons";
import { db, auth, storage } from '../firebase';

export default function Menu2() {
  const [singIn, setSingIn] = useState(false)
  return (
    <div >
      <Breadcrumb
        style={{ marginTop: "5px", color: "white"}}
        separator={<CaretRightFilled style={{ color: "white", paddingBottom:'30px' }} />}
      >
        <Breadcrumb.Item className="item">
          {singIn ? (
             
              <button onClick={()=> alert('Cerrar Sesión')}  className="link">
              Sing Out
              </button>
          ) :(
            <Link to="/singin" className="link">
            Sing In
            </Link>
          )}
          
        </Breadcrumb.Item>
        <Breadcrumb.Item className="item">
          <Link to="/" className="link">
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="item">
          <Link to="/myprofile" className="link">
            My Profile
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="item">
          <Link to="/myevents" className="link">
            My Events
          </Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item className="item">
          <Link to="/shows" className="link">
            Shows
          </Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item className="item">
          <Link to="/faq" className="link">
            FAQ
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
