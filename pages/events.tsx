import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '../components';
import styles from './events.module.scss';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'past' | 'upcoming';
  youtubeId?: string;
  image?: string;
  highlights?: string[];
}

const events: Event[] = [
  {
    id: 1,
    title: "Buildspace Africa Conference 2022",
    description: "The inaugural Buildspace Africa blockchain conference brought together Web3 enthusiasts, developers, and innovators from across the continent. This groundbreaking event featured talks on blockchain fundamentals, DeFi, NFTs, and the future of Web3 in Africa.",
    date: "January 29, 2022",
    type: "past",
    youtubeId: "my-DR6xY_TA", // Using the existing YouTube ID from the codebase
    image: "/images/conference-2022.jpg",
    highlights: [
      "200+ attendees from across Africa",
      "15+ expert speakers",
      "Hands-on Web3 workshops",
      "Networking with industry leaders",
      "NFT ticket minting experience"
    ]
  },
  {
    id: 2,
    title: "Web3 Developer Bootcamp",
    description: "An intensive bootcamp designed to onboard African developers into the Web3 ecosystem. Participants learned smart contract development, DApp building, and blockchain fundamentals.",
    date: "March 2022",
    type: "past",
    image: "/images/bootcamp-2022.jpg",
    highlights: [
      "50+ developers trained",
      "Smart contract development",
      "DApp building workshop",
      "Mentorship program",
      "Job placement assistance"
    ]
  },
  {
    id: 3,
    title: "Buildspace Africa Summit 2024",
    description: "Join us for our biggest event yet! A comprehensive summit covering the latest in Web3, AI integration with blockchain, and Africa's role in the global digital economy.",
    date: "Coming Soon - 2024",
    type: "upcoming",
    image: "/images/summit-2024.jpg",
    highlights: [
      "International speakers",
      "AI & Blockchain integration",
      "Startup pitch competition",
      "Investment opportunities",
      "Community awards"
    ]
  }
];

export default function EventsPage() {
  const pastEvents = events.filter(event => event.type === 'past');
  const upcomingEvents = events.filter(event => event.type === 'upcoming');

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
              Discover the events that are shaping Africa's Web3 future. From conferences 
              to workshops, we bring together the brightest minds in blockchain technology.
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
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop`;
                    }}
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
                      <h4>Watch the Event:</h4>
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
                <div key={event.id} className={`${styles.eventCard} ${styles.upcomingCard}`}>
                  <div className={styles.eventImageWrapper}>
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className={styles.eventImage}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=300&fit=crop`;
                      }}
                    />
                    <div className={`${styles.eventDate} ${styles.upcomingDate}`}>
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <div className={styles.eventContent}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDescription}>{event.description}</p>
                    
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
                      <Button type="primary" text="Get Notified" />
                      <Button text="Learn More" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noEvents}>
              <div className={styles.noEventsContent}>
                <h3>Stay Tuned!</h3>
                <p>We're planning exciting new events. Follow us to be the first to know when registration opens.</p>
                <Button type="primary" text="Join Community" />
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
              We're always looking for passionate Web3 builders and thought leaders 
              to share their knowledge with our community.
            </p>
            <div className={styles.ctaActions}>
              <Button type="primary" text="Apply to Speak" />
              <Button text="Sponsor an Event" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}