import { FC } from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message?: string;
  retry?: () => void;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  message = 'Something went wrong. Please try again.',
  retry,
}) => {
  return (
    <div className={styles.errorMessage}>
      <p className={styles.text}>{message}</p>
      {retry && (
        <button className={styles.retryButton} onClick={retry}>
          Retry
        </button>
      )}
    </div>
  );
};
