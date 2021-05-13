import React, { useEffect, useState } from "react";
import OnLiveShow from "../components/OnLiveShow";
import { db } from "../firebase";
import { Button, Image } from "antd";

export default function MyEvents() {
  const [data, setData] = useState([]);
  const [urlOnPlay, setUrlOnPlay] = useState('');
  
  useEffect(() => {
    const getEvents = async () => {
      const eventsRef = db.ref("buyTickets/cflaXdwVR3MpndWXJhTH0UclO632");
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

  return (
    <div className="myeventsBlock">
      <div className="broadcastBlock">
        <OnLiveShow urlOnPlay={urlOnPlay}/>
      </div>
      <div className="rowShows">
        {data.map((event) => {
          return (
            <div className="myShows" >
              <div className="listBanner">
                <Image
                  width={100}
                  src={event.data.banner}
                />
              </div>
              <div className="listInfo">
                <h1 className="listTitle">{event.data.name}</h1>
                <h3 className="listDetail">Martes 2 de junio de 2021</h3>
                <h3 className="listDetail"> 20:00</h3>
                <Button type="primary" className="btn2Show" onClick={()=> setUrlOnPlay(event.data.urlEvent)}>
                  Ingresar al Evento
                </Button>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
}


/*
 <div className="myShows" >
              <div className="listBanner">
                <Image
                  width={100}
                  src={event.data.banner}
                />
              </div>
              <div className="listInfo">
                <h1 className="listTitle">{event.data.name}</h1>
                <h3 className="listDetail">Martes 2 de junio de 2021</h3>
                <h3 className="listDetail"> 20:00</h3>
                <Button type="primary" className="btn2Show" onClick={()=> setUrlOnPlay(event.data.urlEvent)}>
                  Ingresar al Evento
                </Button>
              </div>
            </div>
*/