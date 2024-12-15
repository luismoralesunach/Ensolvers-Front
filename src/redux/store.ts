import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import labelsReducer from './labelsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    labels: labelsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
