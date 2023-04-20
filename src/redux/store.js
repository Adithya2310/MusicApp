import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { Shazamdojo } from './features/services/Shazamdojo';

export const store = configureStore({
  reducer: {
    [Shazamdojo.reducerPath]:Shazamdojo.reducer,
    player: playerReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(Shazamdojo.middleware),
});
