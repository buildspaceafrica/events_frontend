import React from "react";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { Button, Accomplishments } from "../components";
import Link from "next/link";
import styles from "./index-page.module.scss";

const teamMembers = [
  {
    id: 1,
    name: "Joshua Nwankwo",
    role: "Founder & Community lead",
    image: "/images/josh.jpg",
    bio: "Leads strategic direction and community engagement, ensuring all initiatives align with our mission of empowering African Web3 developers",
  },
  {
    id: 2,
    name: "Nnaemeka Ezechi",
    role: "Co-Founder & Technical Lead",
    image: "/images/somto.jpg",
    bio: "Designs blockchain education programs and leads technical workshops, bootcamps, and Web3 conferences across Africa",
  },
  {
    id: 3,
    name: "Chidiebere Ekennia",
    role: "Program Director",
    image: "/images/chidi.jpg",
    bio: "Oversees program design and partnerships, connecting Africans to real-world Web3 opportunities.",
  },
  {
    id: 4,
    name: "Ifedili Onyegbu",
    role: "Blockchain Developer",
    image: "/images/sauce.jpg",
    bio: "Leads smart contract development education and security training through hands-on workshops and mentorship programs.",
  },
  {
    id: 5,
    name: "Richmond Ohalewe",
    role: "Brand & Product Designer",
    image: "/images/richmond.jpg",
    bio: "Creates visual content and manages design for branding, events, and digital media.",
  },
];

export default function HomePage() {
  const handleImageError = (e) => {
    e.target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face`;
  };

  return (
    <Layout
      title="Buildspace Africa - Building the Future of Web3 in Africa"
      description="Join Buildspace Africa in building the future of Web3 across the continent. Learn, build, and connect with fellow African developers in the blockchain space."
    >
      {/* Hero Section */}
      <section className={`${styles.hero}`}>
        <div className="special-stuff ">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Building the Future of <span>Web3</span> in Africa
              </h1>
              <p className={styles.heroDescription}>
                Buildspace Africa is an extension of the global buildspace
                community, dedicated to helping Africans explore Web3 and
                blockchain technology, create amazing solutions, and improve
                Web3 adoption across the continent.
              </p>
              <div className={styles.heroActions}>
                <a
                  href="https://x.com/buildspaceafric"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button type="primary" text="Join Community" />
                </a>
                <Link href="#team" passHref>
                  <Button text="Learn More" />
                </Link>
              </div>
            </div>
            {/* <div className={styles.heroImage}>
              <img src={`/images/buildspace.jpg`} alt={""} />
            </div> */}
            <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
              <div className="aspect-[3/2] sm:aspect-[16/11] overflow-hidden">
                <Image
                  src="/images/buildspace.jpg"
                  alt="Buildspace Africa team"
                  width={800}
                  height={600}
                  style={{ objectFit: "cover" }}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>

            {/* <div className={styles.heroVisual}>
              <div className={styles.heroPattern}>
                <div className={styles.heroIcon}>🚀</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals Section */}
      <section className={styles.mission}>
        <div className="special-stuff">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower African developers and entrepreneurs with the
                knowledge, tools, and community support needed to build
                innovative Web3 solutions that address local and global
                challenges.
              </p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🔮</div>
              <h3>Our Vision</h3>
              <p>
                To establish Africa as a leading hub for Web3 innovation, where
                talented developers create groundbreaking blockchain
                applications that drive economic growth and social impact.
              </p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Our Goals</h3>
              <p>
                Foster a thriving Web3 ecosystem through education, mentorship,
                community building, and creating opportunities for African
                developers to participate in the global blockchain economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <Accomplishments />

      {/* Team Section */}
      <section id="team" className={styles.team}>
        <div className="special-stuff">
          <div className={styles.teamHeader}>
            <h2 className={styles.teamTitle}>
              Meet the <span>Team</span>
            </h2>
            <p className={styles.teamSubtitle}>
              The passionate individuals driving Web3 adoption across Africa
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className={styles.teamImage}
                    onError={handleImageError}
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
        <div className="special-stuff">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build the Future?</h2>
            <p className={styles.ctaDescription}>
              Join our community of African Web3 builders and start your journey
              into blockchain development today.
            </p>
            <div className={styles.ctaActions}>
              <a
                href="https://x.com/buildspaceafric"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary" text="Get Started" icon={true} />
              </a>
              <Link href="/events" passHref>
                <Button text="View Events" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
