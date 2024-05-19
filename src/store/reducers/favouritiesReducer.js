import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourities: [],
    favouritiesCount: 0,
}

const favouritiesSlice = createSlice({
    name: 'Favourity',
    initialState,
    reducers: {
        addFavourity: (state, action) => {
            state.favourities.push(action.payload);
        },
        setFavourities: (state, action) => {
            state.favourities = action.payload;
        },
        removeFavourity: (state, action) => {
            state.favourities = state.favourities.filter(favourity => favourity.id !== action.payload);
        },
        incFavourities: (state) => {
            state.favouritiesCount = state.favouritiesCount + 1;
        },
    }
});

export const favouritiesReducer = favouritiesSlice.reducer;
export const { addFavourity, setFavourities, removeFavourity, incFavourities } = favouritiesSlice.actions;
