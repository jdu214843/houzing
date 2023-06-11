import React from "react";
import { Container } from "./style";
import { Input } from "../Generic";
import Filter from "../Filter";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <h1>Home</h1>
      <Input placeholder={"test"} width={200} />
    </Container>
  );
};

export default Home;
