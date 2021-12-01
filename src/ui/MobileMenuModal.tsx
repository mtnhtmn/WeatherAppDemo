import React from "react";
import styled from "styled-components";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import MobileMenuArrow from '../svg/MobileMenuArrow.svg?component'
import { AppDispatch, RootState } from "../store/store";
import { toggleMobileMenu } from "../store/slices/uiSlice";



const MenuModalContainer = styled.div<{isMenuOpen : boolean}>`
  position: absolute;
  width: 100%;
  height: 416px;
  bottom: 0;
  z-index: 2001;
  padding: 30px;

  background: #FCFCFC;
  box-shadow: 0px -7px 30px rgba(0, 0, 0, 0.16);
  border-radius: 30px 30px 0px 0px;
  transform: ${({isMenuOpen}) => isMenuOpen? 'translateY(0)' : 'translateY(416px)' } ;
  transition: transform 0.5s ease-in-out;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


const MobileMenuModal = function() {

  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const isMenuOpen = useStore((state) => state.uiReducer.isMenuOpen);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <MenuModalContainer isMenuOpen={isMenuOpen}>
      <Header>
        <h2>Menu</h2>
        <div onClick={() => dispatch(toggleMobileMenu())}>
          <MobileMenuArrow/>
        </div>
      </Header>
    </MenuModalContainer>
  );
}

export default MobileMenuModal;