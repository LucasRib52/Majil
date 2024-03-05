// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Desenvolvido } from "./components/Desenvolvido/Desenvolvido";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Locais } from "./components/Locais/Locais";
import { Online } from "./components/Online/Online";
import { Vantagens } from "./components/Vantagens/Vantagens";
import { About } from "./components/about/About";
import { Planos } from "./components/planos/Planos";
import { FaleConosco } from "./components/faleConosco/FaleConosco";
import { Sobrenos } from './components/Sobrenos/Sobrenos';
import TermosDeUso from './components/Termos';
import PolíticaPrivacidade from './components/Privacidade';

import "./global.css";

const App = () => {
  return (
    <Router>
      <>
      
        <Routes>
          <Route path="/termos/*" element={<TermosDeUso />} />
          <Route path="/privacidade/*" element={<PolíticaPrivacidade />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/faleconosco" element={<FaleConosco />} />
                  <Route path="/sobrenos" element={<Sobrenos />} />
                  <Route path="/" element={<>
                    <About />
                    <Vantagens />
                    <section id="solucoes">
                      <Online />
                    </section>
                    <section id="planos">
                      <Planos />
                    </section>
                    <Locais />
                  </>} />
                </Routes>
                <footer>
                  <Footer />
                  <Desenvolvido />
                </footer>
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
