import { configureStore } from "@reduxjs/toolkit";
import colorReducer from '../features/colorChange/ColorSlice'

export const store = configureStore({
    reducer: colorReducer
})
