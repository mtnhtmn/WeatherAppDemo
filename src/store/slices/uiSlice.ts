import { createSlice } from "@reduxjs/toolkit";


interface IUiState {
  isLightTheme: boolean
  isMenuOpen: boolean
  isForecastWidgetOpen: boolean
}

const initialState: IUiState = {
  isLightTheme: true,
  isMenuOpen: false,
  isForecastWidgetOpen: false
};

export const uiSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    toggleLightTheme: (state) => {
      state.isLightTheme = !state.isLightTheme
    },
    closeMobileMenu: (state) => {
      state.isMenuOpen = false
    },
    openMobileMenu: (state) => {
      state.isMenuOpen = true
    },
    closeForecastWidget: (state) => {
      state.isForecastWidgetOpen = false
    },
    openForecastWidget: (state) => {
      state.isForecastWidgetOpen = true
    }
  }
});

export const { toggleLightTheme,closeMobileMenu,openMobileMenu,closeForecastWidget,openForecastWidget } = uiSlice.actions;

export default uiSlice.reducer;
