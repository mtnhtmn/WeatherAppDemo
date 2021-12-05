import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../store/store";
import { closeForecastWidget, closeMobileMenu } from "../store/slices/uiSlice";

const Blurred = styled.div<{showBlur:boolean}>`
  position: absolute;
  backdrop-filter: ${({showBlur}) => showBlur? 'blur(30px)' : 'unset' } ; 
  height: 100%;
  width: 100%;
  background: rgba(140, 140, 140, 0.2);
  z-index: ${({showBlur}) => showBlur? 2000 : -1 } ;
  transition: all 0.5s ease-in;
  
`


const Blur = function() {
  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const isMenuOpen = useStore((state) => state.uiReducer.isMenuOpen);
  const isForecastWidgetOpen = useStore((state) => state.uiReducer.isForecastWidgetOpen);
  const showBlur = isMenuOpen || isForecastWidgetOpen
  const dispatch = useDispatch<AppDispatch>();


  return (
    <Blurred showBlur={showBlur} onClick={() => {
      if (isMenuOpen) {
        dispatch(closeMobileMenu())
      } if (isForecastWidgetOpen) {
        dispatch(closeForecastWidget())
      }
    }}/>
  );
}

export default Blur;