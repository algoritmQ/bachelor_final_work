import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    activeOrders: [],
    soldOrders: [],
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
        },

        setActiveOrders: (state, {payload}) => {
            state.activeOrders = payload;
        },
        resetActiveOrders: (state) => {
            state.activeOrders = [];
        },
        setSoldOrders: (state, {payload}) => {
            state.soldOrders = payload;
        
        },
        resetSoldOrders: (state) => {
            state.soldOrders = [];
        } 
    }
});

export const basketReducer = basketSlice.reducer;
export const { addOrder, setOrders, removeOrder, setActiveOrders, resetActiveOrders, setSoldOrders, resetSoldOrders } = basketSlice.actions;
