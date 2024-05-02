import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addOrder: (state, payload) => {
            state.orders.push(payload);
        },
        setOrders: (state, payload) => {
            state.orders = payload;
        },
        removeOrder: (state, payload) => {
            state.orders = state.orders.filter(order => order.id !== payload.id);
        } 
    }
});

export const basketReducer = basketSlice.reducer;
export const { addOrder, setOrders } = basketSlice.actions;
