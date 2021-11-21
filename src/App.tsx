import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled, { createGlobalStyle } from 'styled-components';
import { store } from './store/store';
import FavoritePage from './router/FavoritePage';
import Header from './components/header/Header';
import DashboardPage from './container/DashboardPage';
import Footer from './components/Footer';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;
    margin: 0;
    font-family: Overpass;
  }
  *{
    box-sizing: border-box;
  }
  
  #root {
    display: flex;
    height: 100vh;
  }
  p{
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
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Container>
          <GlobalStyle />
          <Header />
          <RouteWrap>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="favorite" element={<FavoritePage />} />
            </Routes>
          </RouteWrap>
          <Footer />
        </Container>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
