import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

function ErrorPage() {
  return (
    <Wrapper>
      <div className="container">
        <h2>404</h2>
        <h3>OOPS! This Page Does Not Exist</h3>
        <p>
          The page you are looking for probably does not exist. You might have
          clicked on some spam / wrong url. Anyway click the button below to go
          back to home.
        </p>
        <Button>
          <NavLink to={"/"}>HOME</NavLink>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;
