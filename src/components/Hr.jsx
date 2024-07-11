import React from "react";
import styled from "styled-components";

function Hr() {
  const Hr = styled.hr`
    width: 60%;
    margin: 5rem auto;
    background: ${({ theme }) => theme.colors.secFont};
    height: 0.1rem;
    border: 0;
  `;
  return <Hr />;
}

export default Hr;
