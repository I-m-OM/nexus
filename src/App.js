import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Hireme from "./Pages/Hireme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { lightOne, lightTwo, darkOne, darkTwo } from "./Theme";
import { GlobalStyles } from "./GlobalCSS";
import { IoIosPartlySunny } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa";
import { RxBorderDashed } from "react-icons/rx";

function App() {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState(lightOne);

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  const ThemeContainer = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 100;
    margin-top: 4rem;
    overflow: hidden;
    padding: 0;

    span {
      text-align: center;
      color: ${({ theme }) => theme.colors.slave};
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }

    .lightOne,
    .lightTwo,
    .darkOne,
    .darkTwo {
      text-align: center;
      border: none;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.slave};
      margin: 0;
      padding: 0;

      &:hover {
        color: ${({ theme }) => theme.colors.master};
      }
    }
  `;
  //
  //
  //
  //
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <ThemeContainer id="intro">
          <button
            className="lightOne"
            onClick={() => HandleThemeChange(lightOne)}
          >
            <IoIosPartlySunny />
          </button>
          <span>
            <RxBorderDashed />
          </span>
          <button
            className="lightTwo"
            onClick={() => HandleThemeChange(lightTwo)}
          >
            <IoSunny />
          </button>
          <span>
            <RxBorderDashed />
          </span>
          <button
            className="darkOne"
            onClick={() => HandleThemeChange(darkOne)}
          >
            <FaCloudMoon />
          </button>
          <span>
            <RxBorderDashed />
          </span>
          <button
            className="darkTwo"
            onClick={() => HandleThemeChange(darkTwo)}
          >
            <IoMoon />
          </button>
        </ThemeContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Hireme />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
