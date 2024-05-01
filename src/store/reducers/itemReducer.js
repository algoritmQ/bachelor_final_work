import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    item: {}
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
    setItem: (state, {payload}) => {
        state.item = payload;
    },
    resetItem: (state) => {
        state.item = {};
    }
    }
});
export const itemReducer = itemSlice.reducer;
export const {setItem, resetItem} = itemSlice.actions;
