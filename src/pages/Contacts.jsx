import React from 'react'
import ContactStyle from "./Pages.module.scss";

const Contacts = () => {
  return (
    <div>
      <section className={ContactStyle["contact"]}>
        <h2 className={ContactStyle["title-2"]}>
          Контакты
        </h2>

        <p className={ContactStyle["contact-text"]}>
          Напишите мне на почту mohinurshakirdjanova@gmail.com и мы оперативно обсудим ваш проект.
        </p>

        <h3 className={ContactStyle["title-3"]}>
          Мои профили в социальных сетях:
        </h3>

        <ul className={ContactStyle["contact-list"]}>

          <li>
            <a href="#" target='_blank'>Вконтакте</a>
          </li>

          <li>
            <a href="#" target='_blank'>Instagram</a>
          </li>

          <li>
            <a href="#" target='_blank'>Facebook</a>
          </li>

          <li>
            <a href="#" target='_blank'>LinkedIn</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Contacts