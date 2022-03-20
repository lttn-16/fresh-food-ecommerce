import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },
        remove: (state) => {
            state.value = null
        },
    },
})

export const { set, remove } = modalSlice.actions

export default modalSlice.reducer