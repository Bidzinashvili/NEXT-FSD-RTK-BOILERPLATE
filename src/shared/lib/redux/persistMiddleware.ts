import { Middleware, isAction } from '@reduxjs/toolkit';

const STORAGE_KEY_PREFIX = 'redux_persist_';

interface PersistConfig {
  slices: string | string[];
  keyPrefix?: string;
}

export const createPersistMiddleware = (config: PersistConfig): Middleware => {
  const slices = Array.isArray(config.slices) ? config.slices : [config.slices];
  const keyPrefix = config.keyPrefix || STORAGE_KEY_PREFIX;

  return (store) => {
    return (next) => (action) => {
      const result = next(action);

      if (typeof window !== 'undefined' && isAction(action)) {
        const state = store.getState();

        slices.forEach((sliceName) => {
          const key = `${keyPrefix}${sliceName}`;
          try {
            const sliceState = (state as any)[sliceName];
            localStorage.setItem(key, JSON.stringify(sliceState));
          } catch (error) {
            console.warn(`Failed to persist ${sliceName} to localStorage:`, error);
          }
        });
      }

      return result;
    };
  };
};
