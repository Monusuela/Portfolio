import React from 'react';
import PortfolioStyle from './Pages.module.scss';

const Portfolio = () => {
  return (
    <div>
      <article className={PortfolioStyle['article']}>
        <h2 className={PortfolioStyle['title-2']}>Мои работы</h2>

        <section className={PortfolioStyle['article-item']}>
          <h3 className={PortfolioStyle['title-3']}>Верстка макета Mersedes</h3>

          <div className={PortfolioStyle['article-item-image']}>
            <img
              src="https://monusuela.github.io/Mersedes/img/design/interior02.jpg"
              alt="Верстка макета Mersedes"
            />
          </div>

          <p className={PortfolioStyle['article-item-text']}>
            Верстка многостраничного сайта для турагентства.
          </p>

          <a
            href="https://monusuela.github.io/Mersedes/"
            target="_blank"
            className={PortfolioStyle['article-item-link']}
          >
            Смотреть работу
          </a>
        </section>
      </article>
    </div>
  );
};

export default Portfolio;
