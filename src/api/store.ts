import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
  Dispatch,
  combineReducers,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { shiftReducer } from "./shiftSlice";

const rootReducer = combineReducers({
  shift: shiftReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});

// app type defintions derived from referencing RTK documentation and a github issue
// RTK docs: https://redux-toolkit.js.org/tutorials/typescript
// RTK docs: https://redux-toolkit.js.org/usage/usage-with-typescript
// Github Issue: https://github.com/reduxjs/redux-toolkit/issues/690
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export type AppMiddleware = Middleware<
  {},
  AppState,
  Dispatch & Parameters<AppThunk>[0]
>;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
