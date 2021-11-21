import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICity {
  Key: string;
  LocalizedName: string;
  Country: { LocalizedName: string }
}

export interface CityState {
  city: any
}

const initialState: CityState = {
  city: null,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getCurrentCity: (state, action:PayloadAction<ICity>) => {
      state.city = action.payload;
    },
  },
});

export const { getCurrentCity } = citySlice.actions;

export default citySlice.reducer;
