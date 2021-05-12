import React from "react";
import { Carousel, Button} from "antd";
import { Link } from "react-router-dom";


export default function MainCarousel() {
    return (
        <div>
            <Carousel autoplay effect="fade" className="blockC">
        <div className="banner1">
          <div className="banner">
            <h3 className="tituloBanner">Conciertos en Vivo</h3>
            <Button size="large" className="btn2Show">
              <Link to="/shows">Ver Shows</Link>
            </Button>
          </div>
        </div>
        <div className="banner2">
          <div className="banner">
            <h3 className="tituloBanner">Deportes en vivo</h3>
            <Button size="large" className="btn2Show">
              <Link to="/shows">Ver Shows</Link>
            </Button>
          </div>
        </div>
        <div className="banner3">
          <div className="banner">
            <h3 className="tituloBanner">Eventos Culturales en vivo</h3>
            <Button size="large" className="btn2Show">
              <Link to="/shows">Ver Shows</Link>
            </Button>
          </div>
        </div>
        <div className="banner4">
          <div className="banner">
            <h3 className="tituloBanner">Teatro y Comedia a la orden</h3>
            <Button size="large" className="btn2Show">
              <Link to="/shows">Ver Shows</Link>
            </Button>
          </div>
        </div>
      </Carousel>
        </div>
    )
}
