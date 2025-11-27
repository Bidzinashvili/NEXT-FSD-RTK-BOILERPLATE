'use client';

import { FC } from 'react';
import { useGetUsersQuery, UserCard } from 'entities/user';
import { Loader, ErrorMessage } from 'shared/ui';
import styles from './UserList.module.scss';

export const UserList: FC = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message="Failed to load users" retry={refetch} />;
  }

  return (
    <div className={styles.userList}>
      {users?.slice(0, 6).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
