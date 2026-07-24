import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '../../data/content';
import { images } from '../../data/images';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.items.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.items.length) % reviews.items.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % reviews.items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const review = reviews.items[current];

  return (
    <section className={`section ${styles.reviews}`} id="reviews">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className="sectionLabel">{reviews.label}</span>
          <h2 className="sectionTitle">{reviews.title}</h2>
          <p className="sectionSubtitle">{reviews.subtitle}</p>
        </ScrollReveal>

        <div className={styles.slider}>
          <button className={styles.navBtn} onClick={prev} aria-label="Предыдущий отзыв">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.slideContainer}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={current}
                className={styles.card}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Quote className={styles.quoteIcon} size={40} />
                <p className={styles.text}>{review.text}</p>
                <div className={styles.author}>
                  <img
                    src={images.students[current]}
                    alt={review.name}
                    className={styles.avatar}
                  />
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                    <div className={styles.rating}>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Следующий отзыв">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {reviews.items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.active : ''}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
