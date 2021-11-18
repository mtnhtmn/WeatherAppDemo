import React, {useRef, useState} from 'react';
import styled from 'styled-components';


 const media = {
    mobile: `(max-width: 900px)`
}



const InputWrap = styled.div`
  position: relative;
  
  @media ${media.mobile} {
    display: none;
  }

`

const Input = styled.input`
  height: 30px;
  background: #FFFFFF;
  box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1), inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  color: #222222;
  margin-left: 200px;
  
  
`

interface IWindowProps {
    top: number
    width: number
}

const Window = styled.div<IWindowProps>`
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  top: ${(props: IWindowProps) => `${props.top}px`};
  height: 250px;
  border: 1px solid black;
  width: ${(props: IWindowProps) => `${props.width}px`};
  background: #FFFFFF;
  box-shadow: 0 4px 80px rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  margin-left: 200px;

  
`;

const WindowInner = styled.div`
  overflow-y: auto;
  margin:20px 10px 20px 0;
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 15px;
  }
  
`;

const WindowItem = styled.div`
  cursor: pointer;
  
  :hover {
    background-color: gray;
    border-radius: 15px;
  }
  

`

interface ISearchProps<T> {
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
        <InputWrap  {...props}>
            <Input
                value={inputValue}
                onChange={(e) => {
                    onInputChange(e.target.value);
                    setOpen(true)
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

            {open && inputRef && inputRef.current && (
                <Window width={inputRef.current.clientWidth} top={inputRef.current.clientHeight + 7}>
                    <WindowInner>
                        {data ? data.map((item: T, index) => (
                            <WindowItem onMouseDown={(e) => {
                                e.preventDefault()
                            }} onClick={() => {
                                onListItemClick(item)
                                setOpen(false)

                            }} key={getKey(item)}>
                                {renderListItem(item)}
                                {index < data.length - 1}
                            </WindowItem>
                        )) : []}
                    </WindowInner>
                </Window>
            )}
        </InputWrap>
    );
};

export default Search;
