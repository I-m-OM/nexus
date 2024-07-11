import React from "react";
import {
  SiCodechef,
  SiCodeforces,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiX,
} from "react-icons/si";
import styled from "styled-components";
import Heading from "../components/Heading";
import Hr from "../components/Hr";
import Background from "../components/Background";

function Hireme() {
  const Div = styled.div`
    width: 70%;
    margin: 5rem auto;

    form {
      width: 40%;
      margin: 1rem auto 5rem auto;
      display: flex;
      flex-direction: column;
      font-family: "BrushScriptOpti-Regular", Courier new;
      text-decoration: none;

      label {
        margin-top: 2rem;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.master};
      }

      input,
      textarea {
        background-color: ${({ theme }) => theme.colors.dull};
        border-radius: 0.25rem;
        border: none;
        box-shadow: 1px 1px 2px 0px ${({ theme }) => theme.colors.secFont};
        margin-top: 0.5rem;
        padding: 0.5rem;
        font-size: 1.1rem;
        font-family: Helvetica;
        color: ${({ theme }) => theme.colors.font};

        &:focus {
          outline: none;
        }
      }

      input {
        width: 60%;
        height: 2rem;
      }
    }

    .link-container {
      width: 80%;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      .my-email {
        text-align: center;
        word-wrap: break-word;
        margin: auto;
        font-size: 3rem;
        font-family: "BrushScriptOpti-Regular", Courier new;
        background: ${({ theme }) => theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .icon-container {
        width: 70%;
        margin: auto;

        .icon {
          display: inline-block;
          font-size: 2rem;
          width: 3rem;
          text-align: center;

          a {
            text-decoration: none;

            &:link,
            &:visited {
              color: ${({ theme }) => theme.colors.master};
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.slave};
              cursor: pointer;
            }
          }
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 85%;

      form {
        width: 70%;

        input {
          width: 100%;
        }
      }

      .link-container {
        width: 85%;

        .my-email {
          width: 100%;
          font-size: 3rem;
        }

        .icon-container {
          width: 100%;

          .icon {
            font-size: 2rem;
            width: 3rem;
          }
        }
      }
    }
  `;

  return (
    <Div>
      <Heading title="Connect with me -" />
      <form action="https://formspree.io/f/xovavver" method="POST">
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="Name"
          id="name"
          placeholder="Your Name"
          autoComplete="off"
          required
        />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Format : (abc@xyz.com)"
          autoComplete="off"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          name="Message"
          id="message"
          placeholder="Message area"
          autoComplete="off"
          rows="6"
          required
        />
        <button type="submit">Send</button>
      </form>
      <Hr />
      <Background />
      <Heading title="Social Handles -" subTitle="- Important links" />
      <div className="link-container">
        <div className="my-email">im.om.chaudhary@gmail.com</div>
        <div className="icon-container">
          <center>
            <div className="icon">
              <a href="https://www.linkedin.com/in/om-chaudhary-921a691b6/">
                <SiLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/I-m-OM">
                <SiGithub />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/i.m.om_16/">
                <SiInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="https://leetcode.com/u/I_m_OM/">
                <SiLeetcode />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.codechef.com/users/i_m_om">
                <SiCodechef />
              </a>
            </div>
            <div className="icon">
              <a href="https://codeforces.com/profile/I.m.OM">
                <SiCodeforces />
              </a>
            </div>
            <div className="icon">
              <a href="https://m.facebook.com/om.chaudhary.9634/">
                <SiFacebook />
              </a>
            </div>
            <div className="icon">
              <a href="https://x.com/ImOM_1611">
                <SiX />
              </a>
            </div>
          </center>
        </div>
      </div>
    </Div>
  );
}

export default Hireme;
