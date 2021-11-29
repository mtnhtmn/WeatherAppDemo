import React, {FunctionComponent} from 'react';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import styled from 'styled-components';
import {RootState} from '../store/store';
import CurrentWeather from "../components/dashboard/CurrentWeather";
import SunIcon from "../svg/SunIcon.svg?component"
import {LineChart, Line} from 'recharts';
import {LabelList} from "recharts/src/component/LabelList";
import ForecastChart from "../components/dashboard/ForecastChart";

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

`

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
`

const ForecastItemMaxTemperature = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;

`

const HourlyForecastWrapper = styled.div`
  margin-top: 100px;
  height: 181px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;


`;

const HourlyForecastItemWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }


`;

const HourlyForecastItemDay = styled.div`

`;

const HourlyForecastItemTemperature = styled.div`

`;

const HourlyForecastIcon = styled.img`

`

const ForecastChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  margin-top: 145px;
  height: 402px;
  color: white;

`

const DailyForecastWidgetItemWrapper = styled.div`

`

const ForecastWidgetItemDay = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;

  }
  
`



const DashboardPage = function () {

    const useStore: TypedUseSelectorHook<RootState> = useSelector;
    const selectedWeatherData = useStore((store) => store.weatherReducer.weatherData);
    const selectedCity = useStore((store) => store.cityReducer.cityData);
    const selectedForecast = useStore((store) => store.forecastReducer.forecastsData);
    const selectedHourlyForecast = useStore((store) => store.hourlyForecastReducer.hourlyForecastData);

    console.log(selectedForecast)


    const forecastIconNumberHandler = (iconNumber: number) => {
        if (iconNumber < 10) {
            return `0${iconNumber}`
        }
        return iconNumber
    }


    const displayForecast = selectedForecast.map((forecast: any, index: number) => (
        <DailyForecastItemWrapper key={index}>
            <ForecastItemDay>
                {new Date(forecast.Date).toLocaleDateString('en-GB', {
                    weekday: 'short',
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
        <DailyForecastWidgetItemWrapper key={index}>
            <ForecastWidgetItemDay>
                <div>
                    {new Date(forecast.Date).toLocaleDateString('en-GB', {
                        weekday: 'short',
                    })}
                </div>
                <div>
                    {new Date(forecast.Date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'numeric',
                    })}
                </div>
                <SunIcon/>
            </ForecastWidgetItemDay>
        </DailyForecastWidgetItemWrapper>

    ))



    const displayHourlyForecast = selectedHourlyForecast.map((hourlyForecast: any, index: number) => (
        <HourlyForecastItemWrapper key={index}>
            <HourlyForecastItemDay>
                {new Date(hourlyForecast.DateTime).getHours()}
                :
                {new Date(hourlyForecast.DateTime).getMinutes()}
                {new Date(hourlyForecast.DateTime).getMinutes()}
            </HourlyForecastItemDay>
            <HourlyForecastItemTemperature>
                {hourlyForecast.Temperature.Value}
            </HourlyForecastItemTemperature>
            <HourlyForecastIcon
                src={`https://developer.accuweather.com/sites/default/files/${forecastIconNumberHandler(hourlyForecast.WeatherIcon)}-s.png`}
                alt="Icon"
            />
        </HourlyForecastItemWrapper>

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
                        <HourlyForecastWrapper>
                            {displayHourlyForecast}
                        </HourlyForecastWrapper>
                        <ForecastChartWrapper>
                            {displayForecastWidget}
                            <ForecastChart selectedForecast={selectedForecast}/>
                        </ForecastChartWrapper>

                    </WeatherWrap>
                ) : null}
            </WeatherWrap>
        </Container>
    );
};

export default DashboardPage;
