import React, { useRef } from "react";
import { ArrowIcon, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import houses1 from "../../assets/img/house1.png";
import houses2 from "../../assets/img/house2.png";
import houses3 from "../../assets/img/house1.png";
import houses4 from "../../assets/img/house2.png";
import HomeIcon from "../../assets/icons/bath.svg";

export const GenCarousel = () => {
  const slider = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={houses1} />
        <Img src={houses2} />
        <Img src={houses3} />
        <Img src={houses4} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.AveTitle className="subChild">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.AveTitle>

        <Content.Price>$5,250 / month</Content.Price>
        <Content.Button>Read More</Content.Button>
      </Content>
      <ArrowIcon onClick={onMove} data-name="right" left={"true"} />
      <ArrowIcon onClick={onMove} data-name="left" />
    </Container>
  );
};
export default GenCarousel;
