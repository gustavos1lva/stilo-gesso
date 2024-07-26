import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Carousel } from "./components/carousel";
import images from "./utils/loadImages";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  // Convert the imported images object into an array of slides
  const slides = Object.keys(images).map((key, index) => ({
    alt: "img" + index,
    src: images[key],
  }));

  return (
    <Router>
      <div className="App">
        <Carousel data={slides} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="Infos">
                <h1 className="Infos-title">Stilo Gesso</h1>
                <Link to="/about">
                  <button type="button" className="sobre">
                    <i
                      className="fas fa-address-card"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Sobre
                  </button>
                </Link>
                <br />
                <Link to="/services">
                  <button type="button" className="servicos">
                    <i
                      className="fas fa-tools"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Serviços
                  </button>
                </Link>
                <br />
                <Link to="/estimate">
                  <button type="button" className="orcamento">
                    <i
                      className="fas fa-file-signature"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Orçamento
                  </button>
                </Link>
                <br />
                <a style={{ textAlign: "right" }}>
                  <a
                    href="https://wa.me/5511986514791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fab-container"
                  >
                    <span className="numero">11 98651-4791</span>
                    <i
                      className="fab fa-whatsapp"
                      style={{ marginLeft: "10px", textDecoration: "none" }}
                    ></i>
                  </a>
                  <br />
                  <br />
                  <a
                    href="mailto:stilogesso@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fab-container2"
                  >
                    <span className="email">stilogesso@gmail.com</span>
                    <i
                      className="fa fa-envelope"
                      style={{ marginLeft: "10px", textDecoration: "none" }}
                    ></i>
                  </a>
                </a>
              </div>
            }
          />
          <Route
            path="/about"
            element={<ContentWrapper component={<About />} />}
          />
          <Route
            path="/services"
            element={<ContentWrapper component={<Services />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const ContentWrapper = ({ component }) => (
  <div className="Infos">
    {component}
    <Link to="/">
      <button className="back-button">Voltar</button>
    </Link>
  </div>
);

export default App;
