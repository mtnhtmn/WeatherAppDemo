import React from "react";
import styled from "styled-components";
import {useDispatch } from "react-redux";
import { toggleMobileMenu } from '../../store/slices/uiSlice'
import MobileMenu from "../../svg/MobileMenu.svg?component";
import StarIcon from '../../svg/StarIcon.svg?component'
import { AppDispatch } from "../../store/store";


const HeaderMobileContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 31px;
  padding-left: 31px;
  @media ${({ theme }) => theme.media.desktop} {
    display: none;
  }

`;

const HeaderMobile = function() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <HeaderMobileContainer>
      <StarIcon />
      <div onClick={() => dispatch(toggleMobileMenu())}>
        <MobileMenu  />
      </div>
    </HeaderMobileContainer>
  );
}

export default HeaderMobile;