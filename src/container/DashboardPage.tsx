import React, {FunctionComponent} from "react";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import styled from "styled-components";
import {RootState} from "../store/store";
import CurrentWeather from "../components/dashboard/CurrentWeather";
import SunIcon from "../svg/SunIcon.svg?component";
import ForecastChart from "../components/dashboard/ForecastChart";
import HourlyForecastCarousel from "../components/dashboard/Carousel";


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


const ForecastWrapper = styled.div`
  height: 181px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 100px;
`;

const DailyForecastItemWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px 0 30px;


`;

const ForecastItemDay = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;


`;

const ForecastItemPhrase = styled.span`
  font-weight: normal;
  font-size: 15px;
`;

const ForecastIcon = styled.img`
  width: 35px;
  height: 25px;

`;

const ForecastItemData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;

const ForecastItemMinTemperature = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 61px;
`;

const ForecastItemMaxTemperature = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;

`;


const ForecastChartWrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  margin-top: 145px;
  height: 500px;
  color: white;

`;

const DailyForecastWidgetItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

const ForecastWidgetItemDay = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }

`;


const DashboardPage = function () {

    const forecastIconNumberHandler = (iconNumber: number) => {
        if (iconNumber < 10) {
            return `0${iconNumber}`;
        }
        return iconNumber;
    };

    const useStore: TypedUseSelectorHook<RootState> = useSelector;
    const selectedWeatherData = useStore((store) => store.weatherReducer.weatherData);
    const selectedCity = useStore((store) => store.cityReducer.cityData);
    const selectedForecast = useStore((store) => store.forecastReducer.forecastsData);
    const selectedHourlyForecast = useStore((store) => store.hourlyForecastReducer.hourlyForecastData);

    console.log(selectedForecast);


    const displayForecast = selectedForecast.map((forecast: any, index: number) => (
        <DailyForecastItemWrapper key={index}>
            <ForecastItemDay>
                {new Date(forecast.Date).toLocaleDateString("en-GB", {
                    weekday: "short"
                })}
                -
                <ForecastItemPhrase>
                    {forecast.Day.IconPhrase}
                </ForecastItemPhrase>
            </ForecastItemDay>
            <ForecastItemData>
                <span>
                    <ForecastIcon
                        src={`https://developer.accuweather.com/sites/default/files/${forecastIconNumberHandler(forecast.Day.Icon)}-s.png`}
                        alt="Icon"/>
                </span>
                <ForecastItemMinTemperature>
                    {forecast.Temperature.Minimum.Value}
                </ForecastItemMinTemperature>
                -
                <ForecastItemMaxTemperature>
                    {forecast.Temperature.Maximum.Value}
                </ForecastItemMaxTemperature>
            </ForecastItemData>
        </DailyForecastItemWrapper>
    ));

    const displayForecastWidget = selectedForecast.map((forecast: any, index: number) => (

        <ForecastWidgetItemDay key={index}>
            <div>
                {new Date(forecast.Date).toLocaleDateString("en-GB", {
                    weekday: "short"
                })}
            </div>
            <div>
                {new Date(forecast.Date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric"
                })}
            </div>
            <SunIcon/>
        </ForecastWidgetItemDay>

    ));


    return (
        <Container>
            <WeatherWrap>
                {selectedWeatherData && selectedCity && selectedForecast ? (
                    <WeatherWrap>
                        <CurrentWeather selectedCity={selectedCity} selectedWeatherData={selectedWeatherData}/>
                        <ForecastWrapper>
                            {displayForecast}
                        </ForecastWrapper>
                        <HourlyForecastCarousel selectedHourlyForecast={selectedHourlyForecast}/>
                        <ForecastChartWrapper>
                            <DailyForecastWidgetItemWrapper>
                                {displayForecastWidget}
                            </DailyForecastWidgetItemWrapper>
                            <ForecastChart selectedForecast={selectedForecast}/>
                        </ForecastChartWrapper>
                    </WeatherWrap>
                ) : null}
            </WeatherWrap>
        </Container>
    );
};

export default DashboardPage;
