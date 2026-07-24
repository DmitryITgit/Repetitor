import {
  Heart,
  Target,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { about } from '../../data/content';
import { images } from '../../data/images';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './About.module.css';

const iconMap = { Heart, Target, Sparkles, TrendingUp };

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          <ScrollReveal direction="left" className={styles.visual}>
            <div className={styles.imageFrame}>
              <div className={styles.imageAccent} />
              <img src={images.about} alt="О преподавателе" className={styles.image} />
              <div className={styles.experienceBadge}>
                <span className={styles.expNumber}>8</span>
                <span className={styles.expText}>лет опыта</span>
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.content}>
            <ScrollReveal>
              <span className="sectionLabel">{about.label}</span>
              <h2 className="sectionTitle">{about.title}</h2>
              <p className={styles.description}>{about.description}</p>
              <p className={styles.extended}>{about.extended}</p>
            </ScrollReveal>

            <div className={styles.reasons}>
              {about.reasons.map((reason, i) => {
                const Icon = iconMap[reason.icon];
                return (
                  <ScrollReveal key={reason.title} delay={i * 0.1}>
                    <div className={styles.reason}>
                      <div className={styles.reasonIcon}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3>{reason.title}</h3>
                        <p>{reason.text}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
