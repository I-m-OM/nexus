import React from "react";
import styled from "styled-components";

function ListItem(props) {
  const Div = styled.div`
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: helvetica;
    display: flex;

    .bullet {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.secFont};
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 1.1rem;
    }
  `;

  return (
    <Div>
      <span className="bullet">&#9974;</span>&nbsp;&nbsp;
      <div>
        {props.before} <span className="highlight">{props.highlight}</span>{" "}
        {props.after}
      </div>
    </Div>
  );
}

export default ListItem;
