import React from "react";
import styled from "styled-components";

function SkillCard(props) {
  const Div = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    background-color: ${props.background};
    font-size: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props.color};
    border-radius: 1rem;
    box-shadow: 1px 1px 4px 1px ${({ theme }) => theme.colors.dull};

    .overlay {
      word-wrap: break-word;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background: ${({ theme }) => theme.colors.textGradient};
      border-radius: 1rem;
      display: flex;
      align-items: center;
    }

    &:hover .overlay {
      opacity: 1;
    }

    .text {
      color: ${({ theme }) => theme.colors.background};
      font-size: 1.5rem;
      margin: auto;
      text-transform: uppercase;
      font-family: helvetica;
      font-weight: 700;
      word-wrap: break-word;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
      font-size: 6rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 6rem;

      .text {
        font-size: 1rem;
      }
    }
  `;
  return (
    <Div>
      {props.icon}
      <div className="overlay">
        <div className="text">{props.name}</div>
      </div>
    </Div>
  );
}

export default SkillCard;
