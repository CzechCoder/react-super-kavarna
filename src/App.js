import React, { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data";
import ScrollNavigation from 'react-single-page-navigation';

const categories = ["vše", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "vše") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (

    <ScrollNavigation elements={{ MenuMenu: {}, ContactContact: {}, TopTop: {} }}>
    {({ refs, activeElement, goTo }) => (

    <main>
      <nav className="top-menu">
        <section className="section" ref={refs.TopTop}>
        <div className="top-menu-wrapper">
          <div className="menu-logo">
            <a className="menu-logo-sub" onClick={() => goTo('TopTop')}>
              SUPER KAVÁRNA
            </a>
          </div>
          <div className="menu-items">
            <div className="menu-menu">
            <a className="menu-menu-item" onClick={() => goTo('MenuMenu')}>Menu</a>
            <a className="menu-menu-item item-padding" onClick={() => goTo('ContactContact')}>Kontakt</a>
            </div>
          </div>
        </div>
        </section>
      </nav>

<div className="intro">
      <section className="section">
        <div className="intro-link-main">
      <div className="intro-links">
        <div>
          <a className="intro-link" onClick={() => goTo('MenuMenu')}>Menu</a>
        </div>
        <div className="intro-link-bottom">
          <a className="intro-link" onClick={() => goTo('ContactContact')}>Kontakt</a>
        </div>
      </div>
      </div>
      </section>
      </div>

      <section className="menu section" ref={refs.MenuMenu}>
        <div className="title">
          <h2>Naše menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>

      <section className="contact section" ref={refs.ContactContact}>
        <div className="contact-grid">
          <div className="contact-pic"><img className="contact-img" src="./images/contact.jpg" alt="contact"/></div>
          <div className="contact-info">
            <div className="contact-info-box">
              <h3>Super kavárna</h3>
              <p><b>Březinova 22/471</b><br/>Praha 8 - Karlín, 186 00</p>
              <p>tel.: <b>+420 789 456 123</b> <br/>
                mail: <b>superkavarna@gmail.com</b></p>
              <p>Otevírací doba:<br/>Po-Pá: 8:30 - 22:00<br/>So: 9:00 - 18:00</p>
              <p className="p-small">Rezervace přijímáme pouze telefonicky na čísle <b>+420 728 789 321</b><br/>Přijímáme platby kartou.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="my-footer"></footer>
    </main>
      )}
      </ScrollNavigation>
  );
}

export default App;
