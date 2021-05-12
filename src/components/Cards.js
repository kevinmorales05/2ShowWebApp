import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default function Cards() {
  return (
    <div className="bloqueCards">
      <Card
        className="card"
        hoverable
        style={{ width: 400 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/showwebapp-ba70f.appspot.com/o/WebPageImages%2Fassets%2Fcoldplay.png?alt=media&token=093fbc3b-ee9a-4bd2-9f7b-ecae853d0dde"
          />
        }
      >
        <Meta
          title="Shows en Vivo"
          description="Ingresa a eventos musicales y artisticos de intérpretes nacionales e internacionales. KPop, Rock, deportes y más."
        />
      </Card>
      <Card
        className="card"
        hoverable
        style={{ width: 400 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/showwebapp-ba70f.appspot.com/o/WebPageImages%2Fassets%2Fshakira.png?alt=media&token=4d267c97-13d7-4401-b245-5494ee929d42"
          />
        }
      >
        <Meta
          title="Conoce a tus artistas preferidos"
          description="Con 2Show tienes la oportunidad de conocer a tus artistas, conversar con ellos e incluso tomarte fotos con ellos."
        />
      </Card>
      <Card
        className="card"
        hoverable
        style={{ width: 400 }}
        cover={
          <img
            alt="example"
            src="https://firebasestorage.googleapis.com/v0/b/showwebapp-ba70f.appspot.com/o/WebPageImages%2Fassets%2Fticke.png?alt=media&token=243b0094-26dd-427b-810a-20381f8a8f5e"
          />
        }
      >
        <Meta
          title="Compra y regala entradas"
          description="Con 2Show puedes comprar entradas para eventos presenciales y online a cualquier hora y sin hacer filas."
        />
      </Card>
    </div>
  );
}
