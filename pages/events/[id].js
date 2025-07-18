import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Button,
  MintingModal,
  Layout,
  EventGallery,
  ErrorModal,
} from "../../components";
import { MintingProvider } from "../../contexts/mintingContext";
import styles from "./event-detail.module.scss";

const events = [
  {
    id: 1,
    title: "Buildspace Africa Conference 2022",
    description:
      "The inaugural Buildspace Africa blockchain conference brought together Web3 enthusiasts, developers, and innovators from across the continent. This groundbreaking event featured talks on blockchain fundamentals, DeFi, NFTs, and the future of Web3 in Africa.",
    fullDescription:
      "Our inaugural conference brought together over 200 participants from across the continent to explore the future of blockchain technology. It featured expert speakers, interactive sessions, and networking opportunities that shaped the Web3 landscape in Africa.",
    date: "January 29, 2022",
    time: "10:30 AM WAT",
    location: "Enugu, Nigeria",
    type: "past",
    youtubeId: "0bDdLOfNJck",
    image: "/images/events-2.jpg",
    highlights: [
      "200+ attendees on-site and over 400 joining virtually via livestream from across Africa",
      "6+ expert speakers sharing insights on Web3, NFTs, DeFi, and community building",
      "Practical Web3-focused sessions and discussions",
      "Networking opportunities with builders, creatives, and industry leaders",
      "Live NFT ticket minting experience for all attendees",
    ],
    speakers: [
      {
        name: "Farza Majeed - Founder of Buildspace",
        image: "/images/speakers/farza.jpg",
      },
      {
        name: "Nadir Dabit - Developer Relations at Edge & Node",
        image: "/images/speakers/nader.jpg",
      },
      {
        name: "Shannon Li - Founder of WeCrypto",
        image: "/images/speakers/shannon.jpg",
      },
      {
        name: "Angel Opoku - Senior Product Designer at Bitfinex",
        image: "/images/speakers/angel.jpg",
      },
      {
        name: "Jake Randall - Founder of DoggosNFTs",
        image: "/images/speakers/jake.jpg",
      },
      {
        name: "Furqan Rydhan - Thirdweb",
        image: "/images/speakers/furqan.jpg",
      },
    ],
    gallery: [
      "/images/events-1.jpg",
      "/images/events-2.jpg",
      "/images/events-3.jpg",
      "/images/events-4.jpg",
      "/images/events-5.jpg",
      "/images/events-6.jpg",
      "/images/events-7.jpg",
      "/images/events-8.jpg",
      "/images/events-9.jpg",
      "/images/events-10.jpg",
    ],
    agenda: [
      {
        time: "10:30 AM",
        title: "Opening Ceremony",
        description: "Kick-off and welcome to Buildspace Africa",
      },
      {
        time: "11:00 AM",
        title: "Introduction to Web3",
        description:
          "A beginner-friendly guide to getting started with Web3 and crypto",
      },
      {
        time: "12:00 PM",
        title: "Designing for Web3",
        description: "Exploring the role of designers in the Web3 ecosystem",
      },
      {
        time: "1:00 PM",
        title: "Break",
        description: "Take a break — network, refresh, and connect",
      },
      {
        time: "1:30 PM",
        title: "Panel Discussion",
        description: "A conversation on the future of Web3 in Africa",
      },
      {
        time: "2:00 PM",
        title: "NFTs & Digital Art",
        description: "Understanding digital ownership and the NFT revolution",
      },
      {
        time: "2:30 PM",
        title: "DeFi in Africa",
        description:
          "Opportunities and challenges in African Web3 finance adoption",
      },
      {
        time: "3:00 PM",
        title: "Community Building in Web3",
        description: "How to grow and sustain blockchain communities in Africa",
      },
      {
        time: "4:00 PM",
        title: "Closing Ceremony",
        description: "Final remarks, NFT minting, and event wrap-up",
      },
    ],
  },
];

export default function EventDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);
  const [isErrorModalActive, setIsErrorModalActive] = useState(false);
  const [isSpeakerModalActive, setIsSpeakerModalActive] = useState(false);

  const event = events.find((e) => e.id === parseInt(id));

  const handleMintClick = () => {
    if (event?.type === "past") {
      setIsErrorModalActive(true);
    } else {
      setIsDisplayingModal(true);
    }
  };

  if (!event) {
    return (
      <Layout title="Event Not Found">
        <div className={styles.notFound}>
          <div className="special-stuff">
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
      <Layout
        title={`${event.title} - Buildspace Africa`}
        description={event.description}
      >
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="special-stuff">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <div className={styles.eventMeta}>
                  <span className={styles.eventDate}>{event.date}</span>
                  {event.time && (
                    <span className={styles.eventTime}>{event.time}</span>
                  )}
                  {event.location && (
                    <span className={styles.eventLocation}>
                      {event.location}
                    </span>
                  )}
                </div>
                <h1 className={styles.heroTitle}>{event.title}</h1>
                <p className={styles.heroDescription}>
                  {event.fullDescription}
                </p>

                <div className={styles.heroActions}>
                  {event.type === "past" ? (
                    <Button
                      type="primary"
                      text="Mint NFT"
                      icon={true}
                      onClick={handleMintClick}
                    />
                  ) : (
                    <Button
                      type="primary"
                      text="Get Notified"
                      onClick={() =>
                        window.open("https://discord.gg/buildspace", "_blank")
                      }
                    />
                  )}
                  <Link href="/events">
                    <Button text="Back to Events" />
                  </Link>
                </div>
              </div>

              <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
                <div className="aspect-[3/2] sm:aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        {event.youtubeId && (
          <section className={styles.videoSection}>
            <div className="special-stuff">
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
          <div className="special-stuff">
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
                  {event.speakers.map((speaker, index) => {
                    const name =
                      typeof speaker === "string" ? speaker : speaker.name;
                    const image =
                      typeof speaker === "string"
                        ? "/images/speakers/default-avatar.jpg"
                        : speaker.image;
                    return (
                      <li key={index} className={styles.speakerItem}>
                        <img
                          src={image}
                          alt={name}
                          className={styles.speakerAvatar}
                        />
                        <span>{name}</span>
                      </li>
                    );
                  })}
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
              <div className="special-stuff">
                <EventGallery images={event.gallery} eventTitle={event.title} />
              </div>
            </section>
          )}
        </section>

        {/* Modal: Minting */}
        <MintingModal
          isActive={isDisplayingModal}
          setIsActive={setIsDisplayingModal}
        />

        {/* Modal: Minting Error */}
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
