import React from 'react';
import {useQuery} from "react-query";


const City = () => {

    const fetchCity = async () => {
        const res = await fetch('https://dataservice.accuweather.com/locations/v1/cities/search?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw&q=tel%20aviv')
        return res.json()
    }

    const {data, status} = useQuery('city', fetchCity)

    let city;
    if(status === 'success'){
        city = data[0]
    }

    return (
        <div>
            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'loading' && (
                <div>Loading data</div>
            )}
            {status === 'success' && city ? (
                <div>
                    {city.EnglishName}
                </div>
            ) : null}
        </div>
    );
};

export default City;