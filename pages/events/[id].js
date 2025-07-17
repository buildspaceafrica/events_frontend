import React, {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {Button, MintingModal, Layout, EventGallery, ErrorModal} from "../../components";
import {MintingProvider} from "../../contexts/mintingContext";
import styles from "./event-detail.module.scss";

const events = [
  {
    id: 1,
    title: "Buildspace Africa Conference 2022",
    description:
      "The inaugural Buildspace Africa blockchain conference brought together Web3 enthusiasts, developers, and innovators from across the continent. This groundbreaking event featured talks on blockchain fundamentals, DeFi, NFTs, and the future of Web3 in Africa.",
    fullDescription:
      "Join us for the most comprehensive Web3 event in Africa! Our inaugural conference brought together over 200 participants from across the continent to explore the future of blockchain technology. The event featured expert speakers, interactive sessions, and networking opportunities that shaped the African Web3 landscape.",
    date: "January 29, 2022",
    time: "10:30 AM WAT",
    location: "Enugu, Nigeria",
    type: "past",
    youtubeId: "0bDdLOfNJck",
    image: "/images/conference.jpg",
    highlights: [
      "200+ attendees on-site and over 400 joining virtually via livestream from across Africa",
      "6+ expert speakers sharing insights on Web3, NFTs, DeFi, and community building",
      "Practical Web3-focused sessions and discussions",
      "Networking opportunities with builders, creatives, and industry leaders",
      "Live NFT ticket minting experience for all attendees",
    ],
    speakers: [
      "Farza Majeed - Founder of Buildspace",
      "Nadir Dabit - Developer Relations at Edge & Node",
      "Shannon Li - Founder of W3_crypto",
      "Angel Opiku - Senior Product Designer at Bitfinex",
      "Jake Randall - Founder of DoggosNFTs",
      "Furqan Rydhan - Serial Entrepreneur",
    ],
    gallery: [
      "/images/conference.jpg",
      "/images/conference.jpg",
      "/images/conference.jpg",
      "/images/conference.jpg",
      "/images/conference.jpg",
      "/images/conference.jpg",
    ],
    agenda: [
      {time: "10:30 AM", title: "Opening Ceremony", description: "Kick-off and welcome to Buildspace Africa"},
      {
        time: "11:00 AM",
        title: "Introduction to Web3",
        description: "A beginner-friendly guide to getting started with Web3 and crypto",
      },
      {
        time: "12:00 PM",
        title: "Designing for Web3",
        description: "Exploring the role of designers in the Web3 ecosystem",
      },
      {time: "1:00 PM", title: "Break", description: "Take a break — network, refresh, and connect"},
      {time: "1:30 PM", title: "Panel Discussion", description: "A conversation on the future of Web3 in Africa"},
      {
        time: "2:00 PM",
        title: "NFTs & Digital Art",
        description: "Understanding digital ownership and the NFT revolution",
      },
      {
        time: "2:30 PM",
        title: "DeFi in Africa",
        description: "Opportunities and challenges in African Web3 finance adoption",
      },
      {
        time: "3:00 PM",
        title: "Community Building in Web3",
        description: "How to grow and sustain blockchain communities in Africa",
      },
      {time: "4:00 PM", title: "Closing Ceremony", description: "Final remarks, NFT minting, and event wrap-up"},
    ],
  },
  {
    id: 2,
    title: "Web3 Developer Bootcamp",
    description:
      "An intensive bootcamp designed to onboard African developers into the Web3 ecosystem. Participants learned smart contract development, DApp building, and blockchain fundamentals.",
    fullDescription:
      "A comprehensive 3-day intensive bootcamp that transformed 50+ African developers into Web3 builders. This hands-on program covered everything from blockchain basics to advanced smart contract development, providing participants with the skills needed to build the next generation of decentralized applications.",
    date: "March 15-17, 2022",
    time: "9:00 AM - 5:00 PM WAT",
    location: "Lagos, Nigeria & Virtual",
    type: "past",
    image: "/images/bootcamp-2022.jpg",
    highlights: [
      "50+ developers trained in 3 intensive days",
      "Smart contract development with Solidity",
      "DApp building workshop with React and Web3.js",
      "Mentorship program with industry experts",
      "Job placement assistance and career guidance",
    ],
    speakers: [
      "Senior blockchain developers from top companies",
      "Industry mentors from leading Web3 projects",
      "Successful Web3 entrepreneurs and founders",
    ],
    gallery: [
      "/images/bootcamp-2022-1.jpg",
      "/images/bootcamp-2022-2.jpg",
      "/images/bootcamp-2022-3.jpg",
      "/images/bootcamp-2022-4.jpg",
    ],
    agenda: [
      {
        time: "Day 1",
        title: "Blockchain Fundamentals",
        description: "Understanding blockchain technology and its applications",
      },
      {
        time: "Day 2",
        title: "Smart Contract Development",
        description: "Building and deploying smart contracts with Solidity",
      },
      {
        time: "Day 3",
        title: "DApp Development",
        description: "Creating decentralized applications with modern frameworks",
      },
    ],
  },
  {
    id: 3,
    title: "Buildspace Africa Summit 2025",
    description:
      "Join us for our biggest event yet! A comprehensive summit covering the latest in Web3, AI integration with blockchain, and Africa's role in the global digital economy.",
    fullDescription:
      "The most anticipated Web3 event in Africa is coming! This summit will bring together international speakers, showcase cutting-edge AI and blockchain integration, and highlight Africa's growing role in the global digital economy. Don't miss this opportunity to be part of the future.",
    date: "Coming Soon - Q2 2025",
    time: "TBA",
    location: "Multiple Cities Across Africa",
    type: "upcoming",
    image: "/images/summit-2025.jpg",
    highlights: [
      "International speakers from leading Web3 companies",
      "AI & Blockchain integration workshops and demos",
      "Startup pitch competition with $100K in prizes",
      "Investment opportunities and VC networking",
      "Community awards and recognition ceremony",
    ],
    speakers: [
      "International Web3 leaders and visionaries",
      "AI and blockchain integration experts",
      "African tech innovators and entrepreneurs",
    ],
    gallery: ["/images/summit-preview-1.jpg", "/images/summit-preview-2.jpg", "/images/summit-preview-3.jpg"],
    agenda: [
      {time: "TBA", title: "Opening Keynote", description: "The future of Web3 in Africa and global opportunities"},
      {
        time: "TBA",
        title: "AI & Blockchain Integration",
        description: "Exploring synergies between artificial intelligence and blockchain",
      },
      {
        time: "TBA",
        title: "Startup Showcase",
        description: "African Web3 startups pitch competition with live judging",
      },
    ],
  },
];

export default function EventDetailPage() {
  const router = useRouter();
  const {id} = router.query;
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);
  const [isErrorModalActive, setIsErrorModalActive] = useState(false);

  const event = events.find((e) => e.id === parseInt(id));

  const handleMintClick = () => {
    if (event.type === "past") {
      // Show error modal for past events
      setIsErrorModalActive(true);
    } else {
      // Allow minting for upcoming events (though this shouldn't happen in current setup)
      setIsDisplayingModal(true);
    }
  };

  if (!event) {
    return (
      <Layout title="Event Not Found">
        <div className={styles.notFound}>
          <div className="container">
            <h1>Event Not Found</h1>
            <p>The event you're looking for doesn't exist.</p>
            <Link href="/events">
              <Button type="primary" text="Back to Events" />
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <MintingProvider>
      <Layout title={`${event.title} - Buildspace Africa`} description={event.description}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <div className={styles.eventMeta}>
                  <span className={styles.eventDate}>{event.date}</span>
                  {event.time && <span className={styles.eventTime}>{event.time}</span>}
                  {event.location && <span className={styles.eventLocation}>{event.location}</span>}
                </div>
                <h1 className={styles.heroTitle}>{event.title}</h1>
                <p className={styles.heroDescription}>{event.fullDescription}</p>

                <div className={styles.heroActions}>
                  {event.type === "past" ? (
                    <>
                      <Button type="primary" text="Mint NFT" icon={true} onClick={handleMintClick} />
                    </>
                  ) : (
                    <Button
                      type="primary"
                      text="Get Notified"
                      onClick={() => window.open("https://discord.gg/buildspace", "_blank")}
                    />
                  )}
                  <Link href="/events">
                    <Button text="Back to Events" />
                  </Link>
                </div>
              </div>

              <div className={styles.heroImage}>
                <img src={event.image} alt={event.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        {event.youtubeId && (
          <section className={styles.videoSection}>
            <div className="container">
              <div className={styles.videoContent}>
                <h2 className={styles.sectionTitle}>Watch the Event</h2>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/${event.youtubeId}`}
                    title={`${event.title} - YouTube`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Event Details */}
        <section className={styles.detailsSection}>
          <div className="container">
            <div className={styles.detailsGrid}>
              {/* Highlights */}
              <div className={styles.detailCard}>
                <h3 className={styles.cardTitle}>Event Highlights</h3>
                <ul className={styles.highlightsList}>
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Speakers */}
              <div className={styles.detailCard}>
                <h3 className={styles.cardTitle}>Featured Speakers</h3>
                <ul className={styles.speakersList}>
                  {event.speakers.map((speaker, index) => (
                    <li key={index}>{speaker}</li>
                  ))}
                </ul>
              </div>

              {/* Agenda */}
              <div className={`${styles.detailCard} ${styles.agendaCard}`}>
                <h3 className={styles.cardTitle}>Event Agenda</h3>
                <div className={styles.agendaList}>
                  {event.agenda.map((item, index) => (
                    <div key={index} className={styles.agendaItem}>
                      <div className={styles.agendaTime}>{item.time}</div>
                      <div className={styles.agendaContent}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Event Gallery */}
          {event.gallery && event.gallery.length > 0 && (
            <section className={`mt-20 ${styles.gallerySection}`}>
              <div className="container">
                <EventGallery images={event.gallery} eventTitle={event.title} />
              </div>
            </section>
          )}
        </section>

        {/* Minting Modal - Only for demonstration, will show error */}
        <MintingModal isActive={isDisplayingModal} setIsActive={setIsDisplayingModal} />

        {/* Error Modal for Past Events */}
        <ErrorModal
          isActive={isErrorModalActive}
          setIsActive={setIsErrorModalActive}
          type="error"
          title="NFT Minting Unavailable"
          message="NFT minting for this event has ended. This was a time-limited opportunity available only during the event period. Join our community to stay updated on future events"
        />
      </Layout>
    </MintingProvider>
  );
}
