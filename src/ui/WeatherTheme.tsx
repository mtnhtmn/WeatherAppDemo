import React from "react";
import { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

const lightTheme: DefaultTheme = {
  background: "linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;",
  navbar: {
    background: "#48BCE2",
    height: {
      desktop: '93px',
      mobile: '60px',
    },
  },
  scrollbar: {
    background: "#1A2B55"
  },
  fontFamily: "Overpass,serif;",
  media: {
    mobile: "(max-width: 900px)",
    desktop: "(min-width: 900px)",
  }
};
const darkTheme: DefaultTheme = {
  background: "linear-gradient(189.57deg, #191634 0%, #1E437C 133.7%), #FFFFFF;",
  navbar: {
    background: "#1A2B55",
    height: {
      desktop: '93px',
      mobile: '60px',
    }
  },
  scrollbar: {
    background: "#48BCE2"
  },
  fontFamily: "Overpass, serif",
  media: {
    mobile: "(max-width: 900px)",
    desktop: "(min-width: 900px)",
  },

};


const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    background: ${({ theme }) => theme.background}
    font-family: Overpass, serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  #root {
    display: flex;
    height: 100vh;
  }

  p {
    margin: 0;
  }
  h2{
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 46px;
    color:#444E72
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background}
    border-radius: 10px;
  }
`;

interface IProps {
  children: React.ReactElement[];
}

const WeatherTheme = function({ children }: IProps) {
  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const isLightTheme = useStore((state) => state.uiReducer.isLightTheme);

  return (

    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default WeatherTheme;