import "./App.css";
import React from "react";
import { Carousel } from "./components/carousel";
import images from "./utils/loadImages";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  // Convert the imported images object into an array of slides
  const slides = Object.keys(images).map((key, index) => ({
    alt: "img" + index,
    src: images[key],
  }));

  console.log(slides);

  return (
    <div className="App">
      <Carousel data={slides} />
      <div className="Infos">
        <h1 className="Infos-title">Stilo Gesso</h1>
        {/* <p className="Infos-body">
          <br></br>
          <br></br>
          Com mais de 19 anos de experiência, a Stilo Gesso é especializada em
          forros e divisórias em drywall, além de molduras e sancas em gesso.
          Desde nossa fundação em 2005, nos dedicamos a oferecer soluções
          inovadoras e de alta qualidade para transformar seus espaços com
          estilo e funcionalidade.
          <br></br>
          <br></br>
          Estamos em constante evolução para atender às suas necessidades com
          precisão e criatividade. Nossa equipe está pronta para ajudar a
          transformar seus ambientes com um toque de sofisticação e excelência.
          <br></br>
          <br></br>
          Entre em contato e descubra como a Stilo Gesso pode fazer a diferença
          no seu projeto.
        </p> */}
        <button type="button" className="sobre">
          <i class="fas fa-address-card" style={{ marginRight: "10px" }}></i>
          Sobre
        </button>
        <br></br>
        <button type="button" className="servicos">
          <i class="fas fa-tools" style={{ marginRight: "10px" }}></i>
          Serviços
        </button>
        <br></br>
        <button type="button" className="orcamento">
          <i class="fas fa-file-signature" style={{ marginRight: "10px" }}></i>
          Orçamento
        </button>
        <br></br>
        <a style={{ textAlign: "right" }}>
          <a
            href="https://wa.me/5511986514791"
            target="_blank"
            rel="noopener noreferrer"
            class="fab-container"
          >
            <span class="numero">11 98651-4791</span>
            <i
              class="fab fa-whatsapp"
              style={{ marginLeft: "10px", textDecoration: "none" }}
            ></i>
          </a>
          <br></br>
          <br></br>
          <a
            href="https://wa.me/5511986514791"
            target="_blank"
            rel="noopener noreferrer"
            class="fab-container2"
          >
            <span class="email">stilogesso@gmail.com</span>
            <i
              class="fa fa-envelope"
              style={{ marginLeft: "10px", textDecoration: "none" }}
            ></i>
          </a>
        </a>
      </div>
    </div>
  );
}

export default App;
