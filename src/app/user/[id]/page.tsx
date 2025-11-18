'use client';

import { useGetUserByIdQuery } from 'entities/user';
import { UserCard } from 'entities/user';
import { Button } from 'shared/ui';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function UserPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: user, isLoading, error } = useGetUserByIdQuery(Number(params.id));

  if (isLoading) {
    return <div className={styles.loading}>Loading user...</div>;
  }

  if (error || !user) {
    return <div className={styles.error}>User not found</div>;
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
