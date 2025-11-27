import { createSlice, SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

/**
 * Wraps createSlice to add restore reducer for persistence middleware.
 * Use this instead of createSlice if you want to persist a slice's state.
 *
 * Usage:
 * const counterSlice = createPersistableSlice({
 *   name: 'counter',
 *   initialState,
 *   reducers: { ... }
 * });
 */
export const createPersistableSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>
>(
  options: CreateSliceOptions<State, CaseReducers>
) => {
  const slice = createSlice({
    ...options,
    reducers: {
      ...options.reducers,
      restore: (state: State, action: PayloadAction<State>) => action.payload,
    } as any,
  });

  return {
    ...slice,
    actions: {
      ...slice.actions,
    },
  };
};
