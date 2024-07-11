import React from "react";
import { FaEarlybirds } from "react-icons/fa6";
import { GiBirdHouse, GiHeron, GiHummingbird } from "react-icons/gi";
import styled from "styled-components";

function Error() {
  const Div = styled.div`
    width: 70%;
    margin: auto;
    min-height: 40rem;
    display: flex;
    align-items: center;

    .background {
      color: ${({ theme }) => theme.colors.font};
      opacity: 0.2;

      .gear,
      .ninja {
        position: absolute;
      }

      .gear {
        font-size: 7rem;
        top: 26rem;
        left: 8rem;

        .gear-open {
          position: absolute;
          margin-top: 1rem;
          margin-left: -1.5rem;
          font-size: 12rem;
        }
      }

      .ninja {
        font-size: 20rem;
        top: 5rem;
        right: 19rem;
      }
    }

    h1 {
      background: ${({ theme }) => theme.colors.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      word-wrap: break-word;
      margin: auto;
      font-size: 4rem;
      font-family: "ariblk", Courier new;
    }

    .image {
      margin: auto;
      color: ${({ theme }) => theme.colors.slave};
      font-size: 6rem;
    }

    p {
      width: 80%;
      color: ${({ theme }) => theme.colors.secFont};
      text-align: center;
      font-size: 1rem;
      font-family: Courier new;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 85%;
      min-height: 50rem;

      .background {
        .gear {
          font-size: 4rem;
          top: 40rem;
          left: 1rem;

          .gear-open {
            position: absolute;
            margin-top: 1rem;
            margin-left: -1.5rem;
            font-size: 7rem;
          }
        }

        .ninja {
          font-size: 10rem;
          top: 11rem;
          right: 1rem;
        }
      }

      h1 {
        font-size: 3rem;
      }

      .image {
        font-size: 8rem;
      }
    }
  `;
  return (
    <Div>
      <center>
        <div className="background">
          <div className="gear">
            <GiHummingbird />
            <span className="gear-open">
              <GiBirdHouse />
            </span>
          </div>
          <div className="ninja">
            <GiHeron />
          </div>
        </div>
        <h1>Oops - 404</h1>
        <div className="image">
          <FaEarlybirds />
        </div>
        <p>
          We currently don't have the resource you are looking for or I think
          there is a spell mistake. If that is the case, try clicking one of the
          nav links present above.
        </p>
      </center>
    </Div>
  );
}

export default Error;
