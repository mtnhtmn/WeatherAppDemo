import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import MenuBlur from "./ui/MenuBlur";
import { store } from "./store/store";
import FavoritePage from "./router/FavoritePage";
import Header from "./components/header/Header";
import DashboardPage from "./container/DashboardPage";
import Footer from "./components/Footer";
import MapPage from "./router/MapPage";
import WeatherTheme from "./ui/WeatherTheme";
import MobileMenuModal from "./ui/MobileMenuModal";
import ForecastWidgetModal from "./ui/ForecastWidgetModal";
import ForecastBlur from "./ui/ForecastBlur";
import Blur from "./ui/Blur";


const queryClient = new QueryClient();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;


const App = function() {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WeatherTheme>
          <Blur/>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="favorites" element={<FavoritePage />} />
              <Route path="map" element={<MapPage />} />
            </Routes>
            <Footer />
            <MobileMenuModal/>
            <ForecastWidgetModal/>
          </Container>
        </WeatherTheme>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
