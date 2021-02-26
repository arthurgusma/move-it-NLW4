import { useContext } from 'react';
import { ChallengesContex } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContex);
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/arthurgusma.png' alt='Arthur Gusmao' />
      <div>
        <strong>Arthur Gusmao</strong>
        <p>
          <img src='icons/level.svg' alt='Level icon' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
