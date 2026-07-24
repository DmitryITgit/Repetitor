import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ZoomIn } from 'lucide-react';
import { certificates } from '../../data/content';
import { images } from '../../data/images';
import ScrollReveal from '../ui/ScrollReveal';
import Lightbox from '../ui/Lightbox';
import styles from './Certificates.module.css';

export default function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const lightboxImages = certificates.items.map((item, i) => ({
    src: images.certificates[i],
    alt: item.alt,
    title: item.title,
  }));

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navigateLightbox = (dir) => {
    setLightboxIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return lightboxImages.length - 1;
      if (next >= lightboxImages.length) return 0;
      return next;
    });
  };

  return (
    <section className={`section ${styles.certificates}`} id="certificates">
      <div className={styles.decor} aria-hidden="true">
        <Award size={120} strokeWidth={0.5} />
      </div>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className="sectionLabel">{certificates.label}</span>
          <h2 className="sectionTitle">{certificates.title}</h2>
          <p className="sectionSubtitle">{certificates.subtitle}</p>
        </ScrollReveal>

        <div className={styles.gallery}>
          {certificates.items.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <motion.button
                className={styles.item}
                onClick={() => openLightbox(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.imageWrap}>
                  <img src={images.certificates[i]} alt={item.alt} loading="lazy" />
                  <div className={styles.overlay}>
                    <ZoomIn size={28} />
                    <span>{item.title}</span>
                  </div>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </section>
  );
}
