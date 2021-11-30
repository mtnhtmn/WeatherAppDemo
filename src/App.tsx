import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import styled, { createGlobalStyle, DefaultTheme , ThemeProvider } from "styled-components";
import { store } from "./store/store";
import FavoritePage from "./router/FavoritePage";
import Header from "./components/header/Header";
import DashboardPage from "./container/DashboardPage";
import Footer from "./components/Footer";
import MapPage from "./router/MapPage";


const queryClient = new QueryClient();

const lightTheme: DefaultTheme = {
  background: "linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;",
  navbar:{
    background:"#48BCE2"
  },
  scrollbar: {
    background: '#1A2B55'
  },
  fontFamily: "Overpass,serif;"
};
const darkTheme: DefaultTheme = {
  background: "linear-gradient(189.57deg, #191634 0%, #1E437C 133.7%), #FFFFFF;",
  navbar:{
    background:"#1A2B55"
  },
  scrollbar: {
    background: '#48BCE2'
  },
  fontFamily: "Overpass, serif"
};

const GlobalStyle = createGlobalStyle`
  body {
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

  :
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;



const App = function() {

  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <Container>
            <GlobalStyle />
            <Header isLightTheme={isLightTheme}  setIsLightTheme={setIsLightTheme} />
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="favorites" element={<FavoritePage />} />
                <Route path="map" element={<MapPage />} />
              </Routes>
            <Footer />
          </Container>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
