import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./event-gallery.module.scss";

function EventGallery({ images, eventTitle }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Limit to maximum 4 images for clean presentation
  const displayImages = images?.slice(0, 4) || [];

  const handleImageClick = (image, index) => {
    setSelectedImage({
      src: image,
      index,
      alt: `${eventTitle} - Gallery ${index + 1}`,
    });
    setIsLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const handlePrevImage = useCallback(() => {
    if (selectedImage && selectedImage.index > 0) {
      const newIndex = selectedImage.index - 1;
      setSelectedImage({
        src: images[newIndex],
        index: newIndex,
        alt: `${eventTitle} - Gallery ${newIndex + 1}`,
      });
    }
  }, [selectedImage, images, eventTitle]);

  const handleNextImage = useCallback(() => {
    if (selectedImage && selectedImage.index < images.length - 1) {
      const newIndex = selectedImage.index + 1;
      setSelectedImage({
        src: images[newIndex],
        index: newIndex,
        alt: `${eventTitle} - Gallery ${newIndex + 1}`,
      });
    }
  }, [selectedImage, images, eventTitle]);

  const handleImageError = (e, index) => {
    e.target.src = `https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center`;
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isLightboxOpen) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          handlePrevImage();
          break;
        case "ArrowRight":
          event.preventDefault();
          handleNextImage();
          break;
        case "Escape":
          event.preventDefault();
          handleLightboxClose();
          break;
        default:
          break;
      }
    };

    if (isLightboxOpen) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isLightboxOpen, handleNextImage, handlePrevImage]);

  if (!displayImages.length) {
    return null;
  }

  return (
    <>
      <div className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>Event Gallery</h2>
        <div className={styles.galleryGrid}>
          {displayImages.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => handleImageClick(image, index)}
            >
              <img
                src={image}
                alt={`${eventTitle} - Gallery ${index + 1}`}
                style={{ objectFit: "cover" }}
                onError={(e) => handleImageError(e, index)}
              />
              <div className={styles.galleryOverlay}>
                <div className={styles.viewIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3H6C4.9 3 4 3.9 4 5V16C4 17.1 4.9 18 6 18H15C16.1 18 17 17.1 17 16V5C17 3.9 16.1 3 15 3ZM15 16H6V5H15V16Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19 7V19C19 20.1 18.1 21 17 21H7V19H17V7H19Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {images?.length > 4 && (
          <p className={styles.moreImagesText}>
            +{images.length - 4} more images available
          </p>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className={styles.lightbox} onClick={handleLightboxClose}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={handleLightboxClose}
              aria-label="Close lightbox"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{ objectFit: "contain" }}
              className={styles.lightboxImage}
            />

            <div className={styles.lightboxInfo}>
              <p>{selectedImage.alt}</p>
              <span>
                {selectedImage.index + 1} / {images.length}
              </span>
            </div>

            {images.length > 1 && (
              <>
                <button
                  className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                  onClick={handlePrevImage}
                  disabled={selectedImage.index === 0}
                  aria-label="Previous image"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                  onClick={handleNextImage}
                  disabled={selectedImage.index === images.length - 1}
                  aria-label="Next image"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export { EventGallery };
