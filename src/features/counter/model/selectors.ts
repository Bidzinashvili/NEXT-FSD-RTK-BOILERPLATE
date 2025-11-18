import { RootState } from 'app/providers/store/store';

export const selectCounterValue = (state: RootState) => state.counter.value;
