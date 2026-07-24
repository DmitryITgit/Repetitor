import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useCallback } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.content}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.close} onClick={onClose} aria-label="Закрыть">
            <X size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button
                className={`${styles.nav} ${styles.navPrev}`}
                onClick={() => onNavigate(-1)}
                aria-label="Предыдущее"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                className={`${styles.nav} ${styles.navNext}`}
                onClick={() => onNavigate(1)}
                aria-label="Следующее"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <motion.img
            key={currentIndex}
            src={current.src}
            alt={current.alt}
            className={styles.image}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />

          {current.title && (
            <p className={styles.caption}>{current.title}</p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
