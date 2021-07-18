import React from 'react';

import styles from './Categories.module.scss';

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <ul>
        <li>All</li>
        <li>Meat</li>
        <li>Vegetarian</li>
        <li>Grill</li>
        <li>Spicy</li>
        <li>Calzone</li>
      </ul>
      <div>
        <img src="" alt="" />
        <p></p>
        <span></span>
      </div>
    </div>
  );
};
