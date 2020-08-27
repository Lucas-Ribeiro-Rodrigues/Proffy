import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/20904531?s=460&u=945e3ea4c401d77604ce1f60b6845d4655ed2b3e&v=4" alt="Lucas Ribeiro"/>
            <div>
              <strong>Lucas Ribeiro</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Entusiasta do symbolab e de polinômios
            <br/><br/>
            Gosta muito de férias
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 100,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem