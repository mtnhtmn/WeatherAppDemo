import React, { useState} from 'react';


import {useQuery} from "react-query";
import AutoComplete from '../components/AutoComplete';
import City from '../components/City';

const Header = () => {

    const [inputValue, setInputValue] = useState('')

    const fetchCity = async (inputValue:string) => {
        if(inputValue){
            const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw&q=${inputValue}`)
            return res.json()
        }
        throw new Error('no inputValue')
    }

    const {data, refetch} = useQuery('city', ()=>fetchCity(inputValue),{ enabled: false })

    React.useEffect(()=>{
        if(inputValue){
            refetch()
        }
    },[inputValue])

    return (
        <div>
            <City/>
            <AutoComplete
                inputValue={inputValue}
                onInputChange={setInputValue}
                data={data}
                renderListItem={(city)=>{
                    return (
                        <div style={{padding: 20, display: 'flex', alignItems: 'center', height: 50}}>
                            {city.LocalizedName}
                        </div>
                    )
                }}
            />
        </div>
    );
};

export default Header;