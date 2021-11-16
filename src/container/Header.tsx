import React, {useState} from 'react';
import {useQuery} from 'react-query';
import Search from '../components/Search';
import {fetchCity, fetchWeather} from '../services/api'

const Header = function () {
    const [inputValue, setInputValue] = useState('')
    const [cityWeather, setCityWeather] = useState('')
    const {data:cityData, refetch:getCity} = useQuery('cityData', () => fetchCity(inputValue), {enabled: false});
    const {data:cityWeatherData, refetch:getCityWeather} = useQuery('cityWeather', () => fetchWeather(cityWeather), {enabled: false})

    const handleSelectedCityWeather = (item:any) => {
        setCityWeather(item)
        getCityWeather()

    }


    React.useEffect(() => {
        if (inputValue) {
            getCity();
        }
    }, [inputValue]);

    return (
        <div>
            <Search<{Key:string,LocalizedName:string, Country: {LocalizedName: string}}>
                inputValue={inputValue}
                onInputChange={setInputValue}
                data={cityData}
                onListItemClick={(item)=>handleSelectedCityWeather(item)}
                renderListItem={(item) => (
                    <div style={{
                        padding: 20, display: 'flex', alignItems: 'center', height: 20,
                    }}>
                        {item.LocalizedName}, {item.Country.LocalizedName}
                    </div>
                )}
            />
        </div>
    );
};

export default Header;
