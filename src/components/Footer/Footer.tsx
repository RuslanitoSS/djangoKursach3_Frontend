import styles from "./Footer.module.scss";

import {
  FaVk,
  FaTelegramPlane,
  FaYoutube,
  FaTv,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className="wrapper">
        <hr className={styles["footer__divider"]} />
        <div className={styles["footer__top"]}>
          <div className={styles["footer__socials"]}>
            <a href="#">
              <FaVk size="1.5em"/>
            </a>
            <a href="#">
              <FaTelegramPlane size="1.5em"/>
            </a>
            <a href="#">
              <FaYoutube size="1.5em"/>
            </a>
            <a href="#">
              <FaTv size="1.5em"/>
            </a>
            <a href="#">
              <FaTiktok size="1.5em"/>
            </a>
          </div>

          <div className={styles["footer__support"]}>
            <span>Мы всегда готовы вам помочь.</span>
            <a href="#" className={styles["footer__link"]}>
              Задать вопрос
            </a>
          </div>
        </div>

        <hr className={styles["footer__divider"]} />

        <div className={styles["footer__bottom"]}>
          <div className={styles["footer__info"]}>
            <p>© 2003–2024 Не_Кинопоиск. 18+</p>
            <p>
              Пусть мне твердят идёт война, всюду боль и насилие. <br />
              Моя жизнь полным-полна, кругом люди красивые. <br />
              В стиле сома чилю дома, как в аквариуме сом. <br />
              Нет больше драмы, мама, жизнь моя как сладкий сом.
            </p>
          </div>
          <a href="#" className={styles["footer__company"]}>
            Проект компании Сома-кола
          </a>
        </div>
      </div>
    </footer>
  );
}
