import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.header`
  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.font};
  position: fixed;
  top: 0;
  z-index: 1;

  ul {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  .nav-link {
    display: inline-block;
    font-size: 0.7rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.master};
    letter-spacing: 0.15rem;
    font-weight: 700;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.slave};
    }
  }
`;

function Header() {
  return (
    <NavHeader>
      <ul className="nav-list">
        <li>
          <NavLink className="nav-link" to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/projects">
            projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">
            hire me
          </NavLink>
        </li>
      </ul>
    </NavHeader>
  );
}

export default Header;
