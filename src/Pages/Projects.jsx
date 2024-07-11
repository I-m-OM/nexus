import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import Heading from "../components/Heading";
import { GiNinjaHead } from "react-icons/gi";
import { IoIosImages } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

function Projects() {
  const Div = styled.div`
    width: 70%;
    margin: 5rem auto;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 85%;
    }
  `;
  return (
    <Div>
      <Heading title="My Projects -" />
      <Project
        topLeft="01"
        icon={<IoIosImages />}
        title="Fractal Analysis"
        description="Devised an algo to calculate Fractal Dimension of 2d matrices and images. Ran it on Indian Affective Picture Database and collected data for 19 participants along with 2 team-mates."
        skills="C++, Python, MatPlotLib, OpenCv"
        first={true}
      />
      <Project
        topRight="02"
        icon={<IoCalendarNumber />}
        title="MyBuddy Webapp"
        description="Developed a webapp to help me get current news headlines, blog everyday as diary, keep note of important events on calendar and fetch realtime upcoming CF contests for reminder."
        skills="Frontend - React ||  Backend - Java SpringBoot || DB - MongoDb"
        first={false}
      />
      <Project
        topLeft="03"
        icon={<FaLaptopCode />}
        title="Factory Management"
        description="Build a system for K Internationals USA LLC - to manage stock, employee, attendance for the owner user and to manage leave , feedbacks/messages for the employee user."
        skills="Frontend - React ||  Backend - Java SpringBoot || DB - MySql"
        first={true}
      />
      <Project
        topRight="04"
        icon={<GiNinjaHead />}
        title="Portfolio Site"
        description="Designed my own portfolio website as a online detailed resume and deployed it using netlify"
        skills="React, CSS"
        first={false}
      />
    </Div>
  );
}

export default Projects;
