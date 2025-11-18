'use client';

import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/store/hooks';
import { increment, decrement, reset, selectCounterValue } from '../model';
import { Button, Card } from 'shared/ui';
import styles from './Counter.module.scss';

export const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCounterValue);

  return (
    <Card className={styles.counter}>
      <h2 className={styles.title}>Counter Feature</h2>
      <div className={styles.value}>{count}</div>
      <div className={styles.buttons}>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Button onClick={() => dispatch(reset())} variant="secondary">
          Reset
        </Button>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </div>
    </Card>
  );
};
