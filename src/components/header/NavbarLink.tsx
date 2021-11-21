import React from 'react';
import styled from 'styled-components';
import {
  NavLink, useMatch, useResolvedPath,
} from 'react-router-dom';

const media = {
  mobile: '(max-width: 900px)',
  desktop: '(min-width: 900px)',
};
const NavbarLinkWrapper = styled.div<{ match:boolean }>`
  display: flex;
  height: 100%;
  border-bottom:${(props) => (props.match ? '3px solid white' : '3px solid transparent')};
  @media ${media.mobile} {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  text-decoration: none;
`;

interface IProps{
  children:React.ReactNode
  to:string
}

const NavbarLink = function ({ children, to }:IProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (

    <NavbarLinkWrapper match={!!match}>
      <StyledLink to={to}>
        {children}
      </StyledLink>
    </NavbarLinkWrapper>

  );
};

export default NavbarLink;
