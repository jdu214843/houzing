import React from "react";
import { Container, Icons } from "./style";
import { Input, Button } from "../Generic";

export const Filter = () => {
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Button type={"light"}>
        <Icons.Filter />
        Advanced
      </Button>
      <Button width={200}>
        <Icons.Search />
        Sreach
      </Button>
    </Container>
  );
};

export default Filter;
