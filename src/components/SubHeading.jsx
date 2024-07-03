import React from "react";
import styled from "styled-components";

function SubHeading(props) {
  const Div = styled.div`
    display: flex;

    h2,
    .bullet {
      font-family: Courier new;
      font-weight: 700;
      letter-spacing: 0.4rem;
      margin-top: 2rem;
      font-size: 1.7rem;
      color: ${({ theme }) => theme.colors.font};
      opacity: 0.9;
    }

    h2 {
      margin-left: 1rem;
    }
  `;

  return (
    <Div>
      <span className="bullet">&#9676;</span>
      <h2>{props.title}</h2>
    </Div>
  );
}

export default SubHeading;
