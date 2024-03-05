import style from "./Online.module.css";
import { CheckCircle } from "@phosphor-icons/react";
import boneco from "../../assets/teste.png";

export function Online () {
    return (
        <div className={style.online}>
            <div className={style.onlinetext}>
                <h1>Como funciona sua contabilidade online</h1>
                <p>Contabilidade online com a gente é assim: prática, simples, econômica e muito mais próxima de você. <br/> 
                Com apenas algumas horas por mês, você tem tudo resolvido.</p>
            </div>

            <div className={style.onlinecliente}>
                <div className={style.cliente1}>
                    <h2>O que você vai fazer</h2>
                    <p> <CheckCircle size={16} color="#429462" /> Enviar os arquivos de notas emitidos no mês anterior.</p>
                    <p> <CheckCircle size={16} color="#429462" /> Enviar toda a movimentação da empresa no mês anterior (pagamentos, extratos bancários, etc.). </p>
                    <p> <CheckCircle size={16} color="#429462" /> Enviar as informações dos seus funcionários e, caso haja alguma alteração como férias, por exemplo. </p>

                    <img src={boneco} alt="" />
                </div>
                     
                <div className={style.line}></div>

                <div className={style.cliente2}>
                    <h2>O que nos vamos fazer</h2>
                    <p> <CheckCircle size={16} color="#429462" /> Calculamos as guias de impostos, folhas de pagamento e pró-labore.</p>
                    <p> <CheckCircle size={16} color="#429462" /> Mantemos a sua empresa em dia com todas as obrigações do governo. </p>
                    <p> <CheckCircle size={16} color="#429462" /> Fazemos e assinamos relatórios contábeis como balanço, DRE e outros para você ficar sempre <br/>tranquilo. </p>
                    <p> <CheckCircle size={16} color="#429462" /> Disponibilizamos na plataforma todos os seus documentos para você acessar quando e onde <br/> quiser. </p>
                </div>
            </div>

            <button
                className={style.onlinebutton}
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

    )
}