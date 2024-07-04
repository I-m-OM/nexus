import React from "react";
import styled, { useTheme } from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaAmazon, FaGraduationCap, FaKeyboard } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";
import { IoMdCodeWorking } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";
import Heading from "./Heading";

function Experience() {
  const Div = styled.div`
    margin: auto;
    width: 70%;

    .date {
      padding: 0.7rem 1rem 0 1rem;
      color: ${({ theme }) => theme.colors.font};
    }

    .vertical-timeline-element--work p {
      font-size: 0.9rem;
    }

    .vertical-timeline-element-title {
      font-size: 1.5rem;
    }

    .vertical-timeline-element-subtitle {
      margin-top: 0.5rem;
      font-weight: 400;
      font-size: 1.5rem;
      font-family: "BrushScriptOpti-Regular", brush script mt;
      color: ${({ theme }) => theme.colors.master};
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 85%;
      .date {
        color: ${({ theme }) => theme.colors.background};
      }
    }
  `;

  const theme = useTheme();

  const themeData1 = {
    fontSize: "10rem",
    background: `${theme.colors.master}`,
    color: `${theme.colors.slave}`,
    boxShadow: `0 0 0 3px ${theme.colors.slave}`,
  };
  const themeData2 = {
    background: `${theme.colors.slave}`,
    color: `${theme.colors.master}`,
    boxShadow: `0 0 0 3px ${theme.colors.master}`,
  };

  const cardStyle1 = {
    background: `${theme.colors.font}`,
    color: `${theme.colors.background}`,
    boxShadow: "0 1rem 0 0 rgba(0,0,0,0)",
    borderRadius: "0 0 2rem 2rem",
    borderBottomWidth: "0.5rem",
    borderBottomStyle: "solid",
    borderBottomColor: `${theme.colors.slave}`,
  };

  const cardStyle2 = {
    background: `${theme.colors.font}`,
    color: `${theme.colors.background}`,
    boxShadow: "0 1rem 0 0 rgba(0,0,0,0)",
    borderRadius: "0 0 2rem 2rem",
    borderBottomWidth: "0.5rem",
    borderBottomStyle: "solid",
    borderBottomColor: `${theme.colors.master}`,
  };

  return (
    <Div id="experience">
      <Heading title="Intern & Participations" subTitle="- My Experience" />
      <VerticalTimeline lineColor={theme.colors.textGradient}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024"
          dateClassName="date"
          iconStyle={themeData1}
          icon={<IoMdCodeWorking />}
          contentStyle={cardStyle1}
        >
          <h3 className="vertical-timeline-element-title">
            Research Intern, IIT-K
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            under Prof. Braj Bhushan
          </h4>
          <hr />
          <p>
            Devised the algorithm to calculate Fractal Dimension of 2D matrix
            and images (N x N). Collected the FD data for many subjects to help
            in emotion & its intensity identification. Worked in a team of 3,
            utilized the Indian Affective Picture Database.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="28 May 2024"
          dateClassName="date"
          iconStyle={themeData2}
          icon={<FaAmazon />}
          contentStyle={cardStyle2}
        >
          <h3 className="vertical-timeline-element-title">
            Participated in Amazon HackOn - S4{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kritash, Robotics club
          </h4>
          <p>
            Appointed as the web development head for two clubs in my second
            year
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11 Oct 2023"
          dateClassName="date"
          iconStyle={themeData1}
          icon={<GrInProgress />}
          contentStyle={cardStyle1}
        >
          <h3 className="vertical-timeline-element-title">
            Turned 3 star on CodeChef
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Competitive Programming
          </h4>
          <p>
            Crossed 1600 mark. I further achieved global rank 99 in div 3
            contest, and 322 in div 2 contest.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          dateClassName="date"
          iconStyle={themeData2}
          icon={<FaKeyboard />}
          contentStyle={cardStyle2}
        >
          <h3 className="vertical-timeline-element-title">Web Dev Head</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kritash, Robotics club
          </h4>
          <p>
            Appointed as the web development head for two clubs in my second
            year
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11 Sept 2022"
          dateClassName="date"
          iconStyle={themeData1}
          icon={<FaGraduationCap />}
          contentStyle={cardStyle1}
        >
          <h3 className="vertical-timeline-element-title">IIT Jammu</h3>
          <h4 className="vertical-timeline-element-subtitle">B.Tech EE '26</h4>
          <p>Joined the EE Dept. after clearing JEE adv '22 with AIR 9149</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Div>
  );
}

export default Experience;
