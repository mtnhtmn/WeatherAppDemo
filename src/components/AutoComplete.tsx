import React, {useRef, useState} from 'react';


interface IProps  {
    inputValue:string;
    onInputChange:(value:string)=>void;
    //you want your type are like TCityData[] but if you will use this component with let say other types you can use TCityData so its have to be Generic Type
    data: any[] // Generic like variable but as a type
    renderListItem:(item:any)=>JSX.Element
}


const AutoComplete = ({data,renderListItem,inputValue,onInputChange}: IProps) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [open, setOpen] = useState(false)

    return (
        <div style={{position:'relative'}}>
            <input style={{height:30}} value={inputValue} onChange={(e)=>{
                onInputChange(e.target.value)
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
                {(data?? []).map((city:any, index) => {
                    return (
                        <>
                            {renderListItem(city)}
                            {index < data.length - 1 && <hr style={{margin: 0}}/>}
                        </>
                    )
                })}
            </div> : null}
        </div>
    );
};

export default AutoComplete;