import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../features/auth/authUserSlice';
import donarReducer from '../features/donar/donarSlice';

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    donar: donarReducer,
  },
});
