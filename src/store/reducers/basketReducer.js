import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    activeOrders: [],
    soldOrders: [],
    activeOrdersCount: 0,
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
            state.activeOrdersCount = payload.length;
        },
        resetActiveOrders: (state) => {
            state.activeOrders = [];
        },
        setSoldOrders: (state, {payload}) => {
            state.soldOrders = payload;
        },
        resetSoldOrders: (state) => {
            state.soldOrders = [];
        },
        incActiveOrders: (state) => {
            state.activeOrdersCount = state.activeOrdersCount + 1;
        },
        removeActiveOrder: (state, {payload}) => {
            state.activeOrders = state.activeOrders.filter(order => order.id !== payload);
            state.activeOrdersCount = state.activeOrdersCount - 1;
        }
    }
});

export const basketReducer = basketSlice.reducer;
export const { addOrder, setOrders, removeOrder, setActiveOrders, resetActiveOrders, setSoldOrders, resetSoldOrders, incActiveOrders, removeActiveOrder } = basketSlice.actions;
