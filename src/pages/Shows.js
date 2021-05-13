import React, { useState, useEffect } from "react";
import { Card,  Button, Modal } from "antd";
import { db, auth } from "../firebase";
import {} from "@ant-design/icons";
import BuyEvent from "../components/BuyEvent";

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
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //states para pasar al modal
  const [nameBuy, setNameBuy] = useState('')
  const [costBuy, setCostBuy] = useState(0)
  const [descripBuy, setDescripBuy] = useState('')
  const [bannerBuy, setBannerBuy] = useState('')
  const [ticketBuy, setTicketBuy] = useState('')
  const [keyBuy, setKeyBuy] = useState('')
  const [uidUser, setUidUser] = useState('')
  //funcion para pasar los props
  const openModalWithInfo = (event) => {
        setNameBuy(event.data.name)
        setCostBuy(event.data.costTicket)
        setDescripBuy(event.data.description)
        setTicketBuy(event.data.ticketsAvailable)
        setBannerBuy(event.data.banner)
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
                cover={<img alt="example" height="280px" src={event.data.banner} 
                
                />}
                key={event.key}
              >
                <Meta title={event.data.name} description={event.description} />
                <p>Costo Ticket: {event.data.costTicket} USD</p>
                <p>{event.data.description}</p>

                <p>Fecha Evento: {event.data.dateEvent}</p>
                <Button type="primary" onClick={()=>{showModal()
                    openModalWithInfo(event)
                }} className="btn2Show">
                  Comprar Evento
                </Button>
                
              </Card>
              <Modal
                  title={nameBuy}
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  key={key}
                >
                  <BuyEvent name={nameBuy}
                      cost={costBuy}
                      description={descripBuy}
                      banner={bannerBuy}
                      ticketsAvailable={ticketBuy}
                      key={keyBuy}
                      buyerUid={uidUser} />
                </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
