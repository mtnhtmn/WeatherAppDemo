import React, { useState } from "react";
import { useQuery } from "react-query";
import styled, { useTheme } from "styled-components";

import useGeolocation from "react-hook-geolocation";
import { useDispatch } from "react-redux";
import {
  fetchCity, fetchForecast, fetchGeoLocation, fetchHourlyForecast, fetchWeather
} from "../../services/api";
import { IWeatherData, weatherReceived } from "../../store/slices/weatherSlice";
import { getCurrentCity, ICity } from "../../store/slices/citySlice";
import { forecastReceived, IForecast } from "../../store/slices/forecastSlice";

import { hourlyForecastReceived } from "../../store/slices/hourlyForecast";
import HeaderMobile from "./HeaderMobile";
import { AppDispatch } from "../../store/store";
import HeaderDesktop from "./HeaderDesktop";


const HeaderWrap = styled.div`
  width: 100%;
  position: fixed;
`;



const Navbar = styled.div`
  height: ${({ theme }) => theme.navbar.height.desktop};
  background: ${({ theme }) => theme.background};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.media.mobile} {
    height: ${({ theme }) => theme.navbar.height.mobile};
    box-shadow: unset;
    background: transparent;
  }

`;

const Header = function() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
  const geolocation = useGeolocation();

  const {
    data: cityData,
    refetch: getCity
  } = useQuery<ICity[]>("cityData", () => fetchCity(searchValue), { enabled: false });
  const {
    data: cityWeatherData,
    refetch: getCityWeather
  } = useQuery<any, any, IWeatherData[]>("cityWeather", () => selectedCity && fetchWeather(selectedCity.Key), { enabled: false });
  const {
    data: cityForecastData,
    refetch: getForecast
  } = useQuery<any, any, { DailyForecasts: IForecast[] }>("cityForecast", () => selectedCity && fetchForecast(selectedCity.Key), { enabled: false });
  const {
    data: cityHourlyForecastData,
    refetch: getHourlyForecast
  } = useQuery("cityHourlyForecast", () => selectedCity && fetchHourlyForecast(selectedCity.Key), { enabled: false });
  const {
    data: geolocationData,
    refetch: getGeolocation
  } = useQuery("geolocation", () => fetchGeoLocation(geolocation.latitude, geolocation.longitude), { enabled: false });

  console.log(geolocation);
  console.log(geolocationData);





  React.useEffect(() => {
    if (geolocation.longitude &&geolocation.latitude ) {
      getGeolocation();
      setSelectedCity(geolocationData);
    }
  }, [getGeolocation, geolocation.longitude, setSelectedCity, geolocationData, geolocation.latitude, geolocation]);

  React.useEffect(() => {
    if (searchValue) {
      getCity();
    }
  }, [getCity, searchValue]);
  React.useEffect(() => {
    if (selectedCity) {
      getCityWeather();
      getForecast();
      getHourlyForecast();
    }
  }, [getCityWeather, getForecast, getHourlyForecast, selectedCity]);
  React.useEffect(() => {
    if (cityWeatherData && selectedCity && cityForecastData && cityHourlyForecastData) {

      dispatch(weatherReceived(cityWeatherData[0]));
      dispatch(getCurrentCity(selectedCity));
      dispatch(forecastReceived(cityForecastData.DailyForecasts));
      dispatch(hourlyForecastReceived(cityHourlyForecastData));
    }
  }, [cityWeatherData, selectedCity, cityForecastData, cityHourlyForecastData, dispatch]);

  return (
    <HeaderWrap>
      <Navbar>
        <HeaderMobile/>
        <HeaderDesktop
          cityData={cityData}
          setSelectedCity={setSelectedCity}
          searchValue={searchValue}
          setSearchValue={setSearchValue}/>
      </Navbar>
    </HeaderWrap>

  );
};

export default Header;

