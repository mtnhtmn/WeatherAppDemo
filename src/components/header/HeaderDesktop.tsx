import React, { useState } from "react";
import styled from "styled-components";
import { FiSun, IoMoonOutline, WiCelsius, WiFahrenheit } from "react-icons/all";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactSwitch from "react-switch";
import Subtract from "../../svg/Subtract";
import NavbarLink from "./NavbarLink";
import Search from "../Search";
import { ICity } from "../../store/slices/citySlice";
import { toggleLightTheme } from "../../store/slices/uiSlice";
import { AppDispatch, RootState } from "../../store/store";
import HomeIcon from "../../svg/HomeIcon.svg?component";
import MapIcon from "../../svg/MapIcon.svg?component";
import LogoutIcon from "../../svg/LogoutIcon.svg?component";
import StarIcon from '../../svg/StarIcon.svg?component'


const WeatherAppLogoWrapper = styled.div`
  display: flex;
  width: 250px;
  padding-left: 10px;
  min-width: 250px;
  @media ${({ theme }) => theme.media.mobile} {
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


const NavbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 100%;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }


`;

const MapLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media ${({ theme }) => theme.media.mobile} {
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



`;

const ReactSwitchStyle = styled(ReactSwitch)`
  display: flex;
  align-items: center;
  border: 1px solid #444E72;
  @media ${({ theme }) => theme.media.mobile} {
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
  searchValue: string
  setSearchValue: (searchValue: string) => void
  setSelectedCity: (selectedCity : ICity) => void
  cityData:ICity[] | undefined
}

const HeaderDesktop = function({cityData,searchValue, setSearchValue,setSelectedCity} : IProps) {
  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch<AppDispatch>();
  const [degreeChecked, setDegreeChecked] = useState(false);
  const isLightTheme = useStore((state) => state.uiReducer.isLightTheme);


  const handleDegreeChecked = () => {
    setDegreeChecked(!degreeChecked);
  };

  const handleDarkLightSwitch = () => {
    dispatch(toggleLightTheme());
  };

  return (
    <>

      <WeatherAppLogoWrapper>
        <WeatherAppLogoDesktop>
          <Subtract />
          WeatherApp
        </WeatherAppLogoDesktop>
      </WeatherAppLogoWrapper>
      <NavbarItems>
        <NavbarLinksWrapper>
          <NavbarLink to="/">
            <HomeIcon />
            Home
          </NavbarLink>
          <NavbarLink to="/favorites">
            <StarIcon />
            Favorites
          </NavbarLink>
        </NavbarLinksWrapper>
        <Search<ICity>
          getKey={(city) => city.Key}
          inputValue={searchValue}
          onInputChange={setSearchValue}
          data={cityData}
          onListItemClick={setSelectedCity}
          renderListItem={(city) => (
            <div style={{
              padding: 20, display: "flex", alignItems: "center", height: 20
            }}>
              {city.LocalizedName}
              ,
              <span style={{ color: "grey", display: "inline-block" }}>
                                  {city.Country.LocalizedName}
                                 </span>
            </div>)} />
        <MapLinkWrapper>
          <MapIcon />
          <MapLink to="/map">
            Switch to map
          </MapLink>
        </MapLinkWrapper>
        <SwitchWrapper>
          <ReactSwitchStyle
            onHandleColor="#838BAA"
            offHandleColor="#838BAA"
            uncheckedIcon={<WiCelsius size={33} />}
            checkedIcon={<WiFahrenheit size={33} />}
            checked={degreeChecked}
            onChange={handleDegreeChecked}
            onColor="#FFFFFF"
            offColor="#FFFFFF"
          />
          <ReactSwitchStyle
            onHandleColor="#838BAA"
            offHandleColor="#838BAA"
            uncheckedIcon={<IoMoonOutline size={25} />}
            checkedIcon={<FiSun size={20} />}
            checked={isLightTheme}
            onChange={handleDarkLightSwitch}
            onColor="#FFFFFF"
            offColor="#FFFFFF"
          />
        </SwitchWrapper>

        <MapLinkWrapper>
          <LogoutIcon />
          <LogoutButton>
            Log out
          </LogoutButton>
        </MapLinkWrapper>
      </NavbarItems>
    </>

  );
};

export default HeaderDesktop;