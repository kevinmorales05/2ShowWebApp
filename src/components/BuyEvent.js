import React from "react";
import { Image } from "antd";

export default function BuyEvent({
  name,
  cost,
  description,
  banner,
  ticketsAvailable,
  key,
  buyerUid
}) {
  return (
    <div className="buyEventBlock" key={key}>
      <h1>{name}</h1>
      <Image width={200} src={banner} />
      <ul>
          <li><b>Descripción del Evento: </b>
                <p>{description}</p>
          </li>
          <li><b>Costo de entrada: </b>{cost} USD</li>
          <li><b>Tickets Disponibles: </b>{ticketsAvailable} USD</li>
          <li><b>buyer id: </b>{buyerUid} USD</li>
          

      </ul>
    </div>
  );
}
