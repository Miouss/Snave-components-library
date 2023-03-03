import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Img, ImgContainer } from "./styles";

interface Props {
  image: string;
  index: number;
  currentIndex: number;
  maxIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export function DrawingImg({
  image,
  index,
  currentIndex,
  maxIndex,
  setCurrentIndex,
}: Props) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [zIndex, setZIndex] = useState(maxIndex - index);

  const handleClick = () => {
    setStartAnimation(true);
  };

  const handleAnimationEnd = () => {
    setCurrentIndex((index: number) => {
      const isIndexLast = index === maxIndex;
      return isIndexLast ? 0 : index + 1;
    });
  };

  const getRotateDeg = () => {
    const indexAvoidingZero = index + 1;
    if (indexAvoidingZero % 3 === 1) return 5;
    if (indexAvoidingZero % 3 === 2) return -5;
    return 0;
  };

  useEffect(() => {
    if (zIndex === maxIndex) setZIndex(0);
    else setZIndex(zIndex + 1);
    setStartAnimation(false);
  }, [currentIndex]);

  return (
    <ImgContainer
      key={index}
      move={startAnimation}
      zIndex={zIndex}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <Img src={image} rotateDeg={getRotateDeg()} />
    </ImgContainer>
  );
}
