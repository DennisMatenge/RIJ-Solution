import React from "react";
import { Carousel } from "antd";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image7 from "../assets/image7.jpeg";
import image5 from "../assets/image5.jpeg";

const images = [
  {
    id: 1,
    src: image1,
  },
  {
    id: 2,
    src: image2,
  },
  {
    id: 3,
    src: image7,
  },
  {
    id: 4,
    src: image5,
  },
];

const Home = () => {
  return (
    <div className="w-[600px] h-[600px]">
      <Carousel dots={false} autoplay draggable>
        {images.map((image) => (
          <div
            key={image.id}
            className="flex justify-center items-center h-full"
          >
            <img
              className="w-[80%] h-[50%] object-contain"
              src={image.src}
              alt="/"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
