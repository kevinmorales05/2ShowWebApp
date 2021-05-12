import React from "react";
import { Row, Col } from "antd";
import MainCarousel from "../components/MainCarousel";
import Cards from "../components/Cards";

export default function Main() {
  return (
    <div>
      <MainCarousel />

      <div className="bannerStyle">
        <h2 className="textBig2">Lo que 2Show tiene para ti</h2>
      </div>

    <Cards />

      <div className="bannerStyle">
        <h2 className="textBig2">¿Cómo funciona 2Show?</h2>
      </div>

      <Row style={{ alignContent: "center", justifyContent: "center" }}>
        <Col>
          <div className="columna2Show">
            <h2 className="textMedium"> ¿Cómo funciona 2Show para Artistas?</h2>
            <div style={{ display: "flex" }}>
              <div className="block2Show">
                <p className="textSmall">
                  En este video te explicamos como funciona 2Show, te enseña
                  cómo puedes ganar dinero organizando y transmitiendo eventos
                  en vivo mediante nuestra plataforma.
                </p>
              </div>

              <iframe
                width="220"
                height="200"
                src="https://www.youtube.com/embed/UFUXdov7WkE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </Col>
        <Col>
          <div className="columna2Show">
            <h2 className="textMedium">
              ¿Cómo funciona 2Show para el Público?
            </h2>
            <div style={{ display: "flex" }}>
              <div className="block2Show">
                <p className="textSmall">
                  En este video te explicamos como funciona 2Show, te enseña
                  cómo puedes reservar entradas, asistir a los eventos online,
                  cómo comprar un pase para conocer a tus artistas favoritos y
                  cómo regalar entradas por medio de la plataforma.
                </p>
              </div>

              <iframe
                width="220"
                height="200"
                src="https://www.youtube.com/embed/j_ntWokRxME"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}


