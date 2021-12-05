import React from "react";
import styled from "styled-components";
import {useDispatch } from "react-redux";
import { openForecastWidget } from '../../store/slices/uiSlice'
import { AppDispatch } from "../../store/store";


const HeaderMobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }

`;


const ForecastWidgetButton = styled.button`
  font-family: Overpass,serif;
  border: 1px solid #FAFAFA;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 60px;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`

const ForecastWidgetMobile = function() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <HeaderMobileContainer>
      <div onClick={() => dispatch(openForecastWidget())}>
        <ForecastWidgetButton>
          5 Days Forecast
        </ForecastWidgetButton>
      </div>
    </HeaderMobileContainer>
  );
}

export default ForecastWidgetMobile;