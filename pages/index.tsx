import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Cowntdown } from '../src/components/Cowntdown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';

import styles from '../src/styles/pages/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Cowntdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
