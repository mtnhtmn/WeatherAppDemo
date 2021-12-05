import React, { useState } from "react";
import { WiCelsius, WiFahrenheit } from "react-icons/all";
import styled from "styled-components";
import ReactSwitch from "react-switch";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setWeatherUnit } from "../store/slices/uiSlice";
import { AppDispatch, RootState } from "../store/store";

const ReactSwitchStyle = styled(ReactSwitch)`
  display: flex;
  align-items: center;
  border: 1px solid #444E72;
`;


const WeatherUnitToggle = function() {

  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch<AppDispatch>();
  const weatherUnit = useStore((state) => state.uiReducer.weatherUnit);




  return (
    <ReactSwitchStyle
      onHandleColor="#838BAA"
      offHandleColor="#838BAA"
      uncheckedIcon={<WiCelsius size={33} />}
      checkedIcon={<WiFahrenheit size={33} />}
      checked={weatherUnit === 'Imperial'}
      onChange={(checked) => {
        if (checked) {
          dispatch(setWeatherUnit('Imperial'))
        } else {
          dispatch(setWeatherUnit('Metric'))
        }
      }}
      onColor="#FFFFFF"
      offColor="#FFFFFF"
    />
  );
}

export default WeatherUnitToggle;