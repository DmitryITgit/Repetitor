import { motion } from 'framer-motion';
import styles from './Button.module.css';

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `${styles.button} ${variants[variant] || variants.primary} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        <span className={styles.shine} />
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      <span className={styles.shine} />
      {children}
    </motion.button>
  );
}
