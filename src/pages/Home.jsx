import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../components/Card';
import { Categories } from '../components/Categories';
import { Popup } from '../components/Popup';

export const Home = () => {
  const { items } = useSelector(({ pizzas }) => {
    return { items: pizzas.items };
  });

  return (
    <>
      <div className="menu">
        <Categories
          items={['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Calzone']}
        />
        <Popup
          items={[
            { name: 'popularity', type: 'popularity' },
            { name: 'price', type: 'price' },
            { name: 'title', type: 'title' },
          ]}
        />
      </div>
      <h2>All Pizza</h2>
      <section className="content">
        {items && items.map((item) => <Card key={item.id} {...item} />)}
      </section>
    </>
  );
};
