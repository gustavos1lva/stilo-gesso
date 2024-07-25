import "./App.css";
import React from "react";
import { Carousel } from "./components/carousel";
import images from "./utils/loadImages";

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
      <div className="Infos">Stilo Gesso</div>
    </div>
  );
}

export default App;
