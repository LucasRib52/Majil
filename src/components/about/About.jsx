import { CheckCircle } from "@phosphor-icons/react";
import style from "./About.module.css"

export function About() {
    return (
        <div  className={style.aboutcontainer}>
            <div className={style.second}>
                <h1>Contabilidade Online</h1>
                <h1 style={{color:'var(--gray-400)'}}>Rápida e Descomplicada</h1>
                <br/>
                <p>Somos especializados em empresas de Grande, Médio e Pequeno Porte.
                Nosso objetivo é acabar com a burocracia, criando uma relação moderna da sua empresa com o contador.</p>
                <p> <CheckCircle size={16} color="#429462" /> Tenha sua contabilidade 100% online.</p>
                <p> <CheckCircle size={16} color="#429462" /> Economize com planos a partir de R$ 89,90/mês. </p>
                <button
                className={style.buttonheader2}
                onClick={() => {
                    const planosSection = document.getElementById('planos');
                    if (planosSection) {
                    planosSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    }}
                    >
                    Conheça nossos planos
                    </button>
            </div>
        </div>
    )
}