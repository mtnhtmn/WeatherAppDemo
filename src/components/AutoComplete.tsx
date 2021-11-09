import React, {useRef, useState} from 'react';
import {useQuery} from "react-query";


const AutoComplete = () => {

    const [inputValue, setInputValue] = useState('')
    const [open, setOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const result = [{name: 'moshe'}, {name: 'moshe'}, {name: 'moshe'}, {name: 'moshe'}]

    const fetchCity = async (inputValue:string) => {
        if(inputValue){
            const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw&q=${inputValue}`)
            return res.json()
        }
        throw new Error('no inputValue')
    }

    const {data, refetch ,status} = useQuery('city', ()=>fetchCity(inputValue),{ enabled: false })

    React.useEffect(()=>{
        if(inputValue){
            refetch()
        }
    },[inputValue])

    console.log(data);

    return (
        <div style={{position:'relative'}}>

            <input style={{height:30}} value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
            }} ref={inputRef} onBlur={() => {
                setOpen(false)
            }} onFocus={() => {
                setOpen(true)
            }} type="text"/>
            {open ? <div  style={{
                position:'absolute',
                display: 'flex',
                overflow: 'auto',
                flexDirection: 'column',
                top:  inputRef?.current?.clientHeight ? inputRef.current.clientHeight  + 10 : 0,
                height: 100,
                border: '1px solid black',
                width: inputRef?.current?.clientWidth
            }}>
                {result.map((item, index) => {
                    return (
                        <>
                            <div style={{padding: 20, display: 'flex', alignItems: 'center', height: 50}} key={index}>
                                {item.name}
                            </div>
                            {index < result.length - 1 && <hr style={{margin: 0}}/>}
                        </>

                    )
                })}
            </div> : null}
        </div>

    );
};

export default AutoComplete;