import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  width: 100%;
  margin: auto;
  aspect-ratio: 1/1;
  border-radius: 5% 5% 30% 30%;
  background-color: ${({ theme }) => theme.colors.card};
  text-align: center;
  word-wrap: break-word;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 1px 4px 3px ${({ theme }) => theme.colors.dull};

  h2 {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.slave};
    font-size: 3rem;
    border-radius: 0 0 40rem 40rem;
    height: 40%;
    width: 80%;
    margin: auto;
  }

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.background};
    font-size: 1.25rem;
  }

  h4 {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.background};
    font-size: 1.5rem;
    height: 2rem;
    background: ${({ theme }) => theme.colors.gradient};
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 90%;
    aspect-ratio: 1/0.9;

    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

function Card(props) {
  return (
    <Cards>
      <h2>{props.value}</h2>
      <p>{props.info}</p>
      <h4>{props.title}</h4>
    </Cards>
  );
}

export default Card;
