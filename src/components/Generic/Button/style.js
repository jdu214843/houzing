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
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  ${getType}
`;

export { Container };
