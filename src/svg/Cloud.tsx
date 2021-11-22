import React from 'react';
import styled from 'styled-components';

const CloudWrap = styled.div`
  height: 100px;
  margin-left: -55px;

`


const Cloud = () => {
    return (
        <CloudWrap>
            <svg width="170" height="149" viewBox="0 0 170 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="71.6163" cy="47.757" r="13.6628" fill="url(#paint0_radial_791_3143)"/>
                <g opacity="0.67" filter="url(#filter0_f_791_3143)">
                    <path d="M100.562 49.5946C109.712 57.8528 131.186 66.6095 122.928 75.7599C114.669 84.9102 67.468 111.049 47.8147 100.946C38.6643 92.6874 56.0126 66.0974 64.2708 56.947C72.5289 47.7967 91.4116 41.3365 100.562 49.5946Z" fill="url(#paint1_linear_791_3143)" fillOpacity="0.3"/>
                </g>
                <g filter="url(#filter1_ii_791_3143)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M76.6421 85.2568H68.4349C59.492 85.2568 52.2424 78.0072 52.2424 69.0643C52.2424 60.1215 59.492 52.8718 68.4349 52.8718H69.3222C72.4612 52.8718 75.4024 53.7186 77.9298 55.1962C81.2155 45.4625 90.4211 38.4541 101.264 38.4541H102.484C115.408 38.4541 125.885 48.9313 125.885 61.8556C125.885 74.7798 115.408 85.257 102.484 85.257H76.6421V85.2568Z" fill="white"/>
                </g>
                <defs>
                    <filter id="filter0_f_791_3143" x="0.219543" y="0.793945" width="169.562" height="147.437" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="22.5" result="effect1_foregroundBlur_791_3143"/>
                    </filter>
                    <filter id="filter1_ii_791_3143" x="34.2424" y="23.4541" width="99.6426" height="72.8027" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="8" dy="-15"/>
                        <feGaussianBlur stdDeviation="15"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_791_3143"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-18" dy="11"/>
                        <feGaussianBlur stdDeviation="15"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_innerShadow_791_3143" result="effect2_innerShadow_791_3143"/>
                    </filter>
                    <radialGradient id="paint0_radial_791_3143" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(77.0525 40.3096) rotate(132.136) scale(28.4677)">
                        <stop stopColor="#FFF72C"/>
                        <stop offset="1" stopColor="#DF7800"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear_791_3143" x1="57.5324" y1="104.992" x2="110.683" y2="45.3427" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#254659"/>
                        <stop offset="1" stopColor="#023553"/>
                    </linearGradient>
                </defs>
            </svg>

        </CloudWrap>
    );
};

export default Cloud;