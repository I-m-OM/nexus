import React from "react";
import styled from "styled-components";

const Div = styled.div`
  .one,
  .two,
  .three {
    position: absolute;
    width: 150rem;
    rotate: -30deg;
    margin-top: -10rem;
    left: -20rem;
    height: 20rem;
    opacity: 0.1;
    background-color: ${({ theme }) => theme.colors.master};
    z-index: -2;
  }

  .two {
    rotate: 18deg;
    margin-top: -53rem;
  }
`;

function Background() {
  return (
    <Div>
      <div className="one"></div>
      <div className="two"></div>
    </Div>
  );
}

export default Background;
