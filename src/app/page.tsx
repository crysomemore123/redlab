// src/app/page.tsx
'use client';

import { useEffect, useState, useRef, useCallback } from 'react'; // Added useCallback
import Image from 'next/image';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // True if paused by click
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null); // Timer for resuming after click-pause

  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
  ];

  const startAutoSlide = useCallback(() => {
    // Clear existing timer to prevent multiple intervals
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    // Only start if not manually paused by a click
    if (isPaused) {
      return;
    }
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
  }, [isPaused, images.length]); // Added dependencies for useCallback

  // Initial start of auto-slide and cleanup
  useEffect(() => {
    startAutoSlide(); // Start on mount
    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [startAutoSlide]); // Added startAutoSlide to dependency array

  // Update carousel position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  // Handle manual pause state (after arrow click)
  useEffect(() => {
    if (isPaused) {
      // If paused by click, clear the auto-slide timer
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
        autoSlideTimerRef.current = null; // Explicitly nullify
      }

      // Clear any existing resume timer before setting a new one
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }

      // Set a timer to unpause and restart auto-slide
      pauseTimerRef.current = setTimeout(() => {
        setIsPaused(false); // End the manual pause
        startAutoSlide();   // Restart auto-slide
      }, 5000); // Resume after 5 seconds
    }

    // Cleanup for the pause resume timer if isPaused changes or component unmounts
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
  }, [isPaused, startAutoSlide]); // Added startAutoSlide to dependency array

  const handleNavClick = (direction: number) => {
    // Clear auto-slide timer immediately
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
    // Clear the resume timer too, as we are setting a new pause state
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }

    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);

    setIsPaused(true); // Activate the manual pause
  };

  // Pause auto-slide on mouse hover
  const handleCarouselMouseEnter = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };

  // Resume auto-slide when mouse leaves, if not manually paused
  const handleCarouselMouseLeave = () => {
    // Only restart if not in a manual pause triggered by click
    if (!isPaused) {
      startAutoSlide();
    }
  };

  return (
    <div className="redlab-home">
      <div className="container">
        {/* Add onMouseEnter and onMouseLeave to the main carousel container */}
        <div
          className="carousel-container"
          onMouseEnter={handleCarouselMouseEnter}
          onMouseLeave={handleCarouselMouseLeave}
        >
          <div className="carousel" ref={carouselRef}>
            {images.map((image, index) => (
              <div className="carousel-slide" key={index}>
                <div className="image-container">
                  <Image
                    src={image}
                    alt={`Performance ${index + 1}`}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 1600px"
                    quality={90}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => handleNavClick(-1)}
            aria-label="Previous slide"
          >
            {/* Text removed, CSS will create chevron */}
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => handleNavClick(1)}
            aria-label="Next slide"
          >
            {/* Text removed, CSS will create chevron */}
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          height: 600px;
          max-width: 1600px;
          margin: 0 auto;
        }
        
        .carousel {
          display: flex;
          transition: transform 0.5s ease-in-out;
          height: 100%;
        }
        
        .carousel-slide {
          min-width: 100%;
          height: 100%;
          flex-shrink: 0; /* Important to prevent slides from shrinking */
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background-color: rgba(0, 0, 0, 0.5);
          /* color: white; */ /* Not directly needed if ::before handles color */
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          border: none;
          outline: none;
          transition: background-color 0.3s ease;
        }
        
        .carousel-arrow:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .carousel-arrow::before {
          content: '';
          display: inline-block;
          border-style: solid;
          border-color: white;
          border-width: 3px 3px 0 0; /* Adjust for chevron line thickness */
          padding: 6px; /* Adjust for chevron size */
        }

        .carousel-arrow-left {
          left: 20px;
        }
        .carousel-arrow-left::before {
          transform: rotate(-135deg);
          margin-left: 4px; /* Fine-tune chevron position within button */
        }
        
        .carousel-arrow-right {
          right: 20px;
        }
        .carousel-arrow-right::before {
          transform: rotate(45deg);
          margin-right: 4px; /* Fine-tune chevron position within button */
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 400px;
          }
          .carousel-arrow { /* Optionally make arrows smaller on mobile */
            width: 40px;
            height: 40px;
          }
          .carousel-arrow::before {
            padding: 5px; /* Adjust chevron */
          }
        }
      `}</style>
    </div>
  );
}