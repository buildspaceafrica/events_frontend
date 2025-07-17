import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Button, MintingModal } from '../../components';
import { MintingProvider } from '../../contexts/mintingContext';
import styles from './event-detail.module.scss';

const events = [
  {
    id: 1,
    title: "Buildspace Africa Conference 2022",
    description: "The inaugural Buildspace Africa blockchain conference brought together Web3 enthusiasts, developers, and innovators from across the continent. This groundbreaking event featured talks on blockchain fundamentals, DeFi, NFTs, and the future of Web3 in Africa.",
    fullDescription: "Join us for the most comprehensive Web3 event in Africa! Our inaugural conference brought together over 200 participants from across the continent to explore the future of blockchain technology. The event featured expert speakers, hands-on workshops, and networking opportunities that shaped the African Web3 landscape.",
    date: "January 29, 2022",
    time: "10:30 AM WAT",
    location: "Virtual Event",
    type: "past",
    youtubeId: "my-DR6xY_TA",
    image: "/images/conference-2022.jpg",
    highlights: [
      "200+ attendees from across Africa",
      "15+ expert speakers",
      "Hands-on Web3 workshops",
      "Networking with industry leaders",
      "NFT ticket minting experience"
    ],
    speakers: [
      "Chidiebere Ekennia - Community Lead",
      "Joshua Nwankwo - Technical Lead",
      "Industry experts from across Africa"
    ],
    agenda: [
      { time: "10:30 AM", title: "Opening Ceremony", description: "Welcome to Buildspace Africa" },
      { time: "11:00 AM", title: "Blockchain Fundamentals", description: "Understanding the basics of blockchain technology" },
      { time: "12:00 PM", title: "DeFi in Africa", description: "Decentralized Finance opportunities in Africa" },
      { time: "1:00 PM", title: "Break", description: "Networking and refreshments" },
      { time: "2:00 PM", title: "NFTs and Digital Art", description: "The future of digital ownership" },
      { time: "3:00 PM", title: "Building Web3 Communities", description: "Growing blockchain communities in Africa" },
      { time: "4:00 PM", title: "Panel Discussion", description: "The future of Web3 in Africa" },
      { time: "5:00 PM", title: "Closing Ceremony", description: "NFT minting and wrap-up" }
    ]
  },
  {
    id: 2,
    title: "Web3 Developer Bootcamp",
    description: "An intensive bootcamp designed to onboard African developers into the Web3 ecosystem. Participants learned smart contract development, DApp building, and blockchain fundamentals.",
    fullDescription: "A comprehensive 3-day intensive bootcamp that transformed 50+ African developers into Web3 builders. This hands-on program covered everything from blockchain basics to advanced smart contract development, providing participants with the skills needed to build the next generation of decentralized applications.",
    date: "March 2022",
    time: "9:00 AM - 5:00 PM WAT",
    location: "Lagos, Nigeria & Virtual",
    type: "past",
    image: "/images/bootcamp-2022.jpg",
    highlights: [
      "50+ developers trained",
      "Smart contract development",
      "DApp building workshop",
      "Mentorship program",
      "Job placement assistance"
    ],
    speakers: [
      "Senior blockchain developers",
      "Industry mentors",
      "Successful Web3 entrepreneurs"
    ],
    agenda: [
      { time: "Day 1", title: "Blockchain Fundamentals", description: "Understanding blockchain technology and its applications" },
      { time: "Day 2", title: "Smart Contract Development", description: "Building and deploying smart contracts" },
      { time: "Day 3", title: "DApp Development", description: "Creating decentralized applications" }
    ]
  },
  {
    id: 3,
    title: "Buildspace Africa Summit 2024",
    description: "Join us for our biggest event yet! A comprehensive summit covering the latest in Web3, AI integration with blockchain, and Africa's role in the global digital economy.",
    fullDescription: "The most anticipated Web3 event in Africa is coming! This summit will bring together international speakers, showcase cutting-edge AI and blockchain integration, and highlight Africa's growing role in the global digital economy. Don't miss this opportunity to be part of the future.",
    date: "Coming Soon - 2024",
    time: "TBA",
    location: "TBA",
    type: "upcoming",
    image: "/images/summit-2024.jpg",
    highlights: [
      "International speakers",
      "AI & Blockchain integration",
      "Startup pitch competition",
      "Investment opportunities",
      "Community awards"
    ],
    speakers: [
      "International Web3 leaders",
      "AI and blockchain experts",
      "African tech innovators"
    ],
    agenda: [
      { time: "TBA", title: "Opening Keynote", description: "The future of Web3 in Africa" },
      { time: "TBA", title: "AI & Blockchain", description: "Integration opportunities and challenges" },
      { time: "TBA", title: "Startup Showcase", description: "African Web3 startups pitch competition" }
    ]
  }
];

export default function EventDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);
  const containerRef = useRef();
  
  const event = events.find(e => e.id === parseInt(id));
  
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

  const handleImageError = (e) => {
    if (e.target.src.includes('conference-2022')) {
      e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop`;
    } else if (e.target.src.includes('bootcamp-2022')) {
      e.target.src = `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop`;
    } else {
      e.target.src = `https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=400&fit=crop`;
    }
  };

  return (
    <MintingProvider>
      <Layout 
        title={`${event.title} - Buildspace Africa`}
        description={event.description}
      >
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <div className={styles.eventMeta}>
                  <span className={styles.eventDate}>{event.date}</span>
                  {event.time && <span className={styles.eventTime}>{event.time}</span>}
                  }
                  {event.location && <span className={styles.eventLocation}>{event.location}</span>}
                  }
                </div>
                <h1 className={styles.heroTitle}>{event.title}</h1>
                <p className={styles.heroDescription}>{event.fullDescription}</p>
                
                <div className={styles.heroActions}>
                  {event.type === 'past' && (
                    <Button 
                      type="primary" 
                      text="Mint NFT Ticket" 
                      icon={true}
                      onClick={() => setIsDisplayingModal(true)}
                    />
                  )}
                  {event.type === 'upcoming' && (
                    <Button type="primary" text="Get Notified" />
                  )}
                  <Link href="/events">
                    <Button text="Back to Events" />
                  </Link>
                </div>
              </div>
              
              <div className={styles.heroImage}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  onError={handleImageError}
                />
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
            {/* Image Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div className={styles.gallerySection}>
                <h2 className={styles.sectionTitle}>Event Gallery</h2>
                <div className={styles.galleryGrid}>
                  {event.gallery.map((image, index) => (
                    <div key={index} className={styles.galleryItem}>
                      <img 
                        src={image} 
                        alt={`${event.title} - Gallery ${index + 1}`}
                        onError={(e) => {
                          e.target.src = `https://images.unsplash.com/photo-${
                            index % 2 === 0 ? '1540575467063-178a50c2df87' : '1522202176988-66273c2fd55f'
                          }?w=400&h=300&fit=crop`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

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
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                {event.type === 'past' ? 'Get Your NFT Ticket' : 'Don\'t Miss Out!'}
              </h2>
              <p className={styles.ctaDescription}>
                {event.type === 'past' 
                  ? 'Mint your commemorative NFT ticket for this historic event and be part of Web3 history in Africa.'
                  : 'Be the first to know when registration opens for this exciting event.'
                }
              </p>
              <div className={styles.ctaActions}>
                {event.type === 'past' ? (
                  <>
                    {event.hasEnded ? (
                      <div className={styles.ctaEndedNotice}>
                        <span>Event has ended - Minting is no longer available</span>
                      </div>
                    ) : (
                      <Button 
                        type="primary" 
                        text="Mint NFT Ticket" 
                        icon={true}
                        onClick={() => setIsDisplayingModal(true)}
                      />
                    )}
                  </>
                ) : (
                  <Button type="primary" text="Join Waitlist" />
                )}
                <Link href="/events">
                  <Button text="View All Events" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Minting Modal */}
        <MintingModal
          isActive={isDisplayingModal}
          setIsActive={setIsDisplayingModal}
        />
      </Layout>
    </MintingProvider>
  );
}