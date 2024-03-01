import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counterSlice';
import { usersApi } from './api/usersApi';

const rootReducer = combineSlices(counterSlice);

// const rootReducer2 = combineReducers({
//     counter: counterSlice.reducer,
//     counter2: counterSlice.reducer,
// });

export const store = configureStore({
    reducer: {
        [counterSlice.reducerPath]: counterSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});
