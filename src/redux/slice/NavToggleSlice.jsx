import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        value: false,
    },
    reducers: {
        toggleAction: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleAction } = toggleSlice.actions

export default toggleSlice.reducer