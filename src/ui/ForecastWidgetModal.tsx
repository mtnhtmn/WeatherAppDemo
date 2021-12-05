import React from "react";
import styled from "styled-components";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import MobileMenuArrow from '../svg/MobileMenuArrow.svg?component'
import { closeForecastWidget } from "../store/slices/uiSlice";



const MenuModalContainer = styled.div<{isForecastWidgetOpen : boolean}>`
  position: absolute;
  width: 100%;
  height: 512px;
  bottom: 0;
  z-index: 2001;
  padding: 30px;

  background: #FCFCFC;
  box-shadow: 0px -7px 30px rgba(0, 0, 0, 0.16);
  border-radius: 30px 30px 0px 0px;
  transform: ${({isForecastWidgetOpen}) => isForecastWidgetOpen? 'translateY(0)' : 'translateY(512px)' } ;
  transition: transform 0.5s ease-in-out;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const ForecastWidgetModal = function() {

  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const isForecastWidgetOpen = useStore((state) => state.uiReducer.isForecastWidgetOpen);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <MenuModalContainer isForecastWidgetOpen={isForecastWidgetOpen}>
      <Header>
        <h2>
          5-days forecast
        </h2>
        <div onClick={() => dispatch(closeForecastWidget())}>
          <MobileMenuArrow/>
        </div>
      </Header>
    </MenuModalContainer>
  );
}

export default ForecastWidgetModal;