import React from "react";
import styled from "styled-components";

function Heading(props) {
  const Div = styled.div`
    h5 {
      font-family: arial;
      font-weight: 500;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.slave};
    }
    h2 {
      font-family: Courier new;
      font-weight: 700;
      letter-spacing: 0.4rem;
      margin-top: 1rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.font};
      opacity: 0.9;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      h2 {
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
      }
    }
  `;
  return (
    <Div>
      <h5>{props.subTitle}</h5>
      <h2>{props.title}</h2>
    </Div>
  );
}

export default Heading;
