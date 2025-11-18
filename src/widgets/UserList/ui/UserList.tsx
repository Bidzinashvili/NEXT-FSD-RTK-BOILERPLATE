'use client';

import { FC } from 'react';
import { useGetUsersQuery, UserCard } from 'entities/user';
import styles from './UserList.module.scss';

export const UserList: FC = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) {
    return <div className={styles.loading}>Loading users...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error loading users</div>;
  }

  return (
    <div className={styles.userList}>
      {users?.slice(0, 6).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
