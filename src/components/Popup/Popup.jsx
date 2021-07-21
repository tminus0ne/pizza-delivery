import React from 'react';

import styles from './Popup.module.scss';

export const Popup = () => {
  return (
    <div className={styles.popup}>
      <button>
        <img src="/img/popup-arrow.svg" alt="" />
      </button>
      <p>Sort by:</p>
      <span>popularity</span>
    </div>
  );
};
