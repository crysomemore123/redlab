'use client';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function Home() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const isJumpingLock = useRef(false); // Lock to prevent interactions during jump
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const baseImages = useMemo(() => [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
  ], []);

  const renderedSlides = useMemo(() => {
    if (baseImages.length === 0) return [];
    if (baseImages.length < 3) {
      let tempSlides = [...baseImages];
      while (tempSlides.length < 3 && baseImages.length > 0) {
        tempSlides = [...tempSlides, ...baseImages];
      }
      if (tempSlides.length === 0) return [];
      return [
        tempSlides[tempSlides.length - 1],
        ...tempSlides,
        tempSlides[0]
      ];
    }
    return [
      baseImages[baseImages.length - 1],
      ...baseImages,
      baseImages[0]
    ];
  }, [baseImages]);

  const numRenderedSlides = renderedSlides.length;
  const numBaseImages = baseImages.length;

  const startAutoSlide = useCallback(() => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    if (isPaused || numBaseImages === 0 || isJumpingLock.current) { // Check lock
      return;
    }
    autoSlideTimerRef.current = setInterval(() => {
      if (isJumpingLock.current) return; // Check lock at the moment of execution
      setTransitionEnabled(true);
      setDisplayIndex(prevDisplayIndex => prevDisplayIndex + 1);
    }, 3000);
  }, [isPaused, numBaseImages]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [startAutoSlide]);

  useEffect(() => {
    if (carouselRef.current && numRenderedSlides > 0) {
      carouselRef.current.style.transition = transitionEnabled ? 'transform 0.6s ease-in-out' : 'none';
      const percentageToShiftPerSlide = 100 / numRenderedSlides;
      const offsetPercentage = displayIndex * percentageToShiftPerSlide;
      carouselRef.current.style.transform = `translateX(-${offsetPercentage}%)`;
    }
  }, [displayIndex, transitionEnabled, numRenderedSlides]);

  useEffect(() => {
    if (isJumpingLock.current && !transitionEnabled) {
      // This block executes after a jump has occurred (displayIndex changed with transitionEnabled=false)
      // Now, re-enable transitions and release the lock for the next frame.
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        isJumpingLock.current = false;
      });
      return; // Early exit, no further jump logic needed in this render cycle
    }

    // Only proceed with jump scheduling if not currently processing a jump
    if (isJumpingLock.current || !transitionEnabled) {
        return;
    }

    let jumpTimeoutId: NodeJS.Timeout | null = null;

    if (displayIndex === numBaseImages) {
      jumpTimeoutId = setTimeout(() => {
        // Check lock again in case of race conditions, though primary lock check is outside
        if (isJumpingLock.current) return;
        isJumpingLock.current = true;
        setTransitionEnabled(false);
        setDisplayIndex(0);
      }, 600); // Must match CSS transition duration
    } else if (displayIndex === -1) {
      jumpTimeoutId = setTimeout(() => {
        if (isJumpingLock.current) return;
        isJumpingLock.current = true;
        setTransitionEnabled(false);
        setDisplayIndex(numBaseImages - 1);
      }, 600); // Must match CSS transition duration
    }

    return () => {
      if (jumpTimeoutId) clearTimeout(jumpTimeoutId);
    };
    // isJumpingLock.current is a ref, so it's not included in dependencies to prevent re-running the effect on its change.
    // The effect re-runs on displayIndex or transitionEnabled changes.
  }, [displayIndex, numBaseImages, transitionEnabled]);

  useEffect(() => {
    if (isPaused) {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
        autoSlideTimerRef.current = null;
      }
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
      pauseTimerRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 5000);
    } else if (!isJumpingLock.current) { // Only restart autoslide if not in a jump and not paused
      if (!autoSlideTimerRef.current && numBaseImages > 0) {
          startAutoSlide();
      }
    }
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
  }, [isPaused, startAutoSlide, numBaseImages]);

  const handleNavClick = (direction: number) => {
    if (numBaseImages === 0) return;
    if (isJumpingLock.current) {
      return;
    }
    setTransitionEnabled(true);
    setDisplayIndex(prevDisplayIndex => prevDisplayIndex + direction);
    setIsPaused(true);
  };

  const handleCarouselMouseEnter = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };

  const handleCarouselMouseLeave = () => {
    if (!isPaused && !isJumpingLock.current) { // Only restart if not paused and not jumping
      startAutoSlide();
    }
  };

  if (numRenderedSlides === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading carousel...</div>;
  }

  const trackWidthPercentage = (numRenderedSlides / 3) * 100;

  return (
    <div className="redlab-home">
      <div className="container">
        <div
          className="carousel-container"
          onMouseEnter={handleCarouselMouseEnter}
          onMouseLeave={handleCarouselMouseLeave}
        >
          <div
            className="carousel"
            ref={carouselRef}
            style={{ width: `${trackWidthPercentage}%` }}
          >
            {renderedSlides.map((imageSrc, index) => (
              <div
                className="carousel-slide"
                key={`slide-${index}-${imageSrc}`} // Stable key is important
                style={{ width: `${100 / numRenderedSlides}%` }}
              >
                <div className="image-container">
                  <Image
                    src={imageSrc}
                    alt={`Performance image ${index + 1}`}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                    priority={index >= displayIndex && index < displayIndex + 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
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
            {/* Chevron via CSS */}
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => handleNavClick(1)}
            aria-label="Next slide"
          >
            {/* Chevron via CSS */}
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          height: 500px; 
          margin-top: 20px;
          margin-bottom: 20px;
        }
        
        .carousel { /* The track */
          display: flex;
          will-change: transform; /* Hint for browser optimization */
          height: 100%;
          /* transition is now handled by inline style for dynamic disabling */
        }
        
        .carousel-slide { /* Each individual slide item on the track */
          flex-shrink: 0;
          height: 100%;
          box-sizing: border-box;
          padding: 0 8px; /* gutter: 8px on each side means 16px between images */
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden; 
        }
        
        /* ... rest of your existing styles ... */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background-color: rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          border: none;
          outline: none;
          transition: background-color 0.2s ease;
        }
        
        .carousel-arrow:hover {
          background-color: rgba(0, 0, 0, 0.6);
        }

        .carousel-arrow::before {
          content: '';
          display: inline-block;
          border-style: solid;
          border-color: white;
          border-width: 2px 2px 0 0;
          padding: 6px;
        }

        .carousel-arrow-left {
          left: 20px;
        }
        .carousel-arrow-left::before {
          transform: rotate(-135deg);
          margin-left: 3px;
        }
        
        .carousel-arrow-right {
          right: 20px;
        }
        .carousel-arrow-right::before {
          transform: rotate(45deg);
          margin-right: 3px;
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 350px;
          }
          .carousel-arrow {
            width: 38px;
            height: 38px;
          }
          .carousel-arrow::before {
            padding: 5px;
          }
           .carousel-arrow-left {
            left: 10px;
          }
          .carousel-arrow-right {
            right: 10px;
          }
        }
        @media (max-width: 480px) {
          .carousel-container {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}