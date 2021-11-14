import React, {ReactNode, useRef, useState } from 'react';
import styled,{StyledFunction} from 'styled-components';


export interface IWindowProps {
  top:number;
  width:number;
  children:React.ReactNode
}

const WindowComponent = (props:IWindowProps)=>{

  const Window = styled.div`
  position: absolute;
  display: flex;
  overflow: auto;
  flexDirection: column;
  top:${props.top};
  top: 30px;
  height: 250px;
  border: 1px solid black;
  width: ${props.width};
  width: 169px;
`;

  return <Window>{props.children}</Window>

}

// const Window = windowEl`
//   position: absolute;
//   display: flex;
//   overflow: auto;
//   flexDirection: column;
//   top:${(props:any) => props.top};
//   top: 30px;
//   height: 250px;
//   border: 1px solid black;
//   //width: inputRef?.current?.clientWidth;
//   width: 169px;
// `;


export interface ISerachProps {
  inputValue:string;
  onInputChange:(value:string)=>void;
  data: any[];
  renderListItem:(item:any)=>JSX.Element
  placeholder?: string
  variant?: 'primary' | 'secondary'
}

export const Search = function ({
  data, renderListItem, inputValue, onInputChange, placeholder, variant, ...props
}: ISerachProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }} {...props}>
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
        placeholder={placeholder}
      />

      {open ? (
        <WindowComponent width={10} top={inputRef && inputRef.current ? inputRef.current?.clientHeight+10 : 0} >
          {(data ?? []).map((city:any, index) => (
            <>
              {renderListItem(city)}
              {index < data.length - 1 && <hr style={{ margin: 0 }} />}

            </>
          ))}
        </WindowComponent>
      ) : null}
    </div>
  );
};

export default Search;
