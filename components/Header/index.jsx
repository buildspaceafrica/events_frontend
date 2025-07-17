import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '../Logo';
import styles from './header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/#team' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`${
                  router.pathname === item.href ? styles.active : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`${styles.mobileNavLink} ${
                router.pathname === item.href ? styles.active : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}