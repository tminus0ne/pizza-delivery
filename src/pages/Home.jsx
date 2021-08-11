import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../components/Card';
import { Categories } from '../components/Categories';
import { Popup } from '../components/Popup';
import { setCategory } from '../redux/actions/filters';

const categoriesNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Calzone'];
const sortItems = [
  { name: 'popularity', type: 'popularity' },
  { name: 'price', type: 'price' },
  { name: 'title', type: 'title' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <>
      <div className="menu">
        <Categories items={categoriesNames} onClickItem={onSelectCategory} />
        <Popup items={sortItems} />
      </div>
      <h2>All Pizza</h2>
      <section className="content">
        {items && items.map((item) => <Card key={item.id} {...item} />)}
      </section>
    </>
  );
};
