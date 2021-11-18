import React from 'react';
import styled from 'styled-components'

const IconStyle = styled.div`
  float: left;
  
`

const MobileMenu = () => {
    return (
        <IconStyle>
            <svg width="34" height="56" viewBox="0 0 34 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.25 16.3335H29.75" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M4.25 28H29.75" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M4.25 39.6665H29.75" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>

        </IconStyle>

    );
};

export default MobileMenu;