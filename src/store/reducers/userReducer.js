import {createSlice} from '@reduxjs/toolkit';

let initialState = {autorized : false, user:{}}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    setAuth: (state, {payload}) => {
        state.autorized = true;
        localStorage.setItem('access', payload.access);
    },
    setUser: (state, {payload}) => {
        state.autorized = true;
        state.user = payload;
    },
    logout: (state) => {
        state.autorized = false;
        state.user = {};
        localStorage.removeItem('access');
    }
    }
});
export const userReducer = userSlice.reducer;
export const {setAuth, setUser, logout} = userSlice.actions;
