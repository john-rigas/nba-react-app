import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import teamReducer from '../features/team/teamSlice';
import rotationReducer from '../features/rotation/rotationSlice'

export const store = configureStore({
  reducer: {
    team: teamReducer,
    rotation: rotationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
