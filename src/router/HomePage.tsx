import React from 'react';
import Header from '../container/Header';
import styled, {createGlobalStyle} from "styled-components";
import Dashboard from "../components/dashboard";
import Subtract from "../svg/Subtract";
import WeatherApp from "../svg/WeatherApp";
import {Link} from "react-router-dom";
import Vector from "../svg/Vector";

const NavbarLink = styled.div`
  margin-left: 30px;
  float: left;
`


const WeatherAppLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`

const Navbar = styled.div`
  min-height: 60px;
  width: 100%;
  background: #48BCE2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
`


const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;
  }
`

const HomePage = function () {

    return (
        <div>
            <GlobalStyle/>
            <Navbar>
                <WeatherAppLogo>
                    <Subtract/>
                    <WeatherApp/>
                </WeatherAppLogo>
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
            <Dashboard/>
        </div>
    );
};

export default HomePage;

