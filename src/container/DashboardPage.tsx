import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";
import CurrentWeather from "../components/dashboard/CurrentWeather";
import DailyForecast from "../components/dashboard/DailyForecast";
import ForecastWidget from "../components/dashboard/ForecastWidget";
import HourlyForecast from "../components/dashboard/Carousel";
import SetUpLocationIcon from "../svg/SetUpLocationIcon.svg?component";
import ForecastWidgetMobile from "../components/dashboard/ForecastWidgetMobile";


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.navbar.height.desktop};
  margin-right: auto;
  margin-left: auto;
  padding-right: 250px;
  padding-left: 250px;
  height: ${({ theme }) => `calc(100% - ${theme.navbar.height.desktop})`};
  overflow-y: auto;
  overflow-x: hidden;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: ${({ theme }) => theme.navbar.height.mobile};
    height: ${({ theme }) => `calc(100% - ${theme.navbar.height.mobile})`};
  }

`;

const WeatherWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SetUpLocationIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;


const DashboardPage = function() {

  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const selectedWeatherData = useStore((store) => store.weatherReducer.weatherData);
  const selectedCity = useStore((store) => store.cityReducer.cityData);
  const selectedForecast = useStore((store) => store.forecastReducer.forecastsData);
  const selectedHourlyForecast = useStore((store) => store.hourlyForecastReducer.hourlyForecastData);

  return (
    <Container>
      <WeatherWrap>
        {selectedWeatherData && selectedCity && selectedForecast ? (
          <>
            <CurrentWeather selectedCity={selectedCity} selectedWeatherData={selectedWeatherData} />
            <DailyForecast selectedForecast={selectedForecast} />
            <ForecastWidgetMobile />
            <HourlyForecast selectedHourlyForecast={selectedHourlyForecast} />
            <ForecastWidget selectedForecast={selectedForecast} />
          </>
        ) : <SetUpLocationIconContainer>
          <SetUpLocationIcon />
        </SetUpLocationIconContainer>}
      </WeatherWrap>
    </Container>
  );
};

export default DashboardPage;
