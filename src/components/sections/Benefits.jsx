import {
  User,
  Laptop,
  GraduationCap,
  MessageCircle,
  Monitor,
  Shield,
} from 'lucide-react';
import { benefits } from '../../data/content';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './Benefits.module.css';

const iconMap = {
  User,
  Laptop,
  GraduationCap,
  MessageCircle,
  Monitor,
  Shield,
};

export default function Benefits() {
  return (
    <section className={`section ${styles.benefits}`} id="benefits">
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className="sectionLabel">{benefits.label}</span>
          <h2 className="sectionTitle">{benefits.title}</h2>
          <p className="sectionSubtitle">{benefits.subtitle}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {benefits.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <article className={styles.card}>
                  <div className={styles.iconWrap}>
                    <Icon size={24} />
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
