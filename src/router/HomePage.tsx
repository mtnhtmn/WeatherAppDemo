import React from 'react';
import Header from '../container/Header';

const HomePage = function () {
  return (
    <div>
      <Header />
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
