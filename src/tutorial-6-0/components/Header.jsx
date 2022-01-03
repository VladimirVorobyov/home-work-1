import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CostomeLink } from "../costome/costomeLink";

export const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/">React Blogersd</Link>
      </h2>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <CostomeLink to="/about">Обо мне</CostomeLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "asd" : "")}
          >
            Профиль
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
