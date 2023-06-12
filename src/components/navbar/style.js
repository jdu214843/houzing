import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #ffff;
  padding: var(--padding);
  width: 100%;
  height: 64px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #acedfa;
  }
`;
const Logo = styled(LogoImg)`
  margin-right: 12px;
`;

const Link = styled(NavLink)`
  padding: 0 32px;
  color: white;
  text-decoration: none;
`;
export { Container, Wrapper, Section, Logo, Link, Main };
