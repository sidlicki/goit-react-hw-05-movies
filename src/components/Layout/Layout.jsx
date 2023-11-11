import { NavLink } from 'react-router-dom';
import React from 'react';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <div className={`${css.container} ${css.headerContainer}`}>
          <NavLink className={css.navlink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navlink} to="/movies">
            Movies
          </NavLink>
        </div>
      </header>
      <main className={css.mainContent}>
        <div className={css.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
