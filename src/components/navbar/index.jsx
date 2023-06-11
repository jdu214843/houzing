import React from "react";
import { Container, Logo, Section, Wrapper, Link } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";

import Button from "../Generic/Button";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo />
          <h3>Houzing</h3>
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
      <Outlet />
    </Container>
  );
};
