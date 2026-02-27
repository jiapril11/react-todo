import React from "react";
import styled from "styled-components";
import Inner from "./Inner";

const StyledFooter = styled.footer`
  padding: 40px 0%;
  text-transform: uppercase;
  background-color: #0d2d3e0d;
  border-top: 1px solid #0e2d3e;
  border-bottom: 1px solid #0e2d3e;

  & p {
    margin: 0;
    color: #a1b1bb;
    font-size: 0.9rem;
    &:first-of-type {
      margin-bottom: 10px;
    }
  }

  & strong {
    color: #e93551;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Inner>
        <p>
          React Practice <strong>TODOS</strong>
        </p>
        <p>&copy; Copyright All Right reserved</p>
      </Inner>
    </StyledFooter>
  );
}
