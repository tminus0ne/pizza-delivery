import React from 'react';
import { Card } from './components/Card/Card';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { Popup } from './components/Popup';

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="menu">
        <Categories />
        <Popup />
      </div>
      <h2>All Pizza</h2>
      <section className="content">
        <Card />
      </section>
    </div>
  );
}
