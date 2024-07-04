import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import styled from "styled-components";

function Footer() {
  const Foot = styled.div`
    width: 100%;
    overflow: auto;
    text-align: center;
    // display: flex;
    // flex-direction: column;
    background-color: ${({ theme }) => theme.colors.font};
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='${({
      theme,
    }) =>
      theme.colors
        .texture}' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='${({
      theme,
    }) =>
      theme.colors
        .texture}' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .grid {
      width: 60%;
      margin: 3rem auto 0 auto;
      text-transform: uppercase;

      ul {
        list-style-type: none;
      }

      h3 {
        margin-bottom: 1.5rem;
        font-weight: 400;
      }

      li {
        margin-top: 0.3rem;
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        color: ${({ theme }) => theme.colors.dull};

        a {
          text-decoration: none;

          &:link,
          &:visited {
            color: ${({ theme }) => theme.colors.dull};
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.dull};
            opacity: 0.8;
            cursor: pointer;
          }
        }
      }

      .map-container {
        overflow: hidden;
        border-radius: 1rem;
        border: 0;
        box-shadow: 1px 1px 4px 1px ${({ theme }) => theme.colors.dull};
      }

    }

    .social {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      
      .icon {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.master};

        &:hover {
          color: ${({ theme }) => theme.colors.slave};
          cursor: pointer;
        }
      }
    }

    button {
      margin-top: 3rem;
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
      border-radius: 0.5rem;
      border: none;
      text-decoration: none;
      font-family: "BrushScriptOpti-regular";
      background: rgba(0,0,0,0);
      color: ${({ theme }) => theme.colors.master};
      border: 0.1rem solid ${({ theme }) => theme.colors.master};

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.slave};
      }
    }

    button a {
      text-decoration: none;

      &:link,
      &:visited {
        color: ${({ theme }) => theme.colors.master};
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.master};
        opacity: 0.8;
        cursor: pointer;
      }
    }

    .info {
      font-size: 1rem;
      font-family: helvetica;
      margin-top: 3rem;
      margin-bottom: 1rem;
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme.colors.secFont};
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid {
        row-gap: 2rem;

        h3 {
          font-size: 0.8rem;
          letter-spacing: 0.2rem;
          font-weight: 500;
        }

        li {
          font-size: 0.8rem;
        }
      }

    }
  `;

  // can not use due to mpa

  // const scrollToElement = (elemented) => {
  //   var element = document.getElementById(elemented);
  //   var headerOffset = 60;
  //   var elementPosition = element.getBoundingClientRect().top;
  //   var offsetPosition = elementPosition + window.scrollY - headerOffset;

  //   window.scrollTo({
  //     top: offsetPosition,
  //     behavior: "smooth",
  //   });

  //   // document
  //   //   .getElementById(element)
  //   //   ?.scrollIntoView({ behavior: "smooth", block: "top" });
  // };

  return (
    <Foot>
      <div className="grid grid-three-uneven">
        <ul className="link-container">
          <h3>
            <span className="highlight">home</span>
          </h3>
          <li>
            <a href="/#intro">Intro</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#achieve">Education</a>
          </li>
          <li>
            <a href="/#other">Other Info</a>
          </li>
        </ul>
        <ul className="link-container">
          <h3>
            <span className="highlight">projects</span>
          </h3>
          <li>MyBuddy</li>
          <li>K-Internationals</li>
          <li>Portfolio</li>
        </ul>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.576099217223!2d74.8936900761656!3d32.8034973826314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e814038301e31%3A0xe3a42e213df5c738!2sIndian%20Institute%20of%20Technology%2C%20Jammu!5e0!3m2!1sen!2sin!4v1720033277913!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            title="G-map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <center>
        <button>
          <a href="https://drive.google.com/file/d/1CaBWbuk3yF4erhM8Za0Y_Zna3ABfBZtu/view?usp=sharing">
            Resume
          </a>
        </button>
      </center>
      <div className="social">
        <a href="https://www.linkedin.com/in/om-chaudhary-921a691b6/">
          <SiLinkedin className="icon" />
        </a>
        <a href="https://github.com/I-m-OM">
          <SiGithub className="icon" />
        </a>
        <a href="https://www.instagram.com/i.m.om_16/">
          <SiInstagram className="icon" />
        </a>
      </div>
      <div className="info">Designed & Developed by Om Chaudhary.</div>
    </Foot>
  );
}

export default Footer;
