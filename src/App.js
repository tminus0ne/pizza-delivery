import React from 'react';
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
      <section className="content"></section>
    </div>
  );
}
