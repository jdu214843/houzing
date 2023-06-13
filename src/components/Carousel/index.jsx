import React from "react";
import { ArrowIcon, Container } from "./style";
import { Carousel } from "antd";
import houses1 from "../../assets/img/house1.png";
import houses2 from "../../assets/img/house2.png";
const contentStyle = {
  margin: 0,
  height: "570px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Container>
      <Carousel afterChange={onChange}>
        <div>
          <img src={houses1} alt="" />
        </div>
        <div>
          <img src={houses2} alt="" />
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <ArrowIcon left={"true"} />
      <ArrowIcon />
    </Container>
  );
};

export default GenCarousel;
