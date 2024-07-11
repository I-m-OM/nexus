import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

function Counter() {
  const Grid = styled.div`
    position: relative;
    width: 70%;
    margin: 3rem auto 0 auto;
    gap: 10%;

    .child {
      width: 100%;
      gap: 0rem;
      text-align: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 1.25rem;
      font-family: helvetica;
      padding: 0.25rem;
      color: ${({ theme }) => theme.colors.secFont};
      // background-color: ${({ theme }) => theme.colors.font};
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.slave};
      border-radius: 1rem;

      .child-data {
        font-size: 2.5rem;
        font-family: "ariblk";

        background: ${({ theme }) => theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 90%;
      row-gap: 0%;
      col-gap: 10%;

      .child {
      }
    }
  `;

  return (
    <Grid className="grid grid-four">
      <div className="child grid grid-one">
        <div className="child-data">
          <CountUp
            start={0.0}
            end={8.62}
            duration={2}
            decimals={2}
            enableScrollSpy
            scrollSpyOnce={true}
          />
        </div>
        <div className="child-info">Current CG</div>
      </div>
      <div className="child grid grid-one">
        <div className="child-data">
          <CountUp
            start={0}
            end={800}
            suffix="+"
            duration={2}
            enableScrollSpy
            scrollSpyOnce={true}
          />
        </div>
        <div className="child-info">DSA Problems</div>
      </div>
      <div className="child grid grid-one">
        <div className="child-data">
          <CountUp
            start={0}
            end={4}
            prefix="0"
            duration={2}
            enableScrollSpy
            scrollSpyOnce={true}
          />
        </div>
        <div className="child-info">Projects</div>
      </div>
      <div className="child grid grid-one">
        <div className="child-data">
          <CountUp
            start={0}
            end={9149}
            duration={2}
            enableScrollSpy
            scrollSpyOnce={true}
          />
        </div>
        <div className="child-info">JEE Adv '22</div>
      </div>
    </Grid>
  );
}

export default Counter;
