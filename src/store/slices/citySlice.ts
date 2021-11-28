import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ICity {
  Key: string;
  LocalizedName: string;
  Country: { LocalizedName: string }
}

export interface ICityState {
  cityData: ICity | null
}

const initialState: ICityState = {
  cityData: null,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    getCurrentCity: (state, action:PayloadAction<ICity>) => {
      state.cityData = action.payload;
    },
  },
});

export const { getCurrentCity } = citySlice.actions;

export default citySlice.reducer;
