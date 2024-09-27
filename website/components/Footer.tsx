import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; 2022-{currentYear} LiSA.</p>
    </footer>
  );
};

export default Footer;
