import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  inputValue:string;
  onInputChange:(value:string)=>void;
  data: any[];
  renderListItem:(item:any)=>JSX.Element
}

const Window = styled.div`
  position: absolute;
  display: flex;
  overflow: auto;
  flexDirection: column;
  top: inputRef?.current?.clientHeight ? inputRef.current.clientHeight + 10 : 0;
  height: 100;
  border: 1px solid black;
  width: inputRef?.current?.clientWidth;
`;

const AutoComplete = function ({
  data, renderListItem, inputValue, onInputChange,
}: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <input
        style={{ height: 30 }}
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        ref={inputRef}
        onBlur={() => {
          setOpen(false);
        }}
        onFocus={() => {
          setOpen(true);
        }}
        type="text"
      />
      {open ? (
        <div style={{

        }}
        >
          {(data ?? []).map((city:any, index) => (
            <>
              {renderListItem(city)}
              {index < data.length - 1 && <hr style={{ margin: 0 }} />}
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AutoComplete;
