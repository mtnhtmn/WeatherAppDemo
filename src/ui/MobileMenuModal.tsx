import React, { useState } from "react";
import styled from "styled-components";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ReactSwitch from "react-switch";
import { FiSun, IoMoonOutline, WiCelsius, WiFahrenheit } from "react-icons/all";
import MobileMenuArrow from "../svg/MobileMenuArrow.svg?component";
import LogoutMobileIcon from "../svg/LogoutMobileIcon.svg?component";
import { AppDispatch, RootState } from "../store/store";
import { toggleLightTheme, closeMobileMenu } from "../store/slices/uiSlice";


const MenuModalContainer = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  width: 100%;
  height: 416px;
  bottom: 0;
  z-index: 2001;
  padding: 30px;

  background: #FCFCFC;
  box-shadow: 0px -7px 30px rgba(0, 0, 0, 0.16);
  border-radius: 30px 30px 0px 0px;
  transform: ${({ isMenuOpen }) => isMenuOpen ? "translateY(0)" : "translateY(416px)"};
  transition: transform 0.5s ease-in-out;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChangeModeWrapper = styled.div`
  margin-top: 41px;
  display: flex;
  justify-content: space-between;
`;

const ChangeModeText = styled.div`
  font-family: Overpass;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;

`;

const ReactSwitchStyle = styled(ReactSwitch)`
  display: flex;
  align-items: center;
  border: 1px solid #444E72;
`;


const LogoutLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 120px;
  justify-content: center;
`;

const LogoutButton = styled.button`
  border: none;
  border-bottom: 2px solid #444E72;
  color: #444E72;
  text-decoration: none;
  line-height: 17px;
  background: none;
  font-size: 20px;
  font-family: Overpass, serif;
  margin-right: 30px;
`;


const MobileMenuModal = function() {

  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const isMenuOpen = useStore((state) => state.uiReducer.isMenuOpen);
  const isLightTheme = useStore((state) => state.uiReducer.isLightTheme);
  const [degreeChecked, setDegreeChecked] = useState(false);

  const dispatch = useDispatch<AppDispatch>();


  const handleDarkLightSwitch = () => {
    dispatch(toggleLightTheme());
  };

  const handleDegreeChecked = () => {
    setDegreeChecked(!degreeChecked);
  };

  return (
    <MenuModalContainer isMenuOpen={isMenuOpen}>
      <Header>
        <h2>Menu</h2>
        <div onClick={() => dispatch(closeMobileMenu())}>
          <MobileMenuArrow />
        </div>
      </Header>
      <ChangeModeWrapper>
        <ChangeModeText>
          Change mode
        </ChangeModeText>
        <ReactSwitchStyle
          onHandleColor="#838BAA"
          offHandleColor="#838BAA"
          uncheckedIcon={<IoMoonOutline size={25} />}
          checkedIcon={<FiSun size={20} />}
          checked={isLightTheme}
          onChange={handleDarkLightSwitch}
          onColor="#FFFFFF"
          offColor="#444E72"
        />
      </ChangeModeWrapper>
      <ChangeModeWrapper>
        <ChangeModeText>
          Change degree
        </ChangeModeText>
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
      </ChangeModeWrapper>
      <LogoutLinkWrapper>
        <LogoutMobileIcon />
        <LogoutButton>
          Log out
        </LogoutButton>
      </LogoutLinkWrapper>
    </MenuModalContainer>
  );
};

export default MobileMenuModal;