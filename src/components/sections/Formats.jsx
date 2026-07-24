import {
  Video,
  MapPin,
  UserCheck,
  FileCheck,
  BarChart3,
} from 'lucide-react';
import { formats } from '../../data/content';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './Formats.module.css';

const iconMap = {
  Video,
  MapPin,
  UserCheck,
  FileCheck,
  BarChart3,
};

export default function Formats() {
  return (
    <section className={`section ${styles.formats}`} id="formats">
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className="sectionLabel">{formats.label}</span>
          <h2 className="sectionTitle">{formats.title}</h2>
          <p className="sectionSubtitle">{formats.subtitle}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {formats.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <article className={styles.card}>
                  <div className={styles.number}>{String(i + 1).padStart(2, '0')}</div>
                  <div className={styles.iconWrap}>
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
