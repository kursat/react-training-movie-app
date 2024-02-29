import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        decrementBy: (state, action) => {
            state.value -= action.payload;
        },
    },
    selectors: {
        selectCount: (sliceState) => sliceState.value,
    },
});

export const { increment, decrement, decrementBy } = counterSlice.actions;

export const { selectCount } = counterSlice.selectors;
