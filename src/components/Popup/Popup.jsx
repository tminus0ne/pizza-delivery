import React from 'react';

import styles from './Popup.module.scss';

export const Popup = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();
  const activeLabel = items[activeItem].name;

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
        <img
          className={isOpen ? `${styles.rotated}` : ''}
          src="/img/popup-arrow.svg"
          alt="pointer icon"
        />
      </button>
      <p>Sort by:</p>
      <span onClick={togglePopupVisibility}>{activeLabel}</span>
      {isOpen && (
        <ul className={styles.list}>
          {items &&
            items.map((obj, index) => (
              <li
                className={activeItem === index ? `${styles.active}` : ''}
                onClick={() => onSelectItem(index)}
                key={`${obj.type}_${index}`}
              >
                {obj.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
