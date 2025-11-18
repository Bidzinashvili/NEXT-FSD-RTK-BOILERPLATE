import { FC } from 'react';
import { Card } from 'shared/ui';
import { User } from '../model';
import styles from './UserCard.module.scss';

interface UserCardProps {
  user: User;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card className={styles.userCard}>
      <h3 className={styles.name}>{user.name}</h3>
      <p className={styles.email}>{user.email}</p>
      <p className={styles.phone}>{user.phone}</p>
      <p className={styles.website}>{user.website}</p>
    </Card>
  );
};
