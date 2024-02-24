import React from 'react';
import { NavLink } from 'react-router-dom';

function NavComponent({ to, text }) {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>(
        `block py-2 hover:underline pr-4 pl-3 ${isActive?"text-white ":"text-gray-400"} rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 `
      )}
      activeClassName="text-white bg-primary-700"
      aria-current="page"
    >
      {text}
    </NavLink>
  );
}

export default NavComponent;
