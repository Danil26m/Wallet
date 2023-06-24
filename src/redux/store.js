import { configureStore } from "@reduxjs/toolkit";
import auth from 'redux/auth/auth'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
    key: 'auth',
    storage,
    blacklist: ['user']
  };
  const persistedReducer = persistReducer(persistConfig, auth);
export const store = configureStore({
    reducer: {
        auth: persistedReducer
  },
  middleware: getDefaultMiddleware =>
getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
})
})
export const persistor = persistStore(store);
