import React from 'react';

import styles from './Popup.module.scss';

export const Popup = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const sortRef = React.useRef();

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

  return (
    <div ref={sortRef} className={styles.popup}>
      <button>
        <img src="/img/popup-arrow.svg" alt="" />
      </button>
      <p>Sort by:</p>
      <span onClick={togglePopupVisibility}>popularity</span>
      {isOpen && (
        <ul className={styles.list}>
          <li className={styles.active}>popularity</li>
          <li>price</li>
          <li>name</li>
        </ul>
      )}
    </div>
  );
};
