import React from "react";
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
  @media ${({ theme }) => theme.media.mobile} {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    height: 280px;
  }
`;


const DailyForecastItemWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px 0 30px;
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;

  }



`;

const ForecastItemDayDesktop = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }


`;

const ForecastItemPhrase = styled.span`
  font-weight: normal;
  font-size: 15px;
  @media ${({ theme }) => theme.media.mobile} {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    padding-left: 5px;
  }
`;

const ForecastIcon = styled.img`
  width: 35px;
  height: 25px;

`;

const ForecastItemDataDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const ForecastItemDayMobile = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }

`;

const ForecastItemDataMobile = styled.span`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

const ForecastItemMinTemperature = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 61px;
  @media ${({ theme }) => theme.media.mobile} {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
  }
`;

const ForecastItemMaxTemperature = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;
  @media ${({ theme }) => theme.media.mobile} {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
  }

`;

interface IProps {
  selectedForecast: any;
}

const DailyForecast = function({ selectedForecast }: IProps) {

  const forecastIconNumberHandler = (iconNumber: number) => {
    if (iconNumber < 10) {
      return `0${iconNumber}`;
    }
    return iconNumber;
  };

  const displayForecast = selectedForecast.map((forecast: any, index: number) => (
    <DailyForecastItemWrapper key={index}>
      <ForecastItemDayDesktop>
        {new Date(forecast.Date).toLocaleDateString("en-GB", {
          weekday: "short"
        })}
        -
        <ForecastItemPhrase>
          {forecast.Day.IconPhrase}
        </ForecastItemPhrase>
      </ForecastItemDayDesktop>
      <ForecastItemDataDesktop>
                <span>
                    <ForecastIcon
                      src={`https://developer.accuweather.com/sites/default/files/${forecastIconNumberHandler(forecast.Day.Icon)}-s.png`}
                      alt="Icon" />
                </span>
        <ForecastItemMinTemperature>
          {forecast.Temperature.Minimum.Value}
        </ForecastItemMinTemperature>
        -
        <ForecastItemMaxTemperature>
          {forecast.Temperature.Maximum.Value}
        </ForecastItemMaxTemperature>
      </ForecastItemDataDesktop>
      <ForecastItemDayMobile>
          <span>
                    <ForecastIcon
                      src={`https://developer.accuweather.com/sites/default/files/${forecastIconNumberHandler(forecast.Day.Icon)}-s.png`}
                      alt="Icon" />
                </span>
        {new Date(forecast.Date).toLocaleDateString("en-GB", {
          weekday: "short"
        })}
         -
        <ForecastItemPhrase>
          {forecast.Day.IconPhrase}
        </ForecastItemPhrase>
      </ForecastItemDayMobile>
      <ForecastItemDataMobile>
        <ForecastItemMinTemperature>
          {forecast.Temperature.Minimum.Value}
        </ForecastItemMinTemperature>
        -
        <ForecastItemMaxTemperature>
          {forecast.Temperature.Maximum.Value}
        </ForecastItemMaxTemperature>
      </ForecastItemDataMobile>
    </DailyForecastItemWrapper>
  ));


  return (
    <ForecastWrapper>
      {displayForecast}
    </ForecastWrapper>
  );
};

export default DailyForecast;