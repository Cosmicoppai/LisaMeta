import React from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, onClick, children }) => {
  if (href) {
    return (
      <a href={href} className={styles.button}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;