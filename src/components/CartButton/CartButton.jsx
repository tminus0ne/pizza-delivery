import React from 'react';
import styles from './CartButton.module.scss';

export const CartButton = () => {
  return (
    <button className={styles.cartButton}>
      <span>520 ₽</span>
      <div className={styles.cartLine}>|</div>
      <img src="/img/cart.svg" alt="Cart icon" />
      <span>3</span>
    </button>
  );
};
