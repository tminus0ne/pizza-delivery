import React from 'react';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src="/img/logo.png" alt="logo" />
        <div>
          <h1 className={styles.title}>Pizza Delivery</h1>
          <p>Most tasty pizza in the Universe</p>
        </div>
      </div>
      <div className={styles.headerRight}>
        <button>
          <span>520 ₽</span>
          <div className={styles.cartLine}>|</div>
          <img src="/img/cart.svg" alt="Cart icon" />
          <span>3</span>
        </button>
      </div>
    </header>
  );
};
