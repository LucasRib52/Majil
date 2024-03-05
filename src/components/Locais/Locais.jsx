import style from "./Locais.module.css";

export function Locais () {
    return (
        <div className={style.Locaisarea}>
            <div className={style.Locais}>
                <div className={style.Locaistext}>
                    <h1>Atendemos todo o Brasil. <br/>E aí, vamos começar?</h1>
                    <p>Escolha um plano e inicie agora o seu cadastro digital ou converse <br/> com
                    nossos especialistas contábeis.</p>
                <button
                    className={style.buttonLocais}
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
        </div>
    )
}