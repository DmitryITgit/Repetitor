import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faq } from '../../data/content';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className="container">
        <div className={styles.layout}>
          <ScrollReveal className={styles.header}>
            <span className="sectionLabel">{faq.label}</span>
            <h2 className="sectionTitle">{faq.title}</h2>
          </ScrollReveal>

          <div className={styles.list}>
            {faq.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={item.question} delay={i * 0.06}>
                  <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                    <button
                      className={styles.question}
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className={styles.icon}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className={styles.answerWrap}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className={styles.answer}>{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
