import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <MainHeader>
      <NavLink to={"/"}>
        <img src="./images/logo.png" className="logo" alt="" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  logo {
    height: 5rem;
  }
  img {
    height: 4rem;
  }
`;

export default Header;
