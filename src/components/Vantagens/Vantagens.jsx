import style from "./Vantagens.module.css";
import Group from "../../assets/Group.png";
import Medalha from "../../assets/medalha.png";
import Predio from "../../assets/predio.png";

export function Vantagens() {
    return (
        <div className={style.vantagem}>
            <div className={style.textos}>
                <h4>Vantagens</h4>
                <br />
                <h2>Contabilidade completa com contadores de verdade para <br /> Grande,
                    Pequena empresa, Micro e MEI.</h2>
            </div>

            <div className={style.demo}>
                <div className={style.group}>
                    <div className={style.fotos}>
                        <img src={Group} alt="" />
                    </div>
                    <h4>Contabilidade online</h4>
                    <p>Contabilidade via internet que <br /> fornece a sua contabilidade <br />completa.</p>
                </div>


                <div className={style.group}>
                    <div className={style.fotos}>
                        <img src={Medalha} alt="" />
                    </div>
                    <h4>CRC Habilitado</h4>
                    <p>Nosso CRC 06-9863/O9 está <br /> habilitado em todas as regiões que <br />atendemos.</p>
                </div>

                <div className={style.group}>
                    <div className={style.fotos}>
                        <img src={Predio} alt="" />
                    </div>
                    <h4>Empresa Fiscalizada</h4>
                    <p>Cumprimos todas as normas e a <br /> legislação vigente. Atestado pelo <br /> CRC (Conselho Regional de <br /> Contabilidade).</p>
                </div>

            </div>
        </div>
    )
}