import {createSlice} from "@reduxjs/toolkit";

export interface CityState {
    city: any
}

const initialState: CityState = {
    city: null
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        getCity: (state,action) => {
            state.city = action.payload
        }
    }
})

export const {getCity} = citySlice.actions

export default citySlice.reducer