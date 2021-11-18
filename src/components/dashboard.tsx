import React from 'react';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/store";

const Dashboard = () => {
    const useStore: TypedUseSelectorHook<RootState> = useSelector
    const selectedWeatherData = useStore(store => store.weatherReducer.weatherData)
    const selectedCity = useStore(store => store.cityReducer.city)
    if (selectedWeatherData && selectedCity) {
        console.log(selectedWeatherData[0].Temperature.Metric.Value)
        console.log(selectedCity)
    }
    return (
        <div>
            {selectedWeatherData && selectedCity ?  <div>
                {selectedCity.LocalizedName}
                {selectedWeatherData[0].Temperature.Metric.Value}
            </div> : null}

        </div>
    );
};

export default Dashboard;