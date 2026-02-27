import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const StyledContent = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
`;
export default function Layout({ children }) {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
      {children}
      </StyledContent>
      <Footer />
    </StyledWrapper>
  );
}
