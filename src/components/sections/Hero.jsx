import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { hero } from '../../data/content';
import { images } from '../../data/images';
import Button from '../ui/Button';
import AnimatedCounter from '../ui/AnimatedCounter';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section className={styles.hero} ref={ref} id="hero">
      <div className={styles.bg}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gradientOrb3} />
        <div className={styles.gridPattern} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div className={styles.content} style={{ y: contentY, opacity }}>
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles size={14} />
            {hero.badge}
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {hero.title}
            <span className={styles.highlight}>{hero.titleHighlight}</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Button href="#contact" variant="primary">
              {hero.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button href="#about" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </motion.div>

          <ScrollReveal delay={0.6}>
            <div className={styles.stats}>
              {hero.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>

        <motion.div className={styles.visual} style={{ y: imageY }}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} />
            <motion.img
              src={images.teacher}
              alt="Преподаватель"
              className={styles.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              className={styles.floatingCard}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className={styles.cardEmoji}>📚</span>
              <div>
                <strong>120+ учеников</strong>
                <small>успешно сдали ОГЭ</small>
              </div>
            </motion.div>
            <motion.div
              className={styles.floatingBadge}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              ⭐ 4.9 рейтинг
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
