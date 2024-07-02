import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import SkillCard from "./SkillCard";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiApachemaven,
  SiCplusplus,
  SiCss3,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiSpringboot,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function Skill() {
  const Div = styled.div`
    margin: 5rem auto 0 auto;
    width: 70%;

    .grid {
      margin: 5rem auto;
      width: 90%;
    }
  `;

  return (
    <Div>
      <Heading title="Programming Arsenal" subTitle="- My Skills" />
      <div className="grid grid-five">
        <SkillCard
          icon={<SiCplusplus />}
          background="#fff"
          color="#004482"
          name="cpp"
        />
        <SkillCard
          icon={<FaJava />}
          background="#bc0b19"
          color="#2e97ce"
          name="java"
        />
        <SkillCard
          icon={<SiJavascript />}
          background="#000"
          color="#ffff00"
          name="javascript"
        />
        <SkillCard
          icon={<GrMysql />}
          background="#fff"
          color="#00758f"
          name="mysql"
        />
        <SkillCard
          icon={<SiMongodb />}
          background="#023430"
          color="#00ed64"
          name="mongodb"
        />
        <SkillCard
          icon={<SiHtml5 />}
          background="#fff"
          color="#e34c26"
          name="html5"
        />
        <SkillCard
          icon={<SiCss3 />}
          background="#fff"
          color="#1a5dad"
          name="css3"
        />
        <SkillCard
          icon={<FaReact />}
          background="#61dbfb"
          color="#1c2c4c"
          name="react"
        />
        <SkillCard
          icon={<SiSpringboot />}
          background="#231f20"
          color="#73b648"
          name="spring-boot"
        />
        <SkillCard
          icon={<SiHibernate />}
          background="#222"
          color="#beb17d"
          name="hibernate"
        />
        <SkillCard
          icon={<SiApachemaven />}
          background="#fc494f"
          color="#222"
          name="maven"
        />
      </div>
    </Div>
  );
}

export default Skill;
