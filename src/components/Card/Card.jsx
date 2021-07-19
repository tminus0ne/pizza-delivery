import React from 'react';

import styles from './Card.module.scss';

export const Card = () => {
  return (
    <article className={styles.card}>
      <img src="/img/cheaseburger.png" alt="Pizza preview" />
      <p className={styles.title}>Cheaseburger-pizza</p>

      <div className={styles.options}>
        <ul>
          <li>thin</li>
          <li>traditional</li>
        </ul>

        <ul>
          <li>26 cm</li>
          <li>30 cm</li>
          <li>40 cm</li>
        </ul>
      </div>

      <div className={styles.actions}>
        <span>from 395 ₽</span>
        <button>
          <img src="/img/plus.svg" alt="Plus sign" />
          <p>Add</p>
          <span>2</span>
        </button>
      </div>
    </article>
  );
};
