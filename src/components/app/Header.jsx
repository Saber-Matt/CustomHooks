import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header () => {
  return (
    <header className={styles.Header}>
      <h1>Rick And Morty</h1>
      <NavLink  to="/">List</NavLink>
    </header>
  );
};
