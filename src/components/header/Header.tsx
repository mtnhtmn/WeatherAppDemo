import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import Search from '../Search';
import {
    fetchCity, fetchForecast, fetchHourlyForecast, fetchWeather,
} from '../../services/api';
import {weatherReceived} from '../../store/slices/weatherSlice';
import {getCurrentCity, ICity} from '../../store/slices/citySlice';
import {forecastReceived} from '../../store/slices/forecastSlice';
import {AppDispatch} from '../../store/store';
import Subtract from '../../svg/Subtract';
import MobileMenu from '../../svg/MobileMenu';
import StarIcon from '../../svg/StarIcon.svg?component';
import HomeIcon from '../../svg/HomeIcon.svg?component';
import MapIcon from '../../svg/MapIcon.svg?component';
import LogoutIcon from '../../svg/LogoutIcon.svg?component';
import NavbarLink from './NavbarLink';
import {hourlyForecastReceived} from '../../store/slices/hourlyForecast';
import {NavLink} from "react-router-dom";
import ReactSwitch from "react-switch";
import {RiCelsiusLine, WiFahrenheit, FiSun, IoMoonOutline} from "react-icons/all";

interface IProps {
    isLightTheme: boolean
    setIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  margin-right: 158px;
`;
const WeatherAppLogoDesktop = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-left: 31px;
  @media ${media.mobile} {
    display: none;
  }
`;

const Navbar = styled.div<{ isLightTheme?: boolean }>`
  height: 93px;
  background: ${({isLightTheme})=> isLightTheme?  '#48BCE2' : '#314314'};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  //border: 1px solid black

`;

const MapLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 122px;
  margin-right: 54px;
  @media ${media.mobile} {
    display: none;
  }


`

const MapLink = styled(NavLink)`
  border-bottom: 2px solid white;
  color: white;
  text-decoration: none;
  line-height: 13px;
  @media ${media.mobile} {
    display: none;
  }
`
const LogoutButton = styled.button`
  border: none;
  border-bottom: 2px solid white;
  color: white;
  text-decoration: none;
  line-height: 17px;
  background: none;
  font-size: 20px;
  @media ${media.mobile} {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

`

const ReactSwitchStyle = styled(ReactSwitch)`
  border: 1px solid #444E72;
  margin-right: 30px;
  @media ${media.mobile} {
    display: none;
  }
`


const Header = function ({isLightTheme, setIsLightTheme}: IProps) {
    const [degreeChecked, setDegreeChecked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
    const {
        data: cityData,
        refetch: getCity,
    } = useQuery<ICity[]>('cityData', () => fetchCity(inputValue), {enabled: false});
    const {
        data: cityWeatherData,
        refetch: getCityWeather,
    } = useQuery('cityWeather', () => selectedCity && fetchWeather(selectedCity.Key), {enabled: false});
    const {
        data: cityForecastData,
        refetch: getForecast,
    } = useQuery('cityForecast', () => selectedCity && fetchForecast(selectedCity.Key), {enabled: false});
    const {
        data: cityHourlyForecastData,
        refetch: getHourlyForecast,
    } = useQuery('cityHourlyForecast', () => selectedCity && fetchHourlyForecast(selectedCity.Key), {enabled: false});

    const dispatch = useDispatch<AppDispatch>();

    const handleDegreeChecked = () => {
        setDegreeChecked(!degreeChecked)
    }

    const handleDarkModeChecked = () => {
        setIsLightTheme((prevState) => !prevState)
    }


    React.useEffect(() => {
        if (inputValue) {
            getCity();
        }
    }, [getCity, inputValue]);
    React.useEffect(() => {
        if (selectedCity) {
            getCityWeather();
            getForecast();
            getHourlyForecast();
        }
    }, [getCityWeather, getForecast, selectedCity]);
    React.useEffect(() => {
        if (cityWeatherData && selectedCity && cityForecastData && cityHourlyForecastData) {
            dispatch(weatherReceived(cityWeatherData));
            dispatch(getCurrentCity(selectedCity));
            dispatch(forecastReceived(cityForecastData.DailyForecasts));
            dispatch(hourlyForecastReceived(cityHourlyForecastData));
        }
    }, [cityWeatherData, selectedCity, cityForecastData, cityHourlyForecastData, dispatch]);

    return (
        <HeaderWrap>
            <Navbar>
                <WeatherAppLogoWrapper>
                    <WeatherAppLogoDesktop>
                        <Subtract/>
                        WeatherApp
                    </WeatherAppLogoDesktop>
                </WeatherAppLogoWrapper>
                <WeatherAppLogoMobile>
                    <StarIcon/>
                    <MobileMenu/>
                </WeatherAppLogoMobile>
                <NavbarLink to="/">
                    <HomeIcon/>
                    Home
                </NavbarLink>
                <NavbarLink to="/favorites">
                    <StarIcon/>
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
                                <span style={{color: 'grey', display: 'inline-block'}}>
                                    {city.Country.LocalizedName}
                                </span>

                            </div>
                        )}
                    />
                </div>
                <MapLinkWrapper>
                    <MapIcon/>
                    <MapLink to={'/map'}>
                        Switch to map
                    </MapLink>
                </MapLinkWrapper>
                <ReactSwitchStyle
                    onHandleColor='#838BAA'
                    offHandleColor='#838BAA'
                    uncheckedIcon={<RiCelsiusLine size={20}/>}
                    checkedIcon={<WiFahrenheit size={33}/>}
                    checked={degreeChecked}
                    onChange={handleDegreeChecked}
                    onColor='#FFFFFF'
                    offColor='#FFFFFF'
                />
                <ReactSwitchStyle
                    onHandleColor='#838BAA'
                    offHandleColor='#838BAA'
                    uncheckedIcon={<IoMoonOutline size={25}/>}
                    checkedIcon={<FiSun size={20}/>}
                    checked={isLightTheme}
                    onChange={handleDarkModeChecked}
                    onColor='#FFFFFF'
                    offColor='#FFFFFF'
                />
                <MapLinkWrapper>
                    <LogoutIcon/>
                    <LogoutButton>
                        Log out
                    </LogoutButton>
                </MapLinkWrapper>
            </Navbar>
        </HeaderWrap>

    );
};

export default Header;
