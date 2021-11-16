import React from 'react';
import Header from '../container/Header';
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(194.59deg, #47BFDF 47.43%, #4A91FF 133.36%), #FFFFFF;
  }

`

const HomePage = function () {
    return (
        <div>
            <GlobalStyle/>
            <Header/>
        </div>
    );
};

export default HomePage;

//
// const citiesList = data.map((city:any,index:number) => {
//     return (
//         <>
//             <div style={{padding: 20, display: 'flex', alignItems: 'center', height: 50}} key={city.Key}>
//                 {city.LocalizedName}
//             </div>
//             {index < data.length - 1 && <hr style={{margin: 0}}/>}
//         </>
//     )
// })
