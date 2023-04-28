import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [attackRolls, setAttackRolls] = useState('');
  const [spells, setSpells] = useState('');
  return (
    <div>
      <Head>
        <title>Project</title>
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.attackDisplayer}>{attackRolls}</div>
          <div className={styles.spellDisplayer}>Spell Something</div>
        </div>
        <div className={styles.container}>
          <button
            className={styles.attackButton}
            onClick={() => setAttackRolls(Math.floor(Math.random() * 20))}
          >
            Attack!
            {/* Bring The Image In */}
          </button>
          <button
            className={styles.spellButton}
            onClick={() => setSpells('Fireball')}
          >
            Spell!
          </button>
        </div>
      </main>
    </div>
  );
}
