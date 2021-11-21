import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../Search';
import { fetchCity, fetchForecast, fetchWeather } from '../../services/api';
import { weatherReceived } from '../../store/slices/weatherSlice';
import { getCurrentCity, ICity } from '../../store/slices/citySlice';
import { forecastReceived } from '../../store/slices/ForecastSlice';
import { AppDispatch } from '../../store/store';
import Subtract from '../../svg/Subtract';
import WeatherApp from '../../svg/WeatherApp';
import MobileMenu from '../../svg/MobileMenu';
import StarIcon from '../../svg/StarIcon.svg?component';
import HomeIcon from '../../svg/HomeIcon.svg?component';
import NavbarLink from './NavbarLink';

const media = {
  mobile: '(max-width: 900px)',
  desktop: '(min-width: 900px)',
};

const HeaderWrap = styled.div`
  width: 100%;
`;

const WeatherAppLogoMobile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  @media ${media.desktop} {
    display: none;
  }

`;
const WeatherAppLogoWrapper = styled.div`
  display: flex;
  flex:1
`;
const WeatherAppLogoDesktop = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  @media ${media.mobile} {
    display: none;
  }
`;

const Navbar = styled.div`
  height: 93px;
  width: 100%;
  background: #48BCE2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  //border: 1px solid black
`;

const Header = function () {
  const [inputValue, setInputValue] = useState('');
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
  const {
    data: cityData,
    refetch: getCity,
  } = useQuery<ICity[]>('cityData', () => fetchCity(inputValue), { enabled: false });
  const {
    data: cityWeatherData,
    refetch: getCityWeather,
  } = useQuery('cityWeather', () => selectedCity && fetchWeather(selectedCity.Key), { enabled: false });
  const {
    data: cityForecastData,
    refetch: getForecast,
  } = useQuery('cityForecast', () => selectedCity && fetchForecast(selectedCity.Key), { enabled: false });
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    if (inputValue) {
      getCity();
    }
  }, [getCity, inputValue]);
  React.useEffect(() => {
    if (selectedCity) {
      getCityWeather();
      getForecast();
    }
  }, [getCityWeather, getForecast, selectedCity]);
  React.useEffect(() => {
    if (cityWeatherData && selectedCity && cityForecastData) {
      dispatch(weatherReceived(cityWeatherData));
      dispatch(getCurrentCity(selectedCity));
      dispatch(forecastReceived(cityForecastData.DailyForecasts));
    }
  }, [cityWeatherData, selectedCity, cityForecastData, dispatch]);

  return (
    <HeaderWrap>
      <Navbar>
        <WeatherAppLogoWrapper>
          <WeatherAppLogoDesktop>
            <Subtract />
            WeatherApp
          </WeatherAppLogoDesktop>
        </WeatherAppLogoWrapper>
        <WeatherAppLogoMobile>
          <StarIcon />
          <MobileMenu />
        </WeatherAppLogoMobile>
        <NavbarLink to="/home">
          <HomeIcon />
          Home
        </NavbarLink>
        <NavbarLink to="/favorites">
          <StarIcon />
          Favorites
        </NavbarLink>
        <div>
          <Search<ICity>
            getKey={(city) => city.Key}
            inputValue={inputValue}
            onInputChange={setInputValue}
            data={cityData}
            onListItemClick={setSelectedCity}
            renderListItem={(city) => (
              <div style={{
                padding: 20, display: 'flex', alignItems: 'center', height: 20,
              }}
              >
                {city.LocalizedName}
                ,
                {city.Country.LocalizedName}
              </div>
            )}
          />
        </div>
      </Navbar>
    </HeaderWrap>

  );
};

export default Header;
