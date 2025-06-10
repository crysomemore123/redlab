'use client';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';

export default function Home() {
  const baseImages = useMemo(() => [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
  ], []);

  const numBaseImages = baseImages.length;

  const renderedSlides = useMemo(() => {
    if (numBaseImages === 0) return [];
    return [
      baseImages[numBaseImages - 1], // Clone of the last image
      ...baseImages,
      baseImages[0]                 // Clone of the first image
    ];
  }, [baseImages, numBaseImages]);

  const numRenderedSlides = renderedSlides.length;

  // --- REWRITTEN STATE AND LOGIC ---

  // Start at index 1 (the first real image)
  const [displayIndex, setDisplayIndex] = useState(1);
  // State to lock interactions during an animation
  const [isSliding, setIsSliding] = useState(false);
  // State to manage auto-play pausing
  const [isPaused, setIsPaused] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);


  // --- HANDLERS ---

  // Handles both manual and auto-played slides
  const slide = useCallback((direction: 'next' | 'prev') => {
    if (isSliding || numBaseImages === 0) return; // The Lock: Do nothing if already sliding

    setIsSliding(true); // Engage lock
    setDisplayIndex(prev => prev + (direction === 'next' ? 1 : -1));
  }, [isSliding, numBaseImages]);

  // This function is called when the CSS transition ends
  const handleTransitionEnd = useCallback(() => {
    setIsSliding(false); // Release lock

    // If we've landed on a clone, jump to the real slide without animation
    if (displayIndex === 0) { // Landed on the clone of the last image
      if (carouselRef.current) carouselRef.current.style.transition = 'none';
      setDisplayIndex(numBaseImages);
    } else if (displayIndex === numBaseImages + 1) { // Landed on the clone of the first image
      if (carouselRef.current) carouselRef.current.style.transition = 'none';
      setDisplayIndex(1);
    }
  }, [displayIndex, numBaseImages]);


  // --- EFFECTS ---

  // This effect applies the transform and re-enables CSS transitions after a jump
  useEffect(() => {
    if (carouselRef.current) {
      // If we are on a real slide, ensure the transition animation is active.
      // This is also crucial for re-enabling transitions after a jump.
      if (displayIndex > 0 && displayIndex <= numBaseImages) {
        carouselRef.current.style.transition = 'transform 0.6s ease-in-out';
      }
      
      const percentageToShiftPerSlide = 100 / numRenderedSlides;
      const offsetPercentage = displayIndex * percentageToShiftPerSlide;
      carouselRef.current.style.transform = `translateX(-${offsetPercentage}%)`;
    }
  }, [displayIndex, numRenderedSlides]);

  // Effect for auto-sliding
  useEffect(() => {
    if (isPaused || isSliding || numBaseImages === 0) {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      return;
    }

    autoSlideTimerRef.current = setInterval(() => slide('next'), 3000);

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isPaused, isSliding, numBaseImages, slide]);

  // Effect to handle the 5-second pause after manual navigation
  useEffect(() => {
    if (isPaused) {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 5000);
    }
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [isPaused]);


  // Navigation handlers for buttons and keyboard
  const handleNavClick = (direction: 'next' | 'prev') => {
    setIsPaused(true); // Pause auto-play on manual click
    slide(direction);
  };
  
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNavClick('next');
      else if (e.key === 'ArrowLeft') handleNavClick('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); // Empty dependency array is fine as handleNavClick is stable


  if (numRenderedSlides === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading carousel...</div>;
  }

  const trackWidthPercentage = (numRenderedSlides / 3) * 100;

  return (
    <div className="redlab-home">
      <div className="container">
        <div
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="carousel"
            ref={carouselRef}
            style={{ width: `${trackWidthPercentage}%` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {renderedSlides.map((imageSrc, index) => (
              <div
                className="carousel-slide"
                key={`slide-${index}-${imageSrc}`}
                style={{ width: `${100 / numRenderedSlides}%` }}
              >
                <div className="image-container">
                  <Image
                    src={imageSrc}
                    alt={`Performance image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    priority={index >= 1 && index <= 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => handleNavClick('prev')}
            aria-label="Previous slide"
          />
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => handleNavClick('next')}
            aria-label="Next slide"
          />
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          height: 450px;
          margin-top: 40px;
          margin-bottom: 20px;
        }
        
        .carousel {
          display: flex;
          height: 100%;
          will-change: transform;
        }
        
        .carousel-slide {
          flex-shrink: 0;
          height: 100%;
          box-sizing: border-box;
          padding: 0 8px;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden; 
        }
        
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
          .carousel-container { height: 300px; }
          .carousel-arrow { width: 38px; height: 38px; }
          .carousel-arrow::before { padding: 5px; }
          .carousel-arrow-left { left: 10px; }
          .carousel-arrow-right { right: 10px; }
        }
        @media (max-width: 480px) {
          .carousel-container { height: 220px; }
        }
      `}</style>
    </div>
  );
}