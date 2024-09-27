import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
       <nav>
      <Link href="/" id="link">Home</Link>
      <Link href="/docs" id="link">Docs</Link>
      <Link href="/blog" id="link">Blog</Link>
      <Link href="/contribute" id="link">Contribute</Link>
    </nav>
    </header>
  );
};

export default Header;