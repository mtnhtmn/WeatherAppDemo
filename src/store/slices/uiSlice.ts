import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { action } from "@storybook/addon-actions";


interface IUiState {
  isLightTheme: boolean
  isMenuOpen: boolean
  isForecastWidgetOpen: boolean
  weatherUnit: 'Metric' | 'Imperial'
}

const initialState: IUiState = {
  isLightTheme: true,
  isMenuOpen: false,
  isForecastWidgetOpen: false,
  weatherUnit: 'Metric'
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
    },
    setWeatherUnit: (state, action:PayloadAction<'Metric' | 'Imperial'>) => {
      state.weatherUnit = action.payload
    }

  }
});

export const { toggleLightTheme,closeMobileMenu,openMobileMenu,closeForecastWidget,openForecastWidget,setWeatherUnit } = uiSlice.actions;

export default uiSlice.reducer;
