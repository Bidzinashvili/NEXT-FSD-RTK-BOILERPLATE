import { createSlice, SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

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
