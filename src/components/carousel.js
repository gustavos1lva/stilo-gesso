import React, { useState, useEffect } from "react";
import leftArrow from "/src/components/images/arrow.svg";
import rightArrow from "/src/components/images/arrow.svg";
import "./carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    // Define um intervalo para mudar o slide automaticamente a cada 3 segundos
    const interval = setInterval(nextSlide, 4000);
    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="carousel">
      <img
        src={leftArrow}
        alt="Previous Slide"
        onClick={prevSlide}
        className="nav-previous arrow"
      />
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={`slide ${slide === idx ? "slide-active" : ""}`}
        />
      ))}
      <img
        src={rightArrow}
        alt="Next Slide"
        onClick={nextSlide}
        className="nav-next arrow"
      />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${slide === idx ? "" : "indicator-inactive"}`}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
