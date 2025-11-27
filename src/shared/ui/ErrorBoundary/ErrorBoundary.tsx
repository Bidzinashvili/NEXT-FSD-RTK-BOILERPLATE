'use client';

import { FC, ReactNode, useState, useEffect } from 'react';
import ErrorFallback from './ErrorFallback';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, info: string) => void;
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, fallback, onError }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error);
      if (onError) {
        onError(event.error, event.error?.stack || '');
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [onError]);

  if (hasError && error) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return (
      <ErrorFallback
        error={error}
        resetErrorBoundary={() => {
          setHasError(false);
          setError(null);
        }}
      />
    );
  }

  return <>{children}</>;
};
