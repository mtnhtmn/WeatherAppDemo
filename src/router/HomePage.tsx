import React from 'react';
import Header from '../container/Header';
import styled, {createGlobalStyle} from "styled-components";
import Subtract from "../svg/Subtract";
import WeatherApp from "../svg/WeatherApp";
import {Link} from "react-router-dom";
import Vector from "../svg/Vector";
import VectorMobile from '../svg/VectorMobile'
import MobileMenu from '../svg/MobileMenu';
import Dashboard from '../components/Dashboard';

const media = {
    mobile: `(max-width: 900px)`,
    desktop: `(min-width: 900px)`
}



const HeaderWrap = styled.div`
  width: 100%;
  border: 1px solid red;
  
`

const DashboardWrap = styled.div`
  width: 100%;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

`

const NavbarLink = styled.div`
  margin-left: 30px;
  float: left;
  @media ${media.mobile} {
    display: none;
  }
 
`

const WeatherAppLogoMobile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  @media ${media.desktop} {
    display: none;
  }
    
`

const WeatherAppLogoDesktop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  @media ${media.mobile} {
    display: none;
  }
`

const Navbar = styled.div`
  min-height: 60px;
  width: 100%;
  background: #48BCE2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black
`


const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;
  }
`


const HomePage = function () {

    return (
        <HeaderWrap>
            <GlobalStyle/>
            <Navbar>
                <WeatherAppLogoDesktop>
                    <Subtract/>
                    <WeatherApp/>
                </WeatherAppLogoDesktop>
                <WeatherAppLogoMobile>
                    <VectorMobile/>
                    <MobileMenu/>
                </WeatherAppLogoMobile>
                <NavbarLink>
                    <Link style={{display: "inline-block"}} to={'/home'}>
                        <Vector/>
                        Home
                    </Link>
                </NavbarLink>
                <NavbarLink>
                    <Link style={{display: "inline-block"}} to={'/favorites'}>Favorites</Link>
                </NavbarLink>
                <Header/>
            </Navbar>
            <DashboardWrap>
                <Dashboard/>
            </DashboardWrap>
        </HeaderWrap>
    );
};

export default HomePage;

