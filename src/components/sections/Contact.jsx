import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send, } from 'lucide-react';
import { contact } from '../../data/content';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import styles from './Contact.module.css';
import { FaVk } from 'react-icons/fa6';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactLinks = [
    {
      icon: Phone,
      label: 'Телефон',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\D/g, '')}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: contact.phone,
      href: `https://wa.me/${contact.whatsapp}`,
    },
    {
      icon: FaVk,
      label: 'ВКонтакте',
      value: contact.vk,
      href: `https://vk.com/${contact.vk}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className="sectionLabel">{contact.label}</span>
          <h2 className="sectionTitle">{contact.title}</h2>
          <p className="sectionSubtitle">{contact.subtitle}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal direction="left" className={styles.info}>
            <div className={styles.links}>
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.linkIcon}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className={styles.linkLabel}>{link.label}</span>
                      <span className={styles.linkValue}>{link.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGlow} aria-hidden="true" />
              <div className={styles.field}>
                <input
                  type="text"
                  name="name"
                  placeholder={contact.form.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <input
                  type="tel"
                  name="phone"
                  placeholder={contact.form.phonePlaceholder}
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <select name="subject" value={form.subject} onChange={handleChange} required>
                  <option value="" disabled>
                    {contact.form.subjectPlaceholder}
                  </option>
                  <option value="russian">Русский язык</option>
                  <option value="english">Английский язык</option>
                  <option value="biology">Биология</option>
                  <option value="multiple">Несколько предметов</option>
                </select>
              </div>
              <div className={styles.field}>
                <textarea
                  name="message"
                  placeholder={contact.form.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <Button type="submit" variant="primary" className={styles.submit}>
                {contact.form.submit}
              </Button>

              {submitted && (
                <motion.p
                  className={styles.success}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {contact.form.success}
                </motion.p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
