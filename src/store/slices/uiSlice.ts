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
    toggleMobileMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    toggleForecastWidget: (state) => {
      state.isForecastWidgetOpen = !state.isForecastWidgetOpen
    }
  }
});

export const { toggleLightTheme,toggleMobileMenu,toggleForecastWidget } = uiSlice.actions;

export default uiSlice.reducer;
