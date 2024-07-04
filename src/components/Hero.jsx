import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Hero() {
  const InfoContainer = styled.div`
    width: 100%;
    text-align: center;

    h5 {
      margin-top: 7rem;
      text-transform: uppercase;
      font-family: "ariblk", arial black, impact;
      font-size: 2rem;
      background: ${({ theme }) => theme.colors.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 {
      font-weight: 200;
      font-family: "BrushScriptOpti-Regular", Brush Script MT, comic sans MS;
      letter-spacing: 0.2rem;
      font-size: 7rem;
      background: ${({ theme }) => theme.colors.textGradient};
      -webkit-background-clip: text;
      -webkit-text-stroke: 0.5rem transparent;
      color: ${({ theme }) => theme.colors.background};
    }

    p {
      font-family: helvetica;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.secFont};
      width: 80%;
      margin: auto;
      margin-top: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      h5 {
        margin-top: 10rem;
        font-size: 1.5rem;
      }
      h1 {
        margin-top: 2rem;
        line-height: 1;
        font-size: 5rem;
      }
      p {
        margin-top: 4rem;
      }
    }
  `;
  return (
    <InfoContainer>
      <div className="intro">
        <h5>Hello! this is</h5>
        <h1>Om Chaudhary</h1>
        <p>
          I am 3rd year B.Tech undergrad of IIT - Jammu, Electrical Engineering
          Department 2026 batch. I have keen interest in Competitve Programming
          and have been practising DSA since 2nd sem. My tech stacks includes
          Java for Backend, and JavaScript for Frontend. I am open to work and
          relocate for the same. Currently looking for internship oppurtunities,
          below is my resume attached. You can refer to "CONTACT" page in order
          to connect with me, Thanks.
        </p>
        <Button
          text="Resume"
          address="https://drive.google.com/file/d/1CaBWbuk3yF4erhM8Za0Y_Zna3ABfBZtu/view?usp=sharing"
        />
      </div>
    </InfoContainer>
  );
}

export default Hero;
