import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #ffffff",
        color: "#ffffff",
      };
    case "light":
      return {
        background: "#ffffff",
        color: "#0d263b",
        border: "1px solid #E6E9EC",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffffff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffffff",
      };
  }
};
const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "35px" : "10px")};
  /* ${getType} */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
`;

export { Container, Wrapper, Icon };
