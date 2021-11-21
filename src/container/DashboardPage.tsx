import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '../store/store';
import Cloud from '../svg/Cloud';
import Dots from '../svg/Dots';

const DashboardWrap = styled.div`
  width: 100%;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

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
  font-family: Overpass;
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
  font-family: Overpass;
  font-style: normal;
  font-weight: normal;
  font-size: 73px;
  color: #FFFFFF;
  height: 120px;
  

`;

const WeatherText = styled.div`
  font-family: Overpass;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 37px;
  color: #FFFFFF;
  opacity: 0.6;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  
`;

const CurrentDate = styled.div`
  font-family: Overpass;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #FFFFFF;
  opacity: 0.6;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const DashboardPage = function () {
  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const selectedWeatherData = useStore((store) => store.weatherReducer.weatherData);
  const selectedCity = useStore((store) => store.cityReducer.city);
  const selectedForecast = useStore((store) => store.forecastReducer.forecastData);
  if (selectedWeatherData && selectedCity && selectedForecast) {
    console.log(selectedWeatherData[0]);
    console.log(selectedCity);
    console.log(selectedForecast);
  }
  //
  const displayForecast = selectedForecast.map((forecast: any) => (
    <div>
      {forecast.Temperature.Minimum.Value}
    </div>
  ));

  const date = React.useMemo(() => {
    if (selectedWeatherData) {
      return new Date(selectedWeatherData[0]?.LocalObservationDateTime).toDateString();
    }
    return null;
  }, [selectedWeatherData]);

  return (
    <DashboardWrap>

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
            {displayForecast}
          </WeatherWrap>
        ) : null}

      </WeatherWrap>
    </DashboardWrap>
  );
};

export default DashboardPage;
