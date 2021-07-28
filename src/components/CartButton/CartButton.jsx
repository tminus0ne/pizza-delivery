import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CartButton.module.scss';

export const CartButton = () => {
  return (
    <Link to="/cart" className="link">
      <button className={styles.cartButton}>
        <span>520 ₽</span>
        <div className={styles.cartLine}>|</div>
        <img src="/img/cart.svg" alt="Cart icon" />
        <span>3</span>
      </button>
    </Link>
  );
};
