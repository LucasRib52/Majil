import style from "./Planos.module.css";
import { CheckCircle } from "@phosphor-icons/react";

export function Planos () {

    const handleButtonClick = (link) => {
        // Adicione aqui a lógica para redirecionar para o link do WhatsApp
        window.location.href = link;
    };

    return (
        <div className={style.planos}>
            <div className={style.planotext}>
                <h1>Encontre o plano ideal para o seu negócio</h1>
                <p>Não importa o que irá contratar: você vai contar com um time de contadores experts dedicados, que <br/> vão cuidar da sua contabilidade como deve ser.</p>
            </div>

            <div className={style.selecionarplanos}>
                <div className={style.todosplanos}>

                <div className={style.planosprincipais}>
                    <h6>A partir de</h6>
                        <h1>Grátis*</h1>
                        <h2>Abrir empresa</h2>
                        <p> <CheckCircle size={16} color="#429462" /> Registro do CNPJ</p>
                        <p> <CheckCircle size={16} color="#429462" /> Cadastro do Alvará</p>
                        <p> <CheckCircle size={16} color="#429462" /> Autorização para emitir NF</p>
                        <p> <CheckCircle size={16} color="#429462" /> Opção pelo simples nacional</p>
                        <span>O valor terá acréscimo de tarifa bancária.</span>
                        <button
                            className={style.buttonplanos}
                            onClick={() => handleButtonClick("https://api.whatsapp.com/send?phone=5521998175624&text=Ol%C3%A1%20vim%20do%20Google,%20e%20queria%20saber%20mais%20sobre%20o%20plano%20gr%C3%A1tis.")}
                        >
                            Escolher Plano
                    </button>
                    </div>

                    <div className={style.planosprincipais}>
                        <h6>A partir de</h6>
                        <h1>R$ 498,90</h1>
                        <h2>Contabilidade</h2>
                        <p> <CheckCircle size={16} color="#429462" /> Emissão de impostas</p>
                        <p> <CheckCircle size={16} color="#429462" /> Suporte feito por contadores</p>
                        <p> <CheckCircle size={16} color="#429462" /> Pró-labore</p>
                        <p> <CheckCircle size={16} color="#429462" /> Departamento pessoal </p>
                        <span>O valor terá acréscimo de tarifa bancária.</span>
                        <button
                            className={style.buttonplanos}
                            onClick={() => handleButtonClick("https://api.whatsapp.com/send?phone=5521998175624&text=Ol%C3%A1%20vim%20do%20Google,%20e%20queria%20saber%20mais%20sobre%20o%20plano%20Contabilidade.")}
                        >
                            Escolher Plano
                    </button>
                    </div>

                    <div className={style.circulopremium}>
                    <div className={style.planopremium}>
                        <button className={style.buttonpopular}>MAIS POPULAR</button>
                        <h6>A partir de</h6>
                        <h1>R$ 696,90</h1>
                        <h2>Contabilidade Premium</h2>
                        <p> <CheckCircle size={16} color="#3ed016" /> Balanço e DRE</p>
                        <p> <CheckCircle size={16} color="#3ed016" /> Envio de NF-e para a plataforma</p>
                        <p> <CheckCircle size={16} color="#3ed016" /> Emissão de impostos </p>
                        <p> <CheckCircle size={16} color="#3ed016" /> Suporte feito por contadores </p>
                        <p> <CheckCircle size={16} color="#3ed016" /> Pró-labore </p>
                        <p> <CheckCircle size={16} color="#3ed016" /> Departamento Pessoal </p>
                        <span>O valor terá acréscimo de tarifa bancária.</span>
                        <button
                            className={style.buttonplanos}
                            onClick={() => handleButtonClick("https://api.whatsapp.com/send?phone=5521998175624&text=Ol%C3%A1%20vim%20do%20Google,%20e%20queria%20saber%20mais%20sobre%20o%20plano%20Contabilidade%20premium.")}
                        >
                            Escolher Plano
                    </button>
                    </div>
                    </div>

                    <div className={style.planosprincipais}>
                        <h6>A partir de</h6>
                        <h1>R$ 89,90</h1>
                        <h2>MEI</h2>
                        <p> <CheckCircle size={16} color="#429462" /> Contabilidade online</p>
                        <p> <CheckCircle size={16} color="#429462" /> Suporte</p>
                        <p> <CheckCircle size={16} color="#429462" /> Sem funcionários</p>
                        <p> <CheckCircle size={16} color="#429462" /> Faturamento até R$ 81mil/ano </p>
                        <span>O valor terá acréscimo de tarifa bancária.</span>
                        <button
                            className={style.buttonplanos}
                            onClick={() => handleButtonClick("https://api.whatsapp.com/send?phone=5521998175624&text=Ol%C3%A1%20vim%20do%20Google%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20plano%20MEI.")}
                        >
                            Escolher Plano
                    </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}