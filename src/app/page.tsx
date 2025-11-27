'use client';

import { Counter } from 'features/counter';
import { useGetUsersQuery, UserCard } from 'entities/user';
import { Loader, ErrorMessage, ErrorBoundary } from 'shared/ui';
import styles from './page.module.scss';

export default function Home() {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>FSD Next.js Boilerplate</h1>
          <p>Feature-Sliced Design with Redux Toolkit & RTK Query</p>
        </header>

        <div className={styles.sections}>
          <section className={styles.section}>
            <h2>Counter Feature</h2>
            <ErrorBoundary>
              <Counter />
            </ErrorBoundary>
          </section>

          <section className={styles.section}>
            <h2>Users Entity (RTK Query)</h2>
            <ErrorBoundary>
              {isLoading && <Loader />}
              {error && <ErrorMessage message="Error loading users" retry={refetch} />}
              {users && (
                <div className={styles.userList}>
                  {users.slice(0, 6).map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))}
                </div>
              )}
            </ErrorBoundary>
          </section>
        </div>
      </div>
    </main>
  );
}
