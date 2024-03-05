import style from "./Sobrenos.module.css";
import React from 'react';
import recepcao from "../../assets/recepcao.png";
import recepcao1 from "../../assets/recepcao2.png";
import reuniao from "../../assets/reuniao.png";
import certificado from "../../assets/certificado.png";
import adm from "../../assets/adm.png";
import adm2 from "../../assets/adm2.png";
import contabil from "../../assets/contabil.png";
import dp from "../../assets/dp.png";
import juridico from "../../assets/juridico.png";

export function Sobrenos() {
    return (
        <div className={style.sobrenosContainer}>
            <div className={style.aboutcontainer}>
                <div className={style.second}>
                    <h1>Somos experts em</h1>
                    <h1 style={{ color: 'var(--gray-400)' }}> resolver burocracias</h1>
                    <br />
                    <p>Com mais de 30 anos no mercado, a Majil Assessoria desde o início de sua trajetória buscou o compromisso de prestar um serviço de qualidade, aliando a técnica, profissionalismo e ética, mantendo uma relação de transparência e lealdade com os clientes.</p>
                    <p>Buscando manter um diferencial com os serviços personalizados que presta, visando observar as particularidades de forma individual e melhor assessorá-los e trazendo a cada ano que inicia – se inovações que colocam – se a disposição do mercado para melhor atender os clientes e manter um serviço de excelência.</p>
                    <p>A Majil Assessoria e Gestão Empresarial, inicialmente criada como escritorio individual em 1994 teve como fundado o SR° Marcos Fernandes Barbosa, contador, administrador de empresa, corretor e advogado. CRC:069863/O9, OAB/RJ:142.219, CRA/RJ:20-38243-0 .</p>
                    <p>Marcos Fernandes, ao longo de sua história sempre buscou fontes de investimento em tecnologia e aprimoramento profissional, visando assim um atendimento a empresas de variados portes e ramos de atividades. A Majil hoje solidificada constituída com um cunho familiar.  
                    </p>
                    <p>Está presente no mercado há mais de 30 anos, possuindo como seu maior patrimônio uma verdadeira integração entre seu fundador, diretores e colaboradores que ao longo dos anos desenvolveram o melhor do seu trabalho para que hoje a empresa adquirisse seu reconhecimento no mercado.</p>

                    
                </div>
            </div>

            <div className={style.novoContainer}>
                <div className={style.novotext}>
                    <h1>Inovação, segurança, confiança e o atendimento que <br /> a sua empresa merece</h1>
                    <p>A contabilidade perfeita é o pretexto para estar sempre ao lado do micro e pequeno empreendedor. Nossa <br /> consultoria é especializada no seu segmento. Nossos contadores têm as melhores soluções para o seu negócio.</p>
                </div>

                <div className={style.fotosescritorio}>
                <div className={style.fotoWrapper}>
                        <img src={adm} alt="" />
                        <div className={style.textOverlay}>Administração</div>
                    </div>

                    <div className={style.fotoWrapper}>
                        <img src={adm2} alt="" />
                        <div className={style.textOverlay}>Administração</div>
                    </div>

                    <div className={style.fotoWrapper}>
                        <img src={juridico} alt="" />
                        <div className={style.textOverlay}>Jurídico</div>
                    </div>

                    <div className={style.fotoWrapper}>
                        <img src={recepcao} alt="" />
                        <div className={style.textOverlay}>Recepção</div>
                    </div>
                    
                    <div className={style.fotoWrapper}>
                        <img src={recepcao1} alt="" />
                        <div className={style.textOverlay}>Recepção</div>
                    </div>

                    <div className={style.fotoWrapper}>
                        <img src={reuniao} alt="" />
                        <div className={style.textOverlay}>Sala de Reunião</div>
                    </div>

                    <div className={style.fotoWrapper}>
                        <img src={certificado} alt="" />
                        <div className={style.textOverlay}>Certificado Digital</div>
                    </div>

                    <div className={style.fotoWrapper}>
                        <img src={contabil} alt="" />
                        <div className={style.textOverlay}>Contabilidade</div>
                    </div>    

                    <div className={style.fotoWrapper}>
                        <img src={dp} alt="" />
                        <div className={style.textOverlay}>Departamento Pessoal</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
