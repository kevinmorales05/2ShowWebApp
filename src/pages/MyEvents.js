import React, { useEffect, useState } from "react";
import OnLiveShow from "../components/OnLiveShow";
import { db, auth } from "../firebase";
import { Button, Image } from "antd";

export default function MyEvents() {
  const [data, setData] = useState([]);
  const [urlOnPlay, setUrlOnPlay] = useState("");
  const [nameEvent, setNameEvent] = useState("");

  useEffect(() => {

    const getEvents = async () => {


      if (auth.currentUser) {
        console.log(auth.currentUser.uid) 
      
        const eventsRef = db.ref(`buyTickets/${auth.currentUser.uid}`);
        eventsRef.once("value", function (snapshot) {
          var eventsList = [];
          snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var data = childSnapshot.val();
            eventsList.push({ key: key, data });
          });
          setData(eventsList);
        });
      }
        
        else {
          alert('No existe un usuario loggeado!')
        }

      
    };

    getEvents();
  }, []);

  return (
    <div className="myeventsBlock">
      <div className="broadcastBlock">
        <OnLiveShow urlOnPlay={urlOnPlay} nameEvent={nameEvent}/>
      </div>
      <div className="rowShows">
        {data.map((event) => {
          return (
            <div className="myShows">
              <div className="listBanner">
                <Image width={100} src={event.data.banner} />
              </div>
              <div className="listInfo">
                <h1 className="listTitle">{event.data.name}</h1>
                <h3 className="listDetail">Martes 2 de junio de 2021</h3>
                <h3 className="listDetail"> 20:00</h3>
                <Button
                  type="primary"
                  className="btn2Show"
                  onClick={() => {
                    setUrlOnPlay(event.data.urlEvent);
                    setNameEvent(event.data.name);
                  }}
                >
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
