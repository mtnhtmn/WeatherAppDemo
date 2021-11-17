import React, {useState} from 'react';
import {useQuery} from 'react-query';
import Search from '../components/Search';
import {fetchCity, fetchWeather} from '../services/api'
import {useDispatch} from "react-redux";
import {weatherReceived} from "../store/slices/weatherSlice";
import {getCurrentCity} from "../store/slices/citySlice";
import {AppDispatch} from "../store/store";


export interface ICity {
    Key: string;
    LocalizedName: string;
    Country: {LocalizedName: string}
}

const Header = function () {
    const [inputValue, setInputValue] = useState('')
    const [selectedCity, setSelectedCity] = useState<ICity | null>(null)
    const {data:cityData, refetch:getCity} = useQuery<ICity[]>('cityData', () => fetchCity(inputValue), {enabled: false});
    const {data:cityWeatherData, refetch:getCityWeather} = useQuery('cityWeather', () => selectedCity && fetchWeather(selectedCity.Key), {enabled: false})
    const dispatch = useDispatch<AppDispatch>()
    //add dispatch to redux with useEffect if cityWeatherData is true
    //useSelector from redux on Home component to display current city weather, pass it through router


    React.useEffect(() => {
        if (inputValue) {
            getCity();
        }
    }, [inputValue]);
    React.useEffect(() => {
        if (selectedCity) {
            getCityWeather()
        }
    }, [selectedCity]);

    React.useEffect(() => {
        if (cityWeatherData && selectedCity) {
            dispatch(weatherReceived(cityWeatherData))
            dispatch(getCurrentCity(selectedCity))
        }
    }, [cityWeatherData, selectedCity])

    return (
        <div>
            <Search<ICity>
                getKey={(city)=>city.Key}
                inputValue={inputValue}
                onInputChange={setInputValue}
                data={cityData}
                onListItemClick={setSelectedCity}
                renderListItem={(city) => (
                    <div style={{
                        padding: 20, display: 'flex', alignItems: 'center', height: 20,
                    }}>
                        {city.LocalizedName}, {city.Country.LocalizedName}
                    </div>
                )}
            />
        </div>
    );
};

export default Header;
