import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function PageNavigation({ name }) {
  return (
    <Wrapper>
      <NavLink to={"/"}>Home/</NavLink>
      {name}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.5rem;
  padding-left: 1.2rem;
  a {
    font-size: 2.5rem;
  }
`;

export default PageNavigation;
