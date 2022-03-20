import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './Modal/ModalSlice';
import filterReducer from './Filter/FilterSlice';
import cartReducer from './Cart/cartSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        filter: filterReducer,
        cart: cartReducer
    },
})