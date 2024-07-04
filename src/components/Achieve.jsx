import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import SubHeading from "./SubHeading";
import Card from "./Card";
import ListItem from "./ListItem";

function Achieve() {
  const Div = styled.div`
    margin: 5rem auto 0 auto;
    width: 70%;

    .grid,
    .list-container {
      margin: 2rem auto 0 auto;
      width: 80%;
    }

    .grid {
      gap: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 85%;
    }
  `;

  return (
    <Div id="achieve">
      <Heading title="My Achievements" subTitle="- More About Me" />
      <SubHeading title="Education" />
      <div className="grid grid-three">
        <Card value="8.62" title="2026" info="B.Tech @ IIT Jammu" />
        <Card
          value="88%"
          title="2022"
          info="Class - XII @ Rajendra's Academy"
        />
        <Card value="92.6%" title="2020" info="Class - X @ DPS, Mbd" />
      </div>

      <div id="other"></div>
      <SubHeading title="Scholastic" />
      <div className="list-container">
        <ListItem
          before="Achieved"
          highlight="AIR - 3460"
          after="in KVPY - SX 2021"
        />
        <ListItem
          before="Achieved"
          highlight="AIR - 9149"
          after="in JEE - Adv 2022"
        />
        <ListItem
          before="School topper,"
          highlight="Ranked - 1"
          after="in 8th SOF International Mathematics Olympiad 2014-15"
        />
        <ListItem
          before="School topper,"
          highlight="Ranked - 1"
          after="in 10th SOF International Mathematics Olympiad 2016-17. Recieved annual school award for the same."
        />
      </div>
      <SubHeading title="DSA & CP" />
      <div className="list-container">
        <ListItem
          before="Have solved more than"
          highlight="550 problems"
          after="on Leetcode and have a rating of 1521"
        />
        <ListItem
          before="Placed in div-2 with a"
          highlight="3* rating - 1684"
          after="and have solved 50 contest problems for the same"
        />
        <ListItem
          before="Have solved more than"
          highlight="120 problems"
          after="with an unsaturated rating of 993 in just 3 contests"
        />
      </div>
      <SubHeading title="Additional" />
      <div className="list-container">
        <ListItem
          before=""
          highlight="WebDev - Head"
          after=": Robotics Club, social Welfare club, Astronomy club of IIT JAMMU"
        />
        <ListItem
          before=""
          highlight="Event Co-Head"
          after=": Mock-Stock. One of the Fintech event of Technunctus, 2023"
        />
        <ListItem
          before="Volunteered in"
          highlight="Karyashala"
          after="- Drug Development Workshop of materials and biology dept"
        />
        <ListItem before="" highlight="Hobbies" after="- Beatboxing, CP, Gym" />
      </div>
    </Div>
  );
}

export default Achieve;
