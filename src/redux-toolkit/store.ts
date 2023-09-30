import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import {combineReducers, applyMiddleware} from 'redux';

import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = combineReducers({
  user: userReducer,
})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// })
// store.ts

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
