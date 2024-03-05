// Header.jsx

import React, { useState } from 'react';
import style from "./Header.module.css";
import { List, X } from "@phosphor-icons/react";
import { Link } from 'react-router-dom'; // Certifique-se de que está usando react-router-dom
import logomajil from "../../assets/Logo.png";

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobile(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobile(false);
  };

  return (
    <nav className={`${style.navbar} ${isMobile ? style.mobileMenu : ''}`}>
      <Link to="/" onClick={scrollToTop}>
        <img
          src={logomajil}
          className={style.Logo}
          alt="Logo"
        />
      </Link>
      <ul
        className={`${isMobile ? style.navlinksmobile : style.navlinks}`}
        onClick={() => setIsMobile(false)}
      >
        <Link onClick={scrollToTop} className={style.inicio} to="/">
          Início
        </Link>
        <li onClick={() => scrollToSection("planos")} className={style.planos}>
          Planos
        </li>
        <Link onClick={scrollToTop} className={style.sobrenos} to="/sobrenos">
          Sobre Nós
        </Link>
        <a href='https://api.whatsapp.com/send?phone=5521964331889&text=Ol%C3%A1%20vim%20do%20site%20da%20majil%20e%20queria%20saber%20mais%20informa%C3%A7%C3%B5es...' className={style.solucoes}>
          Jurídico
        </a>
        <Link onClick={scrollToTop} className={style.faleconosco} to="/faleconosco">
          Fale Conosco
        </Link>
      </ul>

      <button
        className={style.mobilemenuicon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <X size={20} /> : <List size={20} />}
      </button>
    </nav>
  );
}
