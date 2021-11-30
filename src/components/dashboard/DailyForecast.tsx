import React from 'react';
import styled from "styled-components";

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

interface IProps {
    selectedForecast: any
}

const DailyForecast = ({selectedForecast}: IProps) => {

    const forecastIconNumberHandler = (iconNumber: number) => {
        if (iconNumber < 10) {
            return `0${iconNumber}`;
        }
        return iconNumber;
    };

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


    return (
        <ForecastWrapper>
            {displayForecast}
        </ForecastWrapper>
    );
};

export default DailyForecast;