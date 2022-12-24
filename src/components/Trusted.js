import React from "react";
import styled from "styled-components";

function Trusted() {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 500+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Logo-even.png"
              alt="Trusted Company"
            />
          </div>
          <div className="slide">
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3155455/logo-clipart-md.png"
              alt="Trusted Company"
            />
          </div>
          <div className="slide">
            <img
              src="https://freesvg.org/img/1666339477sun-fire-logo-concept.png"
              alt="Trusted Company"
            />
          </div>
          <div className="slide">
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7822572/logo-concepts-clipart-md.png"
              alt="Trusted Company"
            />
          </div>
          <div className="slide">
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3152941/logo-clipart-md.png"
              alt="Trusted Company"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;
export default Trusted;
