import { useRef, useState, useEffect } from "react";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.scss";
import {
  FaHeart, // Для вас
  FaTv, // Сериалы
  FaFilm, // Фильмы
  FaChild, // Детям
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [menuActive, setMenuActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие поиска по клику вне области
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchActive &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setSearchActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchActive]);

  useEffect(() => {
    const handleClickOutsideMenu = (e: MouseEvent) => {
      if (
        menuActive &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(`.${styles.menuButton}`)
      ) {
        setMenuActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideMenu);
  }, [menuActive]);

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav className={styles.nav}>
          <div className={styles.left}>
            {/* Кнопка открытия мобильного меню */}
            <button
              className={`${styles.menuButton} ${menuActive ? styles.menuButtonActive : ""}`}
              onClick={() => setMenuActive((v) => !v)}
              aria-label={menuActive ? "Закрыть меню" : "Открыть меню"}
            >
              {menuActive ? <FaTimes size="1em" /> : <FaBars size="1em" />}
            </button>

            <NavLink to={"#"} className={styles.logo}>
              Сома-Кино
            </NavLink>
          </div>

          <div className={styles.center}>
            {!searchActive && (
              <>
                <div className={styles.links}>
                  <NavLink to={"#"}>Для вас</NavLink>
                  <NavLink to={"#"}>Сериалы</NavLink>
                  <NavLink to={"#"}>Фильмы</NavLink>
                  <NavLink to={"#"}>Детям</NavLink>
                </div>

                <button
                  className={styles.searchButton}
                  onClick={() => setSearchActive(true)}
                  aria-label="Поиск"
                >
                  <FaSearch size="1em" />
                </button>
              </>
            )}

            {!menuActive && searchActive && (
              <div className={styles.searchContainer} ref={containerRef}>
                <input
                  type="text"
                  placeholder="Поиск..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className={styles.searchInput}
                  autoFocus
                  spellCheck={false}
                />
                <div className={styles.searchResults}>searchResults</div>
              </div>
            )}
          </div>

          <div className={styles.actions}>
            <NavLink
              className={styles.profileLink}
              aria-label="Профиль"
              to={"#"}
            >
              <FaUser size="1em" />
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Мобильное меню */}
      <div
        className={`${styles.mobileMenu} ${menuActive ? styles.mobileMenuActive : ""}`}
        ref={menuRef}
      >
        <nav className={styles.mobileNav}>
          <NavLink to={"#"} onClick={() => setMenuActive(false)}>
            <FaHeart size="1em" />
            Для вас
          </NavLink>
          <NavLink to={"#"} onClick={() => setMenuActive(false)}>
            <FaTv size="1em" />
            Сериалы
          </NavLink>
          <NavLink to={"#"} onClick={() => setMenuActive(false)}>
            <FaFilm size="1em" />
            Фильмы
          </NavLink>
          <NavLink to={"#"} onClick={() => setMenuActive(false)}>
            <FaChild size="1em" />
            Детям
          </NavLink>
          <button
            className={styles.searchButton}
            onClick={() => setSearchActive(true)}
            aria-label="Поиск"
          >
            <FaSearch size="1em" />
            <span>Поиск</span>
          </button>
        </nav>

        {menuActive && searchActive && (
          <div className={styles.searchContainer} ref={containerRef}>
            <input
              type="text"
              placeholder="Поиск..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
              autoFocus
              spellCheck={false}
            />
            <div className={styles.searchResults}></div>
          </div>
        )}
      </div>

      {/* Затемнение фона при открытом меню */}
      {menuActive && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuActive(false)}
        ></div>
      )}
    </header>
  );
}
