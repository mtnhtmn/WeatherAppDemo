import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/store';
import Cloud from '../svg/Cloud';
import Dots from '../svg/Dots';

const Container = styled.div`
  width: 100%;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 250px;
  padding-left: 250px;
`;

const WeatherWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  width: 100%;
`;

const CityName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 34px;
  color: #FFFFFF;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const Temperature = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 135px;
  border: 2px solid deeppink;

`;

const TemperatureNumber = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 73px;
  color: #FFFFFF;
  height: 120px;


`;

const WeatherText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 37px;
  color: #FFFFFF;
  opacity: 0.6;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);

`;

const CurrentDate = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #FFFFFF;
  opacity: 0.6;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const ForecastWrapper = styled.div`
  height: 181px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;

const DailyForecastItemWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;

`;

const ForecastItemDay = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;


`;

const ForecastItemPhrase = styled.span`
  font-weight: normal;
  margin-left: 5px;
`;

const ForecastItemTemperature = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const HourlyForecastWrapper = styled.div`
  margin-top: 100px;
  height: 181px;
  border: 1px solid #FFFFFF;
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
  margin-left: 20px;
  margin-right: 20px;

`;

const HourlyForecastItemTemperature = styled.div`
  
`;

const DashboardPage = function () {
  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const selectedWeatherData = useStore((store) => store.weatherReducer.weatherData);
  const selectedCity = useStore((store) => store.cityReducer.city);
  const selectedForecast = useStore((store) => store.forecastReducer.forecastData);
  const selectedHourlyForecast = useStore((store) => store.hourlyForecastReducer.hourlyForecastData);
  if (selectedWeatherData && selectedCity && selectedForecast) {
    console.log(selectedWeatherData[0]);
    console.log(selectedCity);
    console.log(selectedForecast);
    console.log(selectedHourlyForecast);
  }

  const date = React.useMemo(() => {
    if (selectedWeatherData) {
      return new Date(selectedWeatherData[0]?.LocalObservationDateTime).toDateString();
    }
    return null;
  }, [selectedWeatherData]);

  //
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
      <ForecastItemTemperature>
        {forecast.Temperature.Minimum.Value}
      </ForecastItemTemperature>
    </DailyForecastItemWrapper>
  ));

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
    </HourlyForecastItemWrapper>

  ));

  return (
    <Container>
      <WeatherWrap>
        {selectedWeatherData && selectedCity && selectedForecast ? (
          <WeatherWrap>
            <CityName>
              {selectedCity.LocalizedName}
            </CityName>
            <Dots />
            <Temperature>
              <Cloud />
              <TemperatureNumber>
                {selectedWeatherData[0].Temperature.Metric.Value}
              </TemperatureNumber>
            </Temperature>
            <WeatherText>
              {selectedWeatherData[0].WeatherText}
            </WeatherText>
            <CurrentDate>
              {date}
            </CurrentDate>
            <ForecastWrapper>
              {displayForecast}
            </ForecastWrapper>
            <HourlyForecastWrapper>
              {displayHourlyForecast}
            </HourlyForecastWrapper>
          </WeatherWrap>
        ) : null}

      </WeatherWrap>
    </Container>
  );
};

export default DashboardPage;
