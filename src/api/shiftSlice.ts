import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { ShiftInterface } from "../types";
import ShiftApi, { ShiftRequest } from "./ShiftApi";
import { RootState } from "./store";

export const shiftAdapter = createEntityAdapter<ShiftInterface>();

export const shiftSlice = createSlice({
  name: "shift",
  initialState: shiftAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShifts.fulfilled, (state, action) => {
      shiftAdapter.setAll(state, action.payload);
    });
    builder.addCase(createShift.fulfilled, (state, action) => {
      shiftAdapter.setAll(state, action.payload);
    });
    builder.addCase(updateShift.fulfilled, (state, action) => {
      shiftAdapter.setAll(state, action.payload);
    });
    builder.addCase(deleteShift.fulfilled, (state, action) => {
      shiftAdapter.setAll(state, action.payload);
    });
  },
});

// selector exports
export const {
  selectAll: selectAllShifts,
  selectById: selectShiftById,
  selectIds: selectShiftIds,
  selectEntities: selectShiftEntities,
} = shiftAdapter.getSelectors((rootState: RootState) => rootState.shift);

export const { reducer: shiftReducer } = shiftSlice;

// selectors
// select all shifts for a given engineer
export const selectAllShiftsByEngineerId = (engineerId: number) =>
  createSelector([selectAllShifts], (shifts) => {
    return shifts.filter((shift) => shift.engineerId === engineerId);
  });

// thunks
export const fetchShifts = createAsyncThunk("shift/fetchShifts", async () => {
  const response = await new ShiftApi().readShifts();
  return response.shifts;
});

export const createShift = createAsyncThunk(
  "shift/createShift",
  async (shift: ShiftRequest) => {
    const response = await new ShiftApi().createShift(shift);
    return response.shifts;
  }
);

export const updateShift = createAsyncThunk(
  "shift/updateShift",
  async ({ shift, shiftId }: { shift: ShiftRequest; shiftId: string }) => {
    const response = await new ShiftApi().updateShift(shift, shiftId);
    return response.shifts;
  }
);

export const deleteShift = createAsyncThunk(
  "shift/deleteShift",
  async (shiftId: number) => {
    const response = await new ShiftApi().deleteShift(shiftId);
    return response.shifts;
  }
);
