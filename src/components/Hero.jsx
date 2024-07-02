import React from "react";
import styled from "styled-components";

function Hero() {
  const InfoContainer = styled.div`
    width: 100%;
    text-align: center;

    h5 {
      margin-top: 7rem;
      text-transform: uppercase;
      font-family: arial black;
      font-size: 2rem;
      background: ${({ theme }) => theme.colors.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 {
      font-weight: 200;
      font-family: Brush Script MT, comic sans MS;
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

    button {
      margin-top: 3rem;
      padding: 0.5rem 2rem;
      font-size: 2rem;
      border-radius: 0.5rem;
      border: none;
      text-decoration: none;
      font-family: arial black;
      background: ${({ theme }) => theme.colors.textGradient};
      color: ${({ theme }) => theme.colors.background};

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.colors.slave};
      }
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          corporis architecto rem distinctio aliquam, ad, est facere, aut fuga
          id delectus debitis fugiat optio quis eum quas mollitia voluptatem
          amet praesentium error quisquam explicabo necessitatibus accusantium
          unde? Veritatis animi facere ea velit a, impedit modi, deserunt
          tenetur, quidem similique laudantium?
        </p>
        <button>Resume</button>
      </div>
    </InfoContainer>
  );
}

export default Hero;
