import { useContext } from 'react';
import { ChallengesContex } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContex
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <header className={styles.experienceBar}>
      <span>0px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel}px</span>
    </header>
  );
}
