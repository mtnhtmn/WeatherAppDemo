import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import styled, {createGlobalStyle} from 'styled-components';
import {store} from './store/store';
import FavoritePage from './router/FavoritePage';
import Header from './components/header/Header';
import DashboardPage from './container/DashboardPage';
import Footer from './components/Footer';
import MapPage from "./router/MapPage";
import {ThemeProvider} from "styled-components";

const queryClient = new QueryClient();

const lightTheme = {
    body: 'linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;',
    margin: 0,
    fontFamily: 'Overpass,serif;'
}

const darkTheme = {
    body: 'linear-gradient(189.57deg, #191634 0%, #1E437C 133.7%), #FFFFFF;',
    margin: 0,
    fontFamily: 'Overpass, serif'
}


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body}
    margin: 0;
    font-family: Overpass, serif;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    height: 100vh;
  }

  p {
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RouteWrap = styled.div`
  flex: 1;
`;

const App = function () {

    const [theme, setTheme] = useState('light')

    const themeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <Container>
                        <GlobalStyle/>
                        <Header/>
                        <RouteWrap>
                            <Routes>
                                <Route path="/" element={<DashboardPage/>}/>
                                <Route path="favorites" element={<FavoritePage/>}/>
                                <Route path="map" element={<MapPage/>}/>
                            </Routes>
                        </RouteWrap>
                        <Footer/>
                    </Container>
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    );
};

export default App;
