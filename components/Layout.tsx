import React from 'react';
import Head from 'next/head';
import { Header } from './Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ 
  children, 
  title = "Buildspace Africa", 
  description = "Building the future of Web3 in Africa through education, community, and innovation." 
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <div className="container">
            <p>&copy; 2024 Buildspace Africa. Building the future of Web3 in Africa.</p>
          </div>
        </footer>
      </div>
    </>
  );
}