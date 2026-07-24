import { siteInfo, navLinks, footer as footerData } from '../../data/content';
import { GraduationCap, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <span className={styles.logoMark}>
                <GraduationCap size={22} />
              </span>
              <div>
                <strong>{siteInfo.name}</strong>
                <p>{footerData.description}</p>
              </div>
            </div>
          </div>

          <nav className={styles.nav}>
            <h4>Навигация</h4>
            <ul>
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.nav}>
            <h4>Ещё</h4>
            <ul>
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <h4>Связаться</h4>
            <a href="#contact">Записаться на занятие</a>
            <a href="mailto:hello@elena-tutor.ru">hello@elena-tutor.ru</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{footerData.copyright}</p>
          <button className={styles.topBtn} onClick={scrollToTop} aria-label="Наверх">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
