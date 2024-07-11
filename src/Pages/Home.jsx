import React from "react";
import Hero from "../components/Hero";
import Counter from "../components/Counter";
import Experience from "../components/Experience";
import Background from "../components/Background";
import Skill from "../components/Skill";
import Achieve from "../components/Achieve";
import Hr from "../components/Hr";

function Home() {
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
