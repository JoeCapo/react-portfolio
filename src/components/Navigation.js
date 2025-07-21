import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/frontend'>Frontend</NavLink>
      <NavLink to='/backend'>Backend</NavLink>
      <NavLink to='/datascience'>Data Science</NavLink>
    </nav>
  );
}
