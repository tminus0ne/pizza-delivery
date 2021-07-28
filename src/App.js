import React from 'react';
import { Card } from './components/Card';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { Popup } from './components/Popup';

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="menu">
        <Categories
          items={['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Calzone']}
        />
        <Popup items={['popularity', 'price', 'title']} />
      </div>
      <h2>All Pizza</h2>
      <section className="content">
        <Card />
      </section>
    </div>
  );
}
