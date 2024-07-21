import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: ""
}

const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        addColor: (state, action) => {
            state.color = action.payload
        }
        
    }
})
export const {addColor} = ColorSlice.actions
export default ColorSlice.reducer