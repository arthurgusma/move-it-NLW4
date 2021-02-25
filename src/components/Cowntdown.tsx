import { useContext, useEffect, useState } from 'react';
import { ChallengesContex } from '../contexts/ChallengesContext';
import styles from '../styles/components/Cowntdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Cowntdown() {
  const { startNewChallenge } = useContext(ChallengesContex);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActvie] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteRight, minuteLeft] = String(minutes).padStart(2, '0').split('');
  const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActvie(true);
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout);
    setIsActvie(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActvie(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={stopCountdown}
              type='button'
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type='button'
              className={styles.countdownButton}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
