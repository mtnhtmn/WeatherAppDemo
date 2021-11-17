import React from 'react';
import Header from '../container/Header';
import {createGlobalStyle} from "styled-components";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/store";


const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;
  }
`

const HomePage = function () {
    const useStore: TypedUseSelectorHook<RootState> = useSelector
    const selectedWeatherData = useStore(store => store.weatherReducer.weatherData)
    const selectedCity = useStore(store => store.cityReducer.city)
    if (selectedWeatherData && selectedCity) {
        console.log(selectedWeatherData[0].Temperature.Metric.Value)
        console.log(selectedCity)
    }
    return (
        <div>
            <GlobalStyle/>
            <Header/>
            {selectedWeatherData && selectedCity ?  <div>
                {selectedCity.LocalizedName}
                {selectedWeatherData[0].Temperature.Metric.Value}
            </div> : null}

        </div>
    );
};

export default HomePage;

