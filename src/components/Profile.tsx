import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/arthurgusma.png' alt='Arthur Gusmao' />
      <div>
        <strong>Arthur Gusmao</strong>
        <p>
          <img src='icons/level.svg' alt='Level icon' />
          Level 01
        </p>
      </div>
    </div>
  );
}
