import React from "react";
import Hero from "../components/Hero";
import Counter from "../components/Counter";
import styled from "styled-components";
import Experience from "../components/Experience";
import Background from "../components/Background";
import Skill from "../components/Skill";
import Achieve from "../components/Achieve";

function Home() {
  const Hr = styled.hr`
    width: 60%;
    margin: 5rem auto;
    background: ${({ theme }) => theme.colors.secFont};
    height: 0.1rem;
    border: 0;
  `;

  return (
    <>
      <Hero />
      <Counter />
      <Hr />
      <Background />
      <Experience />
      <Background />
      <Skill />
      <Hr />
      <Achieve />
      <Hr />
    </>
  );
}

export default Home;
