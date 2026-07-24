import { motion } from 'framer-motion';
import { BookOpen, Globe, Leaf, ArrowUpRight, GraduationCap } from 'lucide-react';
import { subjects } from '../../data/content';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './Subjects.module.css';

const iconMap = { BookOpen, Globe, Leaf, GraduationCap };

const accentStyles = {
  purple: styles.purple,
  blue: styles.blue,
  green: styles.green,
  orange: styles.orange
};

export default function Subjects() {
  return (
    <section className={`section ${styles.subjects}`} id="subjects">
      <div className={styles.bgOrb} aria-hidden="true" />
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className="sectionLabel">{subjects.label}</span>
          <h2 className="sectionTitle">{subjects.title}</h2>
          <p className="sectionSubtitle">{subjects.subtitle}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {subjects.items.map((subject, i) => {
            const Icon = iconMap[subject.icon];
            return (
              <ScrollReveal key={subject.id} delay={i * 0.15}>
                <motion.article
                  className={`${styles.card} ${accentStyles[subject.accent]}`}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className={styles.cardGlow} />
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrap}>
                      <Icon size={28} />
                    </div>
                    <motion.span
                      className={styles.arrow}
                      whileHover={{ x: 4, y: -4 }}
                    >
                      <ArrowUpRight size={20} />
                    </motion.span>
                  </div>
                  <h3 className={styles.cardTitle}>{subject.title}</h3>
                  <p className={styles.cardDesc}>{subject.description}</p>
                  <ul className={styles.topics}>
                    {subject.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
