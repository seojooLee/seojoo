import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Routes from "./router";

const theme = {
  white: "#fff !default",
  black: "#000 !default",
  grayBackground: "#DFDFDF",
  gray100: "#f1f3fa",
  gray200: "#eef2f7",
  gray300: "#dee2e6 !default",
  gray400: "#ced4da !default",
  gray500: "#adb5bd !default",
  gray600: "#98a6ad",
  gray700: "#6c757d",
  gray800: "#343a40 !default",
  gray900: "#313a46",
  blue: "#2c8ef8",
  indigo: "#727cf5",
  purple: "#6b5eae",
  pink: "#ff679b",
  red: "#fa5c7c",
  orange: "#fd7e14",
  yellow: "#ffbc00",
  green: "#0acf97",
  teal: "#02a8b5",
  cyan: "#39afd1",
  bodyBg: "#f4f5f6",
};

const GlobalStyle = createGlobalStyle`
  @charset "utf-8";

 
  @font-face {
  font-family: 'NanumSquare';
  font-weight: 400;
  src: url(${require("../assets/fonts/NanumSquareR.eot")});
  src: url(${require("../assets/fonts/NanumSquareR.woff")}) format('woff'),
        url(${require("../assets/fonts/NanumSquareR.ttf")}) format('truetype');
  }
  @font-face {
  font-family: 'NanumSquare';
  font-weight: 700;
  src: url(${require("../assets/fonts/NanumSquareB.eot")});
  src: url(${require("../assets/fonts/NanumSquareB.woff")}) format('woff'),
        url(${require("../assets/fonts/NanumSquareB.ttf")}) format('truetype');
  }
  @font-face {
  font-family: 'NanumSquare';
  font-weight: 800;
  src: url(${require("../assets/fonts/NanumSquareEB.eot")});
  src: url(${require("../assets/fonts/NanumSquareEB.woff")}) format('woff'),
        url(${require("../assets/fonts/NanumSquareEB.ttf")}) format('truetype');
  }
  @font-face {
  font-family: 'NanumSquare';
  font-weight: 300;
  src: url(${require("../assets/fonts/NanumSquareL.eot")});
  src: url(${require("../assets/fonts/NanumSquareL.woff")}) format('woff'),
        url(${require("../assets/fonts/NanumSquareL.ttf")}) format('truetype');
  }
  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding:0px;
    margin: 0px;
  }
  body {
    padding:0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif !important;
    box-sizing: border-box;
    background-color: white ;
    #root {
      width: 100%;
      height: 100%;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button, input, textarea {
    font: inherit;
  }
  * {
    box-sizing: inherit;
  }
 
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
