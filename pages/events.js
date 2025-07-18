import React from "react";
import { Layout } from "../components/Layout";
import { Button } from "../components";
import styles from "./events-page.module.scss";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Buildspace Africa Conference 2022",
    description:
      "The inaugural Buildspace Africa blockchain conference brought together Web3 enthusiasts, developers, and innovators from across the continent. This groundbreaking event featured talks on blockchain fundamentals, DeFi, NFTs, and the future of Web3 in Africa.",
    date: "January 29, 2022",
    type: "past",
    youtubeId: "my-DR6xY_TA", // Using the existing YouTube ID from the codebase
    image: "/images/events-2.jpg",
    highlights: [
      "200+ attendees on-site and over 400 joining virtually via livestream from across Africa",
      "6+ expert speakers sharing insights on Web3, NFTs, DeFi, and community building",
      "Practical Web3-focused sessions and discussions",
      "Networking opportunities with builders, creatives, and industry leaders",
      "Live NFT ticket minting experience for all attendees",
    ],
  },
];

export default function EventsPage() {
  const pastEvents = events.filter((event) => event.type === "past");
  const upcomingEvents = events.filter((event) => event.type === "upcoming");

  return (
    <Layout
      title="Events - Buildspace Africa"
      description="Discover past and upcoming Buildspace Africa events. Join our conferences, workshops, and community gatherings to advance Web3 adoption in Africa."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Our <span>Events</span>
            </h1>
            <p className={styles.heroDescription}>
              Discover the events that are shaping Africa's Web3 future. From
              conferences to workshops, we bring together the brightest minds in
              blockchain technology.
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className={styles.eventsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Past Events</h2>
            <p className={styles.sectionSubtitle}>
              Celebrating our journey in building Africa's Web3 community
            </p>
          </div>

          <div className={styles.eventsGrid}>
            {pastEvents.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventImageWrapper}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className={styles.eventImage}
                  />
                  <div className={styles.eventDate}>
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDescription}>{event.description}</p>

                  {event.highlights && (
                    <div className={styles.eventHighlights}>
                      <h4>Event Highlights:</h4>
                      <ul>
                        {event.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.youtubeId && (
                    <div className={styles.videoWrapper}>
                      <div className={styles.videoContainer}>
                        <iframe
                          src={`https://www.youtube.com/embed/${event.youtubeId}`}
                          title={`${event.title} - YouTube`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  <div className={styles.eventActions}>
                    <Link href={`/events/${event.id}`}>
                      <Button type="primary" text="View Event Details" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className={styles.upcomingSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Upcoming Events</h2>
            <p className={styles.sectionSubtitle}>
              Don't miss out on our future events and opportunities
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className={styles.eventsGrid}>
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`${styles.eventCard} ${styles.upcomingCard}`}
                >
                  <div className={styles.eventImageWrapper}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className={styles.eventImage}
                      onError={handleImageError}
                    />
                    <div
                      className={`${styles.eventDate} ${styles.upcomingDate}`}
                    >
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <div className={styles.eventContent}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDescription}>
                      {event.description}
                    </p>

                    {event.highlights && (
                      <div className={styles.eventHighlights}>
                        <h4>What to Expect:</h4>
                        <ul>
                          {event.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className={styles.eventActions}>
                      <Link href={`/events/${event.id}`}>
                        <Button type="primary" text="View Event Details" />
                      </Link>
                      <Button text="Get Notified" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noEvents}>
              <div className={styles.noEventsContent}>
                <h3>Stay Tuned!</h3>
                <p>
                  We're planning exciting new events. Follow us to be the first
                  to know when registration opens.
                </p>
                <a
                  href="https://x.com/buildspaceafric"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Want to Speak at Our Events?</h2>
            <p className={styles.ctaDescription}>
              We're always looking for passionate Web3 builders and thought
              leaders to share their knowledge with our community.
            </p>
            <div className={styles.ctaActions}>
              <a
                href="mailto:support@buildspace.africa?subject=Speaker Application"
                className={styles.ctaButton}
              >
                <Button type="primary" text="Apply to Speak" />
              </a>
              <a
                href="mailto:support@buildspace.africa?subject=Event Sponsorship"
                className={styles.ctaButton}
              >
                <Button text="Sponsor an Event" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
