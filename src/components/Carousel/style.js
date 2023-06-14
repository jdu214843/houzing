import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
`;
// const ArrowIcon = styled.div``;
const ArrowIcon = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  background-color: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(0deg)" : "rotate(-180deg)")};
  border-radius: 50%;
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;

  letter-spacing: -0.02em;

  color: #ffffff;
`;
Content.AveTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffffff;
`;
Content.Icon = styled.div``;
export { Container, ArrowIcon, Img, Blur, Content };
