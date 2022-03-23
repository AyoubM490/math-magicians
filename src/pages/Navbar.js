import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <div className="navBarWrap">
        <Header />
        <ul className="navLinks">
          {links.map((link) => (
            <li key={link.id} className="navLink">
              <NavLink to={link.path} activeClassName="active-link" exact className="link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
