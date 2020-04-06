import React from 'react';
import './style.scss';

const Menu = () => {
  const menu = [
    {
      label: "The Women's War on iHeartRadio",
      link: 'https://www.iheart.com/podcast/1119-the-womens-war-59464911/',
    },
    {
      label: "Robert's Twitter",
      link: 'https://twitter.com/iwriteok/',
    },
    {
      label: "Robert's articles at Bellingcat",
      link: 'https://www.bellingcat.com/author/robertevans/',
    },
    {
      label: 'The War on Everyone',
      link: 'http://www.thewaroneveryone.com/',
    },
  ];

  const menuBlock = (
    <ul className="menu__list">
      {/* <li className="menu__list-item">
        <Link
          to="/about"
          className="menu__list-item-link"
        >
          About Robert Evans
        </Link>
      </li> */}
      {menu.map((item) => (
        <li className="menu__list-item" key={item.link}>
          <a href={item.link} className="menu__list-item-link" target="blank">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return <nav className="menu">{menuBlock}</nav>;
};

export default Menu;
