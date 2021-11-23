import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import InputSearchIcon from '../svg/InputSearchIcon.svg?component';

const media = {
  mobile: '(max-width: 900px)',
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 57px;
  width: 366px;
  background: #FFFFFF;
  box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1), inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-left: 166px;
  color: #222222;
  justify-content: space-between;
  
  @media ${media.mobile} {
    display: none;
  }

`;

const Input = styled.input`
  outline: none;
  flex: 1;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #BEBEBE;
  padding-left: 19px;
  line-height: 31px;
  
  
  ::placeholder { 
    color: #BEBEBE;
  }
`;

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
  align-self: flex-end;
`;

const WindowInner = styled.div`
  overflow-y: auto;
  margin:20px 10px 20px 0;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #F2F1F1;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 15px;
  }
  
`;

const WindowItem = styled.div`
  cursor: pointer;
  
  :hover {
    background-color: #F2F1F1;
  }
  

`;

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

const Search = function <T extends any>({
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
  const containerRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <SearchWrapper ref={containerRef} {...props}>
      <Input
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.target.value);
          setOpen(true);
        }}
        onBlur={(e) => {
          setOpen(false);
        }}
        onFocus={() => {
          setOpen(true);
        }}
        type="text"
        placeholder={'Try “Tel Aviv - Jaffo"...'}
      />
      <div style={{ paddingRight: 19, height: 33 }}>
        <InputSearchIcon />
      </div>

      {open && containerRef && containerRef.current && (
      <Window width={containerRef.current.clientWidth} top={containerRef.current.clientHeight + 7}>
        <WindowInner>
          {data ? data.map((item: T, index) => (
            <WindowItem
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onClick={() => {
                onListItemClick(item);
                setOpen(false);
              }}
              key={getKey(item)}
            >
              {renderListItem(item)}
              {index < data.length - 1}
            </WindowItem>
          )) : []}
        </WindowInner>
      </Window>
      )}
    </SearchWrapper>
  );
};

export default Search;
