import React from 'react';
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';
import style from './FaleConosco.module.css';

export function FaleConosco() {
  const enviarEmail = async (e) => {
    e.preventDefault();

    emailjs.init("oeGgwqgYf4Zbx7kpi"); // Substitua com o seu user_id

    const templateParams = {
      nome: e.target.nome.value,
      email: null,  // Defina como uma string vazia ou null para não enviar para o cliente
      telefone: e.target.telefone.value,
      assunto: e.target.assunto.value,
      mensagem: e.target.mensagem.value,
      emailEmpresa: "majlassessoriaempresa@gmail.com", // Substitua com o e-mail da empresa
    };

    // Substitua 'service_woddsz8' e 'template_abba53y' com suas informações
    await emailjs.send('service_ocp4ngn', 'template_lnrmshc', templateParams);

    alert('E-mail enviado com sucesso!');

    // Limpar os campos do formulário
    e.target.reset();
  };

  return (
    <div className={style.FaleConosco}>
      <div className={style.text}>
        <h1>Fale Conosco</h1>
        <p>Não fique com dúvidas! Entre em contato com a Majil que resolvemos tudo com você.</p>
      </div>

      <div className={style.quadrado}>
        <form className={style.quadradoconteudo} onSubmit={enviarEmail}>
          <p>Nome</p>
          <input type="text" name="nome" required />

          <p>E-mail</p>
          <input type="email" name="email" required />

          <p>Telefone</p>
          <InputMask
            mask="(99) 99999-9999"
            maskChar={null}
            name="telefone"
            required
          >
            {(inputProps) => <input {...inputProps} />}
          </InputMask>

          <p>Assunto</p>
          <input type="text" name="assunto" required />

          <p>Mensagem</p>
          <textarea name="mensagem" rows="4" required />

          <button type="submit" className={style.falebutton}>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
