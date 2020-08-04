import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/51387764?s=460&u=d253e2ec786bb2cbd0e3a2ab3b52ba30a5e79e99&v=4"
          alt="Geovani Ragazzi"
        />
        <div>
          <strong>Geovani Ragazzi</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Aulas de Química bem estruturadas e didáticas.
        <br /> <br />
        Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
        Pague em até 12x. Faça o ENEM com a melhor preparação.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 25,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
