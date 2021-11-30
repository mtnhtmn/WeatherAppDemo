import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    fontFamily: string
    navbar:{
      background:string
    }
    scrollbar:{
      background:string
    }
  }
}
