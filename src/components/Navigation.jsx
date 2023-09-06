import React, { useState } from 'react';
import classNames from 'classnames';
import Button from './Button';

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigationClassnames = classNames(
    `Navigation ${openMenu ? 'open-menu' : ''}`
  );
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <nav className={navigationClassnames}>
      <li className="nav--mobile" onClick={toggleMenu}>
        |||
      </li>
      <div className="nav--left">
        <img
          src="./B-logo.svg"
          alt="A logo with curly braces covering the letter B."
          className="logo"
        />
      </div>
      <div className="nav--right" onClick={toggleMenu}>
        <ul>
          <li>
            <a href="/benedicte-cv-english.pdf" target="blank">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <Button
          theme="secondary"
          href="mailto:benedicte.roksvag@gmail.com"
          className="contact--button"
        >
          Contact
        </Button>
      </div>
    </nav>
  );
}
