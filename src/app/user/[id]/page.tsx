'use client';

import { useGetUserByIdQuery } from 'entities/user';
import { UserCard } from 'entities/user';
import { Button, Loader, ErrorMessage } from 'shared/ui';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function UserPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: user, isLoading, error, refetch } = useGetUserByIdQuery(Number(params.id));

  if (isLoading) {
    return <Loader fullScreen />;
  }

  if (error || !user) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <ErrorMessage message="User not found" retry={refetch} />
          <Button onClick={() => router.push('/')} variant="secondary">
            ← Back to Home
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Button onClick={() => router.push('/')} variant="secondary">
          ← Back to Home
        </Button>
        <h1 className={styles.title}>User Details</h1>
        <UserCard user={user} />
      </div>
    </main>
  );
}
