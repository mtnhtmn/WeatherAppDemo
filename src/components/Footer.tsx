import React from 'react';
import styled from 'styled-components';
import StarIcon from '../svg/StarIcon.svg?component';
import SearchIcon from '../svg/SearchIcon.svg?component';
import HomeIcon from '../svg/HomeIcon.svg?component';

const FooterWrap = styled.div`
  width: 100%;
  height: 80px;
  border: 2px solid pink;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px 20px 0px 0px;
  align-items: center;
  display: flex;
`;

const FooterIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #FFFFFF;
  flex:1

`;

const FooterIconDivider = styled.div`
  border: 1px solid #FFFFFF;
  height: 46px;
`;

const Footer = function () {
  return (
    <FooterWrap>
      <FooterIconWrap>
        <StarIcon />
        <p>Favorites</p>
      </FooterIconWrap>
      <FooterIconDivider />
      <FooterIconWrap>
        <SearchIcon />
        <p>Search</p>
      </FooterIconWrap>
      <FooterIconDivider />
      <FooterIconWrap>
        <HomeIcon />
        <p>Home</p>
      </FooterIconWrap>
    </FooterWrap>
  );
};

export default Footer;
