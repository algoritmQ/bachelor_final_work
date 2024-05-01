import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from './reducers/userReducer';
import { adsReducer } from './reducers/adsReducer';
import { itemReducer } from './reducers/itemReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { chatInfoReducer } from './reducers/chatReducer';

export const store = configureStore({
     reducer: {
        user: userReducer,
        ads: adsReducer,
        item: itemReducer,
        categories: categoriesReducer,
        chatInfo: chatInfoReducer,
    }});