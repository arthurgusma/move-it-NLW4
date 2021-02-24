import { useEffect, useState } from 'react';
import { start } from 'repl';
import styles from '../styles/components/Cowntdown.module.css';

export function Cowntdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActvie] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteRight, minuteLeft] = String(minutes).padStart(2, '0').split('');
  const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActvie(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteRight}</span>
          <span>{minuteLeft}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondRight}</span>
          <span>{secondLeft}</span>
        </div>
      </div>
      <button
        onClick={startCountdown}
        type='button'
        className={styles.countdownButton}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}
