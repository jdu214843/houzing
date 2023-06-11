import React from "react";
import { Container } from "./style";

export const Button = ({ children, type, onClick }) => {
  return (
    <Container onClick={onClick} type={type}>
      {children || "Generic Button"}
    </Container>
  );
};
export default Button;
