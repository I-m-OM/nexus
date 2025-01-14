import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Projects from "./Pages/Projects";
// import Hireme from "./Pages/Hireme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { Hapiness, Sadness, Anger, Disgust, Fear, Shock } from "./Theme";
import { GlobalStyles } from "./GlobalCSS";
// import { IoIosPartlySunny } from "react-icons/io";
// import { IoMoon, IoSunny } from "react-icons/io5";
// import { FaCloudMoon } from "react-icons/fa";
// import { RxBorderDashed } from "react-icons/rx";
import Error from "./Pages/Error";

function App() {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState(Shock);

  const data = {
    Sadness: 0.29,
    Anger: 0.26,
    Confusion: 0.27,
    Happiness: 0.25,
  };
  const getMaxKey = (data) => {
    return Object.entries(data).reduce(
      (max, [key, value]) => {
        return value > max.value ? { key, value } : max;
      },
      { key: "", value: -Infinity }
    ).key;
  };

  useEffect(() => {
    // Find the theme key with the highest value
    const maxKey = getMaxKey(data);

    // Use a switch statement or if-else to select the correct theme based on the maxKey
    switch (maxKey) {
      case "Hapiness" || "Pride":
        setSelectedTheme(Hapiness);
        break;
      case "Sadness" || "Satifaction":
        setSelectedTheme(Sadness);
        break;
      case "Anger":
        setSelectedTheme(Anger);
        break;
      case "Disgust" || "Neutral":
        setSelectedTheme(Disgust);
        break;
      case "Fear" || "Confusion":
        setSelectedTheme(Fear);
        break;
      case "Shock" || "Desperation":
        setSelectedTheme(Shock);
        break;
      default:
        setSelectedTheme(Fear); // Default theme in case of unexpected value
        break;
    }

    // Set the selected theme
  }, [data]);
  // setSelectedTheme(maxKey.key);

  // react hook to get the theme selected by the user that is saved in local storage
  // useEffect(() => {
  //   const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
  //   if (currentTheme) {
  //     setSelectedTheme(currentTheme);
  //   }
  // }, []);

  // const HandleThemeChange = (theme) => {
  //   setSelectedTheme(theme);
  //   localStorage.setItem("current-theme", JSON.stringify(theme));
  // };

  // const ThemeContainer = styled.div`
  // width: 100%;
  // height: 2rem;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // gap: 1rem;
  // z-index: 100;
  // margin-top: 4rem;
  // overflow: hidden;
  // padding: 0;

  // span {
  //   text-align: center;
  //   color: ${({ theme }) => theme.colors.slave};
  //   width: 2rem;
  //   height: 2rem;
  //   font-size: 1.5rem;
  //   margin: 0;
  //   padding: 0;
  // }

  // .lightOne,
  // .lightTwo,
  // .darkOne,
  // .darkTwo {
  //   text-align: center;
  //   border: none;
  //   text-decoration: none;
  //   color: ${({ theme }) => theme.colors.slave};
  //   margin: 0;
  //   padding: 0;

  //   &:hover {
  //     color: ${({ theme }) => theme.colors.master};
  //   }
  // }
  // `;
  //
  //
  //
  //
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        {/* <ThemeContainer id="intro">
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
        </ThemeContainer> */}
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Hireme />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
