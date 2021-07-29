import React from 'react';
import classNames from 'classnames';

import styles from './Card.module.scss';

export const Card = ({ name, imageUrl, price, types, sizes }) => {
  const availableTypes = ['thin', 'traditional'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const handleTypeSelect = (index) => {
    setActiveType(index);
  };

  const handleSizeSelect = (index) => {
    setActiveSize(index);
  };

  return (
    <article className={styles.card}>
      <img src={imageUrl} alt="Pizza preview" />
      <p className={styles.title}>{name}</p>

      <div className={styles.options}>
        <ul>
          {availableTypes.map((type, index) => (
            <li
              onClick={() => handleTypeSelect(index)}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
              key={type}
            >
              {type}
            </li>
          ))}
        </ul>

        <ul>
          {availableSizes.map((size) => (
            <li
              onClick={() => handleSizeSelect(size)}
              className={classNames({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}
              key={size}
            >
              {size} cm
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.actions}>
        <span>from {price} ₽</span>
        <button>
          <img src="/img/plus.svg" alt="Plus sign" />
          <p>Add</p>
          <span>2</span>
        </button>
      </div>
    </article>
  );
};
