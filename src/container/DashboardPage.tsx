import React from "react";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import styled from "styled-components";
import {RootState} from "../store/store";
import CurrentWeather from "../components/dashboard/CurrentWeather";
import DailyForecast from "../components/dashboard/DailyForecast";
import ForecastWidget from "../components/dashboard/ForecastWidget";
import HourlyForecast from "../components/dashboard/Carousel";
import SetUpLocationIcon from '../svg/SetUpLocationIcon.svg?component'


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 93px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 250px;
  padding-left: 250px;
  height: calc(100% - 93px);
  overflow: auto;
  overflow-x: hidden;
`;

const WeatherWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 300px;
`;

const SetUpLocationIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -330px;
`


const DashboardPage = function () {

    const useStore: TypedUseSelectorHook<RootState> = useSelector;
    const selectedWeatherData = useStore((store) => store.weatherReducer.weatherData);
    const selectedCity = useStore((store) => store.cityReducer.cityData);
    const selectedForecast = useStore((store) => store.forecastReducer.forecastsData);
    const selectedHourlyForecast = useStore((store) => store.hourlyForecastReducer.hourlyForecastData);

    return (
        <Container>
            <WeatherWrap>
                {selectedWeatherData && selectedCity && selectedForecast ? (
                    <WeatherWrap>
                        <CurrentWeather selectedCity={selectedCity} selectedWeatherData={selectedWeatherData}/>
                        <DailyForecast selectedForecast={selectedForecast}/>
                        <HourlyForecast selectedHourlyForecast={selectedHourlyForecast}/>
                        <ForecastWidget selectedForecast={selectedForecast}/>
                    </WeatherWrap>
                ) : <SetUpLocationIconContainer>
                    <SetUpLocationIcon/>
                </SetUpLocationIconContainer>}
            </WeatherWrap>
        </Container>
    );
};

export default DashboardPage;
