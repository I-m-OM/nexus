import React from "react";
import styled from "styled-components";

function Footer() {
  const Foot = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.font};
    height: 2rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secFont};
    font-size: 1rem;
    font-family: helvetica;
    justify-content: center;
  `;
  return <Foot> Designed & Developed by Om Chaudhary. </Foot>;
}

export default Footer;
