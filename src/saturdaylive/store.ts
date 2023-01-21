import { configureStore } from '@reduxjs/toolkit';
import saturdayLiveReducer from './saturdayLiveReducer';

const store = configureStore({
  reducer: {
    saturdayLive: saturdayLiveReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
