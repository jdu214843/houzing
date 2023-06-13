import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
const Container = styled.div`
  height: 571px;
  border: 1px solid red;
  position: relative;
`;

const ArrowIcon = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  background-color: rgba(0, 0, 0, 0.2);
  transform: ${({ left }) => (!left ? "rotate(0deg)" : "rotate(-180deg)")};
  border-radius: 50%;
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
`;
export { Container, ArrowIcon };
