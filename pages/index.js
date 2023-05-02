import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [attackRoll, setAttackRoll] = useState('');
  const [spell, setSpell] = useState('');
  const adventurers = [new Player('Ronandt')];
  return (
    <div>
      <Head>
        <title>Project</title>
      </Head>
      <main>
        <Panel name={adventurers[0].name}></Panel>
        <div className={styles.container}>
          <div className={styles.attackDisplayer}>{attackRoll}</div>
          <div className={styles.spellDisplayer}>Spell Something</div>
        </div>
        <div className={styles.container}>
          <button
            className={styles.attackButton}
            onClick={() => {
              setAttackRoll(Math.floor(Math.random() * 21));
              console.log(attackRoll);
            }}
          >
            Attack!
            {/* Bring The Image In */}
          </button>
          <button
            className={styles.spellButton}
            onClick={() => setSpell('Fireball')}
          >
            Spell!
          </button>
        </div>
      </main>
    </div>
  );
}

class Player {
  name;
  str;
  dex;
  con;
  int;
  wis;
  cha;

  constructor(
    name,
    str = 10,
    dex = 10,
    con = 10,
    int = 10,
    wis = 10,
    cha = 10
  ) {
    this.name = name;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
  }
}

function Panel(name) {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
}
