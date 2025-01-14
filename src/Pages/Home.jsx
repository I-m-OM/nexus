import React from "react";
import Hero from "../components/Hero";
import Counter from "../components/Counter";
import Experience from "../components/Experience";
import Background from "../components/Background";
import Skill from "../components/Skill";
import Achieve from "../components/Achieve";
import Hr from "../components/Hr";
import Flexbox from "../components/Flexbox";
import Plot from "../components/Plot";

function Home({ data }) {
  return (
    <>
      <Flexbox />
      <Hr />
      <Background />
      <Plot data={data}/>
    </>
  );
}

export default Home;
