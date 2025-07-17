import React from 'react';
import Link from 'next/link'
import styles from './Accomplishments.module.scss';

const accomplishments = [
  {
    id: 1,
    title: "Inaugural Blockchain Conference 2022",
    description: "Successfully hosted the first-ever Buildspace Africa blockchain conference, bringing together Web3 enthusiasts, developers, and innovators across the continent.",
    date: "January 2022",
    icon: "🎯",
    linkType: 'internal',
    link: '/events/1'
  },
  {
    id: 2,
    title: "Partnership with Learnable",
    description: "Established a strategic partnership with Learnable to launch a comprehensive Web3 track, providing structured learning paths for African developers entering the blockchain space.",
    date: "2022-Present",
    icon: "🤝",
    linkType: 'external',
    link: 'https://x.com/_learnable/status/1592542272368701440'
  },
];

export function Accomplishments() {
  return (
    <section className={styles.accomplishments}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span>Accomplishments</span></h2>
          <p className={styles.subtitle}>
            Milestones that define our journey in building Africa's Web3 ecosystem
          </p>
        </div>
        
        <div className={styles.grid}>
          {accomplishments.map((accomplishment) => (
            <div key={accomplishment.id}>
              {accomplishment.linkType === 'external' ? (
                <a 
                  href={accomplishment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  <div className={styles.card}>
                    <div className={styles.cardIcon}>
                      <span>{accomplishment.icon}</span>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{accomplishment.title}</h3>
                      <p className={styles.cardDescription}>{accomplishment.description}</p>
                      <span className={styles.cardDate}>{accomplishment.date}</span>
                    </div>
                  </div>
                </a>
              ) : (
                <Link href={accomplishment.link || ''}>
                  <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <span>{accomplishment.icon}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{accomplishment.title}</h3>
                    <p className={styles.cardDescription}>{accomplishment.description}</p>
                    <span className={styles.cardDate}>{accomplishment.date}</span>
                  </div>
                </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}