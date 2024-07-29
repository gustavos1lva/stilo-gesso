import React from "react";
import { Link } from "react-router-dom";
import "./Page.css";

function About() {
  return (
    <div className="Infos-body">
      <h2>Sobre Nós</h2>
      <p className="Infos-body">
        Com mais de 19 anos de experiência, a Stilo Gesso é especializada em
        forros e divisórias em drywall, além de molduras e sancas em gesso.
        Desde nossa fundação em 2005, nos dedicamos a oferecer soluções
        inovadoras e de alta qualidade para transformar seus espaços com estilo
        e funcionalidade.
        Estamos em constante evolução para atender às suas necessidades com
        precisão e criatividade. Nossa equipe está pronta para ajudar a
        transformar seus ambientes com um toque de sofisticação e excelência.
        Entre em contato e descubra como a Stilo Gesso pode fazer a diferença no
        seu projeto.
      </p>
    </div>
  );
}

export default About;
