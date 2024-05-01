import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    categories: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    setCategories: (state, {payload}) => {
        state.categories = payload;
    }
    }
});
export const categoriesReducer = categoriesSlice.reducer;
export const {setCategories} = categoriesSlice.actions;