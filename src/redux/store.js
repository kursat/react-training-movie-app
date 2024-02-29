import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counterSlice';

const rootReducer = combineSlices(counterSlice);

// const rootReducer2 = combineReducers({
//     counter: counterSlice.reducer,
//     counter2: counterSlice.reducer,
// });

export const store = configureStore({
    reducer: rootReducer,
});
