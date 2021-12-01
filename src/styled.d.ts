import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    fontFamily: string;
    navbar: {
      background: string
      height: {
        desktop: string
        mobile: string
      }
    };
    scrollbar: {
      background: string
    };
    media: {
      mobile: string
      desktop: string
    };
  }
}
