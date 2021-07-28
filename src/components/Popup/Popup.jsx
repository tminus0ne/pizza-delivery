import React from 'react';

import styles from './Popup.module.scss';

export const Popup = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();
  const activeLabel = items[activeItem];

  const togglePopupVisibility = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (evt) => {
    if (!evt.path.includes(sortRef.current)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (index) => {
    setActiveItem(index);
    setIsOpen(false);
  };

  return (
    <div ref={sortRef} className={styles.popup}>
      <button>
        <img src="/img/popup-arrow.svg" alt="" />
      </button>
      <p>Sort by:</p>
      <span onClick={togglePopupVisibility}>{activeLabel}</span>
      {isOpen && (
        <ul className={styles.list}>
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
      )}
    </div>
  );
};
