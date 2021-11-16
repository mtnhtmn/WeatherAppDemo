import styled from "styled-components";
import React from "react";


export interface IWindowProps {
    top:number;
    width:number;
    children:React.ReactNode
}


export const WindowComponent = (props: IWindowProps) => {

    const Window = styled.div`
      position: absolute;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      top: ${props.top};
      height: 250px;
      border: 1px solid black;
      // width: ${props.width};
      width: 275px;
      background: #FFFFFF;
      box-shadow: 0 4px 80px rgba(0, 0, 0, 0.16);
      border-radius: 30px;
    `;

    return <Window>{props.children}</Window>
}