import React from 'react';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <section className="content"></section>
    </div>
  );
}
