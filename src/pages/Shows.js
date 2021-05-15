import React, { useState, useEffect } from "react";
import { Card, Button, Modal } from "antd";
import { db, auth } from "../firebase";
import {} from "@ant-design/icons";
import BuyEvent from "../components/BuyEvent";
import changeUrlToEmbedUrl from "../utils/functions";

export default function Shows() {
  const { Meta } = Card;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventsRef = db.ref("events");
      eventsRef.once("value", function (snapshot) {
        var eventsList = [];
        snapshot.forEach(function (childSnapshot) {
          var key = childSnapshot.key;
          var data = childSnapshot.val();
          eventsList.push({ key: key, data });
        });
        setData(eventsList);
      });
    };

    getEvents();
  }, []);

  const [loading, setLoading] = useState(false);
  let onChange = (checked) => {
    setLoading(!checked);
  };
  //modal de compras
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      createBuy();
      setIsModalVisible(false);
      setConfirmLoading(false);
    }, 2000);
    alert("Compra realizada con éxito!");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //states para pasar al modal
  const [nameBuy, setNameBuy] = useState("");
  const [costBuy, setCostBuy] = useState(0);
  const [descripBuy, setDescripBuy] = useState("");
  const [bannerBuy, setBannerBuy] = useState("");
  const [ticketBuy, setTicketBuy] = useState("");
  const [urlEvent, setUrlEvent] = useState("");
  const [keyBuy, setKeyBuy] = useState("");
  const [uidUser, setUidUser] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);

  //funcion para pasar los props
  const openModalWithInfo = (event) => {
    setNameBuy(event.data.name);
    setCostBuy(event.data.costTicket);
    setDescripBuy(event.data.description);
    setTicketBuy(event.data.ticketsAvailable);
    setBannerBuy(event.data.banner);
    setUrlEvent(changeUrlToEmbedUrl(event.data.urlEvent));
  };

  //funcion para realizar la compra
  const createBuy = async () => {
    //const user = await auth.currentUser();
    try {
      // writeEventData(values, user.uid);
      writeBuy();
    } catch (error) {
      console.log("No fue posible registrar su compra en la base de datos");
    }
  };

  function writeBuy() {

    if (auth.currentUser) {
      console.log(auth.currentUser.uid)
      db.ref(`buyTickets/${auth.currentUser.uid}`).push({
        name: nameBuy,
        description: descripBuy,
        banner: bannerBuy,
        costTicket: ticketBuy,
        urlEvent: urlEvent,
      });
      console.log("upload complete!", nameBuy);
      
    } else {
      alert("No hay un usuario loggeado!");
    }
    
  }

  return (
    <div>
      <h1 className="textBig2">Shows disponibles</h1>

      <div className="showsBlock">
        {data.map((event, key) => {
          return (
            <div className="showCard" key={key}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img alt="example" height="280px" src={event.data.banner} />
                }
                key={event.key}
              >
                <Meta title={event.data.name} description={event.description} />
                <p>Costo Ticket: {event.data.costTicket} USD</p>
                <p>{event.data.description}</p>

                <p>Fecha del Evento: {event.data.dateEvent}</p>
                <p>Hora del  Evento: {event.data.hourEvent}</p>


                <Button
                  type="primary"
                  onClick={() => {
                    showModal();
                    openModalWithInfo(event);
                  }}
                  className="btn2Show"
                >
                  Comprar Evento
                </Button>
              </Card>
              <Modal
                title={nameBuy}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                key={key}
                confirmLoading={confirmLoading}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancelar
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    loading={confirmLoading}
                    onClick={handleOk}
                  >
                    Comprar
                  </Button>,
                ]}
              >
                <BuyEvent
                  name={nameBuy}
                  cost={costBuy}
                  description={descripBuy}
                  banner={bannerBuy}
                  ticketsAvailable={ticketBuy}
                  key={keyBuy}
                  buyerUid={uidUser}
                />
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
