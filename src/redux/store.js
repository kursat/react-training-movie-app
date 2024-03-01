import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counterSlice';
import { userSlice } from './features/userSlice';

const rootReducer = combineSlices(counterSlice, userSlice);

// const rootReducer2 = combineReducers({
//     counter: counterSlice.reducer,
//     counter2: counterSlice.reducer,
// });

export const store = configureStore({
    reducer: rootReducer,
});
