// Footer.jsx

import style from "./Footer.module.css";
import { InstagramLogo, FacebookLogo, GoogleLogo } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

export function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.Footer}>

      <div className={style.footergroups}>
        <div className={style.group}>
          <h4>Acesso rápido</h4>
          <Link onClick={scrollToTop} className={style.inicio} to="/">
            Início
          </Link>
          <Link onClick={scrollToTop} to="/sobrenos">
            Sobre nós
          </Link>
        </div>

        <div className={style.group}>
          <h4>Planos</h4>
          <a href="https://wa.me/5521964046882?text=Ola+vi+os+planos+no+site+da+Majil%2C+Gostaria+de+abrir+uma+empresa.">Abrir empresa</a>
          <a href="https://wa.me/5521964046882?text=Ola+vi+os+planos+no+site+da+Majil%2C+Gostaria+de+saber+mais+sobre+o+plano+de+contabilidade.">Contabilidade</a>
          <a href="https://wa.me/5521964046882?text=Ola+vi+os+planos+no+site+da+Majil%2C+Gostaria+de+saber+mais+sobre+o+plano+de+contabilidade+premium.">Contabilidade Premium</a>
          <a href="https://wa.me/5521964046882?text=Ola+vi+os+planos+no+site+da+Majil%2C+Gostaria+de+saber+sobre+o+plano+de+MEI.">MEI</a>
        </div>

        <div className={style.group}>
          <h4>Segurança</h4>
          <a href="https://www3.cfc.org.br/SPW/ConsultaNacionalCFC/cfc/consultaprofissional">Registro no CRC</a>
          <Link to="/privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</Link>
          <Link to="/termos" target="_blank" rel="noopener noreferrer">Termos de uso</Link>
        </div>

        <div className={style.group}>
          <h4>Atendimento</h4>
          <p>Segunda a sexta das 08:00 as 17:00.</p>
          <Link onClick={scrollToTop} to="/faleconosco">
            Fale Conosco
          </Link>
        </div>

        <div className={style.group}>
          <h4>Redes Sociais</h4>
          <a href="https://www.instagram.com/majilassessoria/?igsh=MWJrZGMyd2dkdDZvNA%3D%3D&utm_source=qr"> <InstagramLogo size={16} color="#000"/>  Majilassessoria</a>
          <a href="https://www.facebook.com/majilassessoria/?locale=pt_BR"> <FacebookLogo size={16} color="#000"/>  Majilassessoria</a>
          <a href="https://www.google.com/search?q=majil&rlz=1C1VDKB_pt-PTBR1086BR1086&oq=majil&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCECMYJzIOCAMQABgKGEMYgAQYigUyCQgEEAAYChiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPdIBBzkwOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"> <GoogleLogo size={16} color="#000"/>  Majilassessoria</a>
          <p></p>
        </div>
      </div>
    </div>
  );
}
