import { configureStore } from '@reduxjs/toolkit';
import toggleSlice from '../slice/NavToggleSlice';

export default configureStore({
    reducer: {
        navToggle: toggleSlice,
    },
})