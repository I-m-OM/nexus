import React from "react";
import styled from "styled-components";

function Button(props) {
  const But = styled.button`
    margin-top: 3rem;
    padding: 0;
    height: 3rem;
    font-size: 2rem;
    border-radius: 0.5rem;
    border: none;
    text-decoration: none;
    font-family: "ariblk", arial black, impact;
    background: ${({ theme }) => theme.colors.textGradient};

    &:hover {
      background: ${({ theme }) => theme.colors.slave};
    }

    a {
      padding: 2rem;
      text-decoration: none;

      &:link,
      &:visited {
        color: ${({ theme }) => theme.colors.background};
      }

      &:hover,
      &:active {
        cursor: pointer;
        opacity: 1;
      }
    }
  `;

  return (
    <But>
      <a href={props.address}>{props.text}</a>
    </But>
  );
}

export default Button;
