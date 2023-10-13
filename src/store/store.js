import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';

const store = configureStore({

    reducer: {
        app: userSlice
    }
});
export default store;