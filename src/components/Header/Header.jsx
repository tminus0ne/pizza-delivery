import React from 'react';
import { Link } from 'react-router-dom';

import { CartButton } from '../CartButton';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className="link">
        <div className={styles.headerLeft}>
          <img src="/img/logo.png" alt="logo" />
          <div>
            <h1 className={styles.title}>Pizza Delivery</h1>
            <p>The most tasty pizza in the Universe</p>
          </div>
        </div>
      </Link>
      <div className={styles.headerRight}>
        <CartButton />
      </div>
    </header>
  );
};
