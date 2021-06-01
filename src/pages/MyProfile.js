import React, { useState, useEffect } from "react";
import { Divider, Image, Card, Row, Col, Button, Modal } from "antd";
import MyShows from "../components/MyShows";
import CreateShow from "../components/CreateShow";
import { auth, db } from "../firebase";

import { useHistory } from "react-router-dom";

export default function Profile() {
  const [myshows, setMyshows] = useState(false);
  const [createEvent, setCreateEvent] = useState(false);

  let history = useHistory();
  const [userInfo, setUserInfo] = useState({});

  //funciones de lectura de informacion de firebase

  useEffect(() => {
    const getData = async () => {
      const userRef = await db.ref(`users/${auth.currentUser.uid}`);
      userRef.on("value", (snapshot) => {
        console.log(snapshot.val());
        setUserInfo(snapshot.val());
      });
    };
    getData();
  }, []);

  return (
    <div className="general">
      <div className="background">
        <Image
          width={200}
          src={userInfo.photo}
          className="imgProfile"
        />
      </div>
      <Divider>{userInfo.name}</Divider>
      <div className="info">
        <Row justify="space-around" align="middle">
          <Col>
            <Card style={{ width: 300 }}>
              <p>
                <b>Ciudad:</b>{userInfo.city[2]}
              </p>
              <p>
                <b>Edad:</b> {userInfo.age} años
              </p>
              <p>
                <b>Fecha de Cumpleaños:</b> {userInfo.birthday}
              </p>
              <p>
                <b>Teléfono:</b> {userInfo.phoneNumber}
              </p>
              <p>
                <b>uid:</b> {userInfo.uid}
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <Divider>Shows</Divider>
      <div className="navigation">
        <Button
          type="primary"
          className="btn2Show"
          onClick={() => setCreateEvent(true)}
          style={{margin:'5px'}}
        >
          Crear Show
        </Button>
        <Button
          type="primary"
          className="btn2Show"
          style={{margin:'5px'}}
          onClick={() => setMyshows(true)}
        >
          Mis Shows
        </Button>
      </div>
      <div className="contentVariable">
        <Modal
          title="My Shows"
          visible={myshows}
          onOk={() => setMyshows(false)}
          onCancel={() => setMyshows(false)}
        >
          <MyShows uidUser={userInfo.uid} />
        </Modal>
        <Modal
          title="Crear Shows"
          visible={createEvent}
          onOk={() => setCreateEvent(false)}
          onCancel={() => setCreateEvent(false)}
        >
          <CreateShow uidUser={userInfo.uid} />
        </Modal>
      </div>
      <div></div>
    </div>
  );
}
