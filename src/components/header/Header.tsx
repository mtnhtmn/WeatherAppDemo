import React, {useState} from "react";
import {useQuery} from "react-query";
import {useDispatch} from "react-redux";
import styled, {useTheme} from "styled-components";
import {NavLink} from "react-router-dom";
import ReactSwitch from "react-switch";
import {
    WiCelsius, WiFahrenheit, FiSun, IoMoonOutline
} from "react-icons/all";
import Search from "../Search";
import {
    fetchCity, fetchForecast, fetchGeoLocation, fetchHourlyForecast, fetchWeather
} from "../../services/api";
import {IWeatherData, weatherReceived} from "../../store/slices/weatherSlice";
import {getCurrentCity, ICity} from "../../store/slices/citySlice";
import {forecastReceived, IForecast} from "../../store/slices/forecastSlice";
import {AppDispatch} from "../../store/store";
import Subtract from "../../svg/Subtract";
import MobileMenu from "../../svg/MobileMenu";
import StarIcon from "../../svg/StarIcon.svg?component";
import HomeIcon from "../../svg/HomeIcon.svg?component";
import MapIcon from "../../svg/MapIcon.svg?component";
import LogoutIcon from "../../svg/LogoutIcon.svg?component";
import NavbarLink from "./NavbarLink";
import {hourlyForecastReceived} from "../../store/slices/hourlyForecast";
import useGeolocation from "react-hook-geolocation";


const media = {
    mobile: "(max-width: 900px)",
    desktop: "(min-width: 900px)"
};

const HeaderWrap = styled.div`
  width: 100%;
  position: fixed;
`;

const WeatherAppLogoMobile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  @media ${media.desktop} {
    display: none;
  }

`;
const WeatherAppLogoWrapper = styled.div`
  display: flex;
  width: 250px;
  padding: 31px;
  min-width: 250px;
  @media ${media.mobile} {
    display: none;
  }

`;

const WeatherAppLogoDesktop = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 5px;

`;

const Navbar = styled.div<{ background?: string }>`
  height: 93px;
  background: ${({background}) => background};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  //border: 1px solid black

`;

const NavbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 100%;
  @media ${media.mobile} {
    display: none;
  }


`

const MapLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media ${media.mobile} {
    display: none;
  }


`;

const MapLink = styled(NavLink)`
  border-bottom: 2px solid white;
  color: white;
  text-decoration: none;
  line-height: 13px;

`;
const LogoutButton = styled.button`
  border: none;
  border-bottom: 2px solid white;
  color: white;
  text-decoration: none;
  line-height: 17px;
  background: none;
  font-size: 20px;
  font-family: Overpass, serif;
  margin-right: 30px;


  &:hover {
    cursor: pointer;
  }

`;

const SwitchWrapper = styled.div`
  display: flex;
  gap: 30px;



`

const ReactSwitchStyle = styled(ReactSwitch)`
  display: flex;
  align-items: center;
  border: 1px solid #444E72;
  @media ${media.mobile} {
    display: none !important;
  }
`;

const NavbarLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 29px;



`;

interface IProps {
    setIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
    isLightTheme: boolean;
}

const Header = function ({isLightTheme, setIsLightTheme}: IProps) {
    const [degreeChecked, setDegreeChecked] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
    const theme = useTheme();
    const geolocation = useGeolocation()

    const {
        data: cityData,
        refetch: getCity
    } = useQuery<ICity[]>("cityData", () => fetchCity(inputValue), {enabled: false});
    const {
        data: cityWeatherData,
        refetch: getCityWeather
    } = useQuery<any, any, IWeatherData[]>("cityWeather", () => selectedCity && fetchWeather(selectedCity.Key), {enabled: false});
    const {
        data: cityForecastData,
        refetch: getForecast
    } = useQuery<any, any, { DailyForecasts: IForecast[] }>("cityForecast", () => selectedCity && fetchForecast(selectedCity.Key), {enabled: false});
    const {
        data: cityHourlyForecastData,
        refetch: getHourlyForecast
    } = useQuery("cityHourlyForecast", () => selectedCity && fetchHourlyForecast(selectedCity.Key), {enabled: false});
    const {
        data: geolocationData,
        refetch: getGeolocation
    } = useQuery("geolocation", () => fetchGeoLocation(geolocation.latitude, geolocation.longitude), {enabled: false});

    console.log(geolocationData)


    const dispatch = useDispatch<AppDispatch>();

    const handleDegreeChecked = () => {
        setDegreeChecked(!degreeChecked);
    };

    const handleDarkLightSwitch = () => {
        setIsLightTheme((prevState) => !prevState);
    };


    React.useEffect(() => {
        if (geolocation.latitude && geolocation.longitude) {
            getGeolocation()
            setSelectedCity(geolocationData)
        }
    }, [getGeolocation, geolocation.longitude, geolocation.longitude, setSelectedCity, geolocationData])

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
            <Navbar background={theme.navbar.background}>
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
                <NavbarItems>
                    <NavbarLinksWrapper>
                        <NavbarLink to="/">
                            <HomeIcon/>
                            Home
                        </NavbarLink>
                        <NavbarLink to="/favorites">
                            <StarIcon/>
                            Favorites
                        </NavbarLink>
                    </NavbarLinksWrapper>
                    <div>
                        <Search<ICity>
                            getKey={(city) => city.Key}
                            inputValue={inputValue}
                            onInputChange={setInputValue}
                            data={cityData}
                            onListItemClick={setSelectedCity}
                            renderListItem={(city) => (
                                <div style={{
                                    padding: 20, display: "flex", alignItems: "center", height: 20
                                }}
                                >
                                    {city.LocalizedName}
                                    ,
                                    <span style={{color: "grey", display: "inline-block"}}>
                  {city.Country.LocalizedName}
                </span>

                                </div>
                            )}
                        />
                    </div>
                    <MapLinkWrapper>
                        <MapIcon/>
                        <MapLink to="/map">
                            Switch to map
                        </MapLink>
                    </MapLinkWrapper>
                    <SwitchWrapper>
                        <ReactSwitchStyle
                            onHandleColor="#838BAA"
                            offHandleColor="#838BAA"
                            uncheckedIcon={<WiCelsius size={33}/>}
                            checkedIcon={<WiFahrenheit size={33}/>}
                            checked={degreeChecked}
                            onChange={handleDegreeChecked}
                            onColor="#FFFFFF"
                            offColor="#FFFFFF"
                        />
                        <ReactSwitchStyle
                            onHandleColor="#838BAA"
                            offHandleColor="#838BAA"
                            uncheckedIcon={<IoMoonOutline size={25}/>}
                            checkedIcon={<FiSun size={20}/>}
                            checked={isLightTheme}
                            onChange={handleDarkLightSwitch}
                            onColor="#FFFFFF"
                            offColor="#FFFFFF"
                        />
                    </SwitchWrapper>

                    <MapLinkWrapper>
                        <LogoutIcon/>
                        <LogoutButton>
                            Log out
                        </LogoutButton>
                    </MapLinkWrapper>
                </NavbarItems>
            </Navbar>
        </HeaderWrap>

    );
};

export default Header;

