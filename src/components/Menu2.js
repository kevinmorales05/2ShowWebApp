import React, { useState, useContext, useEffect } from "react";
import FirebaseContext from '../context/firebaseContext'
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { CaretRightFilled } from "@ant-design/icons";
import { db, auth, storage } from "../firebase";
import { SingleBedOutlined } from "@material-ui/icons";


export default function Menu2() {

  const {singIn, setSingIn, setSingOut} = useContext(FirebaseContext);

  useEffect(() => {
    console.log(singIn, 'desde Context')
  }, [singIn])

  const closeSession = () => {
    if (auth.currentUser) {
      console.log(auth.currentUser.uid);
      auth.signOut();
      alert("Cesión Finalizada!");
      setSingOut();
    } else {
      alert("No se ha iniciado sesión");
    }
  };
  return (
    <div>
      <Breadcrumb
        style={{ marginTop: "5px", color: "white" }}
        separator={
          <CaretRightFilled style={{ color: "white", paddingBottom: "30px" }} />
        }
      >
        <Breadcrumb.Item className="item">
          {singIn ? (
            <Link to="/" onClick={() => closeSession()} className="link">
              Sing Out
            </Link>
          ) : (
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

        {singIn ? (
          <>
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
          </>
        ) : null}

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
