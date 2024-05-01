import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    ads: [],
    activeAds: [],
    soldAds: [],
}

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
    setAds: (state, {payload}) => {
        state.ads = payload;
    },
    resetAds: (state) => {
        state.ads = [];
    },
    setActiveAds: (state, {payload}) => {
        state.activeAds = payload;
    },
    resetActiveAds: (state) => {
        state.activeAds = [];
    },
    setSoldAds: (state, {payload}) => {
        state.soldAds = payload;
       
    },
    resetSoldAds: (state) => {
        state.soldAds = [];
    }
    }
});
export const adsReducer = adsSlice.reducer;
export const {setAds, resetAds, setActiveAds, resetActiveAds, setSoldAds, resetSoldAds } = adsSlice.actions;
