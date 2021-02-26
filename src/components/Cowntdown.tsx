import { useContext, useEffect, useState } from 'react';
import { ChallengesContex } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Cowntdown.module.css';

export function Cowntdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteRight, minuteLeft] = String(minutes).padStart(2, '0').split('');
  const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');

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
              onClick={resetCountdown}
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
