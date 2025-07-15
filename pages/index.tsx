import React from 'react';
import { Layout } from '../components/Layout';
import { Accomplishments } from '../components/Accomplishments';
import { Button } from '../components';
import styles from './index.module.scss';

const teamMembers = [
  {
    id: 1,
    name: "Chidiebere Ekennia",
    role: "Community Lead",
    image: "/images/team1.jpg",
    bio: "Passionate about building Web3 communities across Africa"
  },
  {
    id: 2,
    name: "Joshua Nwankwo",
    role: "Technical Lead",
    image: "/images/team2.jpg",
    bio: "Blockchain developer and educator"
  },
  {
    id: 3,
    name: "Community Member",
    role: "Developer Relations",
    image: "/images/team3.jpg",
    bio: "Connecting developers with Web3 opportunities"
  },
  {
    id: 4,
    name: "Community Member",
    role: "Content Creator",
    image: "/images/team4.jpg",
    bio: "Creating educational content for Web3 learning"
  }
];

export default function HomePage() {
  return (
    <Layout 
      title="Buildspace Africa - Building the Future of Web3 in Africa"
      description="Join Buildspace Africa in building the future of Web3 across the continent. Learn, build, and connect with fellow African developers in the blockchain space."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Building the Future of <span>Web3</span> in Africa
              </h1>
              <p className={styles.heroDescription}>
                Buildspace Africa is an extension of the global buildspace community, 
                dedicated to helping Africans explore Web3 and blockchain technology, 
                create amazing solutions, and improve Web3 adoption across the continent.
              </p>
              <div className={styles.heroActions}>
                <Button type="primary" text="Join Community" />
                <Button text="Learn More" />
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroPattern}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals Section */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower African developers and entrepreneurs with the knowledge, 
                tools, and community support needed to build innovative Web3 solutions 
                that address local and global challenges.
              </p>
            </div>
            
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🔮</div>
              <h3>Our Vision</h3>
              <p>
                To establish Africa as a leading hub for Web3 innovation, where 
                talented developers create groundbreaking blockchain applications 
                that drive economic growth and social impact.
              </p>
            </div>
            
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Our Goals</h3>
              <p>
                Foster a thriving Web3 ecosystem through education, mentorship, 
                community building, and creating opportunities for African developers 
                to participate in the global blockchain economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <Accomplishments />

      {/* Team Section */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.teamHeader}>
            <h2 className={styles.teamTitle}>Meet the <span>Team</span></h2>
            <p className={styles.teamSubtitle}>
              The passionate individuals driving Web3 adoption across Africa
            </p>
          </div>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={styles.teamImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face`;
                    }}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build the Future?</h2>
            <p className={styles.ctaDescription}>
              Join our community of African Web3 builders and start your journey 
              into blockchain development today.
            </p>
            <div className={styles.ctaActions}>
              <Button type="primary" text="Get Started" icon={true} />
              <Button text="View Events" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}