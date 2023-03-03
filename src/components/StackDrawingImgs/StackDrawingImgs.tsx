import { useState } from "react";
import { DrawingImg } from "./DrawingImg";
import { Container } from "./styles";
import { crow_S, crystal_S, fox_S, gift, moon_S, open_S } from "./assets";

const images = [crow_S, crystal_S, fox_S, gift, moon_S, open_S];

export function StackDrawingImgs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Imgs = images.map((image, index) => (
    <DrawingImg
      key={index}
      image={image}
      index={index}
      maxIndex={images.length - 1}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  ));

  return <Container>{Imgs}</Container>;
}
