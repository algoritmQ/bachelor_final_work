import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    chatInfo: {}
}

const chatInfoSlice = createSlice({
    name: 'chatInfo',
    initialState,
    reducers: {
    setChatInfo: (state, {payload}) => {
        state.chatInfo = payload;
    },
    resetChatInfo: (state) => {
        state.chatInfo = {};
    }
    }
});
export const chatInfoReducer = chatInfoSlice.reducer;
export const {setChatInfo, resetChatInfo} = chatInfoSlice.actions;
