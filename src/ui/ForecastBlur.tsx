import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../store/store";
import { toggleForecastWidget } from "../store/slices/uiSlice";

const Blurred = styled.div<{isForecastWidgetOpen:boolean}>`
  position: absolute;
  backdrop-filter: ${({isForecastWidgetOpen}) => isForecastWidgetOpen? 'blur(30px)' : 'unset' } ; 
  height: 100%;
  width: 100%;
  background: rgba(140, 140, 140, 0.2);
  z-index: ${({isForecastWidgetOpen}) => isForecastWidgetOpen? 2000 : -1 } ;
  transition: all 0.5s ease-in;
  
`


const Blur = function() {
  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const isForecastWidgetOpen = useStore((state) => state.uiReducer.isForecastWidgetOpen);
  const dispatch = useDispatch<AppDispatch>();


  return (
     <Blurred isForecastWidgetOpen={isForecastWidgetOpen} onClick={() => dispatch(toggleForecastWidget())}/>
  );
}

export default Blur;