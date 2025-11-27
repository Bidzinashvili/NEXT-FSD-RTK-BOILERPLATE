import { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

export const Loader: FC<LoaderProps> = ({ size = 'medium', fullScreen = false }) => {
  return (
    <div className={`${styles.loaderWrapper} ${fullScreen ? styles.fullScreen : ''}`}>
      <div className={`${styles.loader} ${styles[size]}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
