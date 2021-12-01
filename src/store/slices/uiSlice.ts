import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IUiState {
  isLightTheme: boolean
  isMenuOpen: boolean
}

const initialState: IUiState = {
  isLightTheme: true,
  isMenuOpen: false
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
    }
  }
});

export const { toggleLightTheme,toggleMobileMenu } = uiSlice.actions;

export default uiSlice.reducer;
