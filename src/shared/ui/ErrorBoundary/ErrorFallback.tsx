import { FC } from 'react';
import styles from './ErrorBoundary.module.scss';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className={styles.errorBoundary}>
      <div className={styles.content}>
        <h2 className={styles.title}>Something went wrong</h2>
        <p className={styles.message}>{error.message || 'An unexpected error occurred'}</p>
        <button className={styles.button} onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
