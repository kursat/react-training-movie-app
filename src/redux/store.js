import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counterSlice';
import { usersApi } from './api/usersApi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    [counterSlice.reducerPath]: counterSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

export const persistor = persistStore(store);
