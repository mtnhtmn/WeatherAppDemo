import React from 'react';
import styled from "styled-components";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import SunIcon from "../../svg/SunIcon.svg?component"
import ForecastChart from "./ForecastChart";
import { RootState } from "../../store/store";


const ForecastChartWrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  margin-top: 145px;
  height: 500px;
  color: white;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }

`;

const ForecastWidgetItemDay = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }
`;

const DailyForecastWidgetItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
`;


interface IProps {
    selectedForecast: any
}

const ForecastWidget = function({selectedForecast} : IProps) {



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
        <div>
            <ForecastChartWrapper>
                <DailyForecastWidgetItemWrapper>
                    {displayForecastWidget}
                </DailyForecastWidgetItemWrapper>
                <ForecastChart selectedForecast={selectedForecast}/>
            </ForecastChartWrapper>
        </div>

    );
}

export default ForecastWidget;