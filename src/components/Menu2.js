import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { CaretRightFilled } from "@ant-design/icons";

export default function Menu2() {
  return (
    <div >
      <Breadcrumb
        style={{ marginTop: "5px", color: "white"}}
        separator={<CaretRightFilled style={{ color: "white", paddingBottom:'30px' }} />}
      >
        <Breadcrumb.Item className="item">
          <Link to="/singin" className="link">
            Sing In
          </Link>
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
