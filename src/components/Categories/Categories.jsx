import React from 'react';

import styles from './Categories.module.scss';

export const Categories = ({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => setActiveItem(index);

  return (
    <nav className={styles.categories}>
      <ul>
        <li
          className={activeItem === null ? `${styles.active}` : ''}
          onClick={() => onSelectItem(null)}
        >
          All
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? `${styles.active}` : ''}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </nav>
  );
};
