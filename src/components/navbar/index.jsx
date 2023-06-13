import React from "react";
import { Container, Logo, Section, Wrapper, Link, Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";

import Button from "../Generic/Button";
import Filter from "../Filter";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={"true"}>
            <Logo />
            <h3 style={{ marginBottom: "0px" }}>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link key={index} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              Login
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};
