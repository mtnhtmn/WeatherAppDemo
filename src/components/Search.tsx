import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {WindowComponent} from "../styles/Window.styles";
import {log} from "util";


const Input = styled.input`
  height: 30px;
  background: #FFFFFF;
  box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1), inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 31px;
  color: #222222;
`

export interface ISearchProps<T> {
    inputValue: string;
    onInputChange: (value: string) => void;
    data: T[] | undefined;
    renderListItem: (item: T) => JSX.Element
    onListItemClick: (item: T) => void;
    getKey: (item: T) => string | number;
    placeholder?: string
    variant?: 'primary' | 'secondary'
}

export const Search = function <T extends any>({
                                                   data,
                                                   renderListItem,
                                                   inputValue,
                                                   onInputChange,
                                                   onListItemClick,
                                                   placeholder,
                                                   getKey,
                                                   variant,
                                                   ...props
                                               }: ISearchProps<T>) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);

    return (
        <div style={{position: 'relative'}} {...props}>
            <Input
                style={{height: 30}}
                value={inputValue}
                onChange={(e) => {
                    onInputChange(e.target.value);
                }}
                ref={inputRef}
                onBlur={(e) => {
                    setOpen(false);
                }}
                onFocus={() => {
                    setOpen(true);
                }}
                type="text"
                placeholder={'Try “Tel Aviv - Jaffo"...'}
            />

            {open && (
                <WindowComponent width={10}
                                 top={inputRef && inputRef.current ? inputRef.current?.clientHeight + 10 : 0}>

                    {data ? data.map((item: T, index) => (
                        <div onMouseDown={(e) => {
                            e.preventDefault()
                        }} onClick={(e) => {
                            onListItemClick(item)

                        }} key={getKey(item)}>
                            {renderListItem(item)}
                            {index < data.length - 1}
                        </div>
                    )) : []}

                </WindowComponent>
            )}
        </div>
    );
};

export default Search;
