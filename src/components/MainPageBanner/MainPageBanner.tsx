import { Link } from "react-router-dom";
import styles from "./MainPageBanner.module.scss";


export default function MainPageBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Фильмы и сериалы,<br />премиум-телеканалы<br />по подписке</h1>
          <p>Бесплатно первый месяц</p>
          <Link className={styles.button} to={'/sub'}>Попробовать бесплатно</Link>
        </div>
      </div>
    </section>
  );
}
