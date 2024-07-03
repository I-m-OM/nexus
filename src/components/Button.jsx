import React from "react";
import styled from "styled-components";

function Button(props) {
  const But = styled.button`
    margin-top: 3rem;
    padding: 0.5rem 2rem;
    font-size: 2rem;
    border-radius: 0.5rem;
    border: none;
    text-decoration: none;
    font-family: "ariblk", arial black, impact;
    background: ${({ theme }) => theme.colors.textGradient};
    color: ${({ theme }) => theme.colors.background};

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.slave};
    }
  `;

  return <But>{props.text}</But>;
}

export default Button;
