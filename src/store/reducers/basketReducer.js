import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter(order => order.id !== action.payload.id);
        } 
    }
});

export const basketReducer = basketSlice.reducer;
export const { addOrder, setOrders } = basketSlice.actions;
