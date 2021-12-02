import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState } from "../store/store";
import { toggleMobileMenu } from "../store/slices/uiSlice";

const Blurred = styled.div<{isMenuOpen:boolean}>`
  position: absolute;
  backdrop-filter: ${({isMenuOpen}) => isMenuOpen? 'blur(30px)' : 'unset' } ; 
  height: 100%;
  width: 100%;
  background: rgba(140, 140, 140, 0.2);
  z-index: ${({isMenuOpen}) => isMenuOpen? 2000 : -1 } ;
  transition: all 0.5s ease-in;
  
`


const MenuBlur = function() {
  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const isMenuOpen = useStore((state) => state.uiReducer.isMenuOpen);
  const dispatch = useDispatch<AppDispatch>();


  return (
     <Blurred isMenuOpen={isMenuOpen} onClick={() => dispatch(toggleMobileMenu())}/>
  );
}

export default MenuBlur;