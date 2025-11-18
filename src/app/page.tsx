'use client';

import { Counter } from 'features/counter';
import { useGetUsersQuery, UserCard } from 'entities/user';
import styles from './page.module.scss';

export default function Home() {
  const { data: users, isLoading, error } = useGetUsersQuery();

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
            <Counter />
          </section>

          <section className={styles.section}>
            <h2>Users Entity (RTK Query)</h2>
            {isLoading && <div className={styles.loading}>Loading users...</div>}
            {error && <div className={styles.error}>Error loading users</div>}
            {users && (
              <div className={styles.userList}>
                {users.slice(0, 6).map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
