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
  const slidesToPreview = 3; // Number of images visible at once

  // 1. IMPROVED CLONING: Clone 3 images at each end for a seamless 3-up transition
  const renderedSlides = useMemo(() => {
    if (numBaseImages === 0) return [];
    const lastThree = baseImages.slice(-slidesToPreview);
    const firstThree = baseImages.slice(0, slidesToPreview);
    return [...lastThree, ...baseImages, ...firstThree];
  }, [baseImages, numBaseImages]);

  const numRenderedSlides = renderedSlides.length;

  // Start at index 3 (which is the first real image after the 3 clones)
  const [displayIndex, setDisplayIndex] = useState(slidesToPreview);
  const [isSliding, setIsSliding] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 2. STABLE SLIDE FUNCTION
  const slide = useCallback((direction: 'next' | 'prev') => {
    if (isSliding || numBaseImages === 0) return;
    setIsSliding(true);
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.6s ease-in-out';
    }
    
    setDisplayIndex(prev => prev + (direction === 'next' ? 1 : -1));
  }, [isSliding, numBaseImages]);

  // 3. THE "INVISIBLE JUMP" LOGIC
  const handleTransitionEnd = useCallback(() => {
    setIsSliding(false);
    if (!carouselRef.current) return;

    // If we landed on the "right" clones, jump back to the "real" first images
    if (displayIndex >= numBaseImages + slidesToPreview) {
      carouselRef.current.style.transition = 'none';
      setDisplayIndex(slidesToPreview);
    } 
    // If we landed on the "left" clones, jump forward to the "real" last images
    else if (displayIndex < slidesToPreview) {
      carouselRef.current.style.transition = 'none';
      setDisplayIndex(numBaseImages + slidesToPreview - 1);
    }
  }, [displayIndex, numBaseImages]);

  // 4. APPLY TRANSFORM
  useEffect(() => {
    if (carouselRef.current) {
      const percentageToShiftPerSlide = 100 / numRenderedSlides;
      const offsetPercentage = displayIndex * percentageToShiftPerSlide;
      carouselRef.current.style.transform = `translateX(-${offsetPercentage}%)`;
    }
  }, [displayIndex, numRenderedSlides]);

  // Auto-sliding logic
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

  useEffect(() => {
    if (isPaused) {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), 5000);
    }
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, [isPaused]);

  const handleNavClick = useCallback((direction: 'next' | 'prev') => {
    setIsPaused(true);
    slide(direction);
  }, [slide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNavClick('next');
      else if (e.key === 'ArrowLeft') handleNavClick('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNavClick]);

  if (numRenderedSlides === 0) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading carousel...</div>;
  }

  // Width is based on the fact that 3 images are visible at once
  const trackWidthPercentage = (numRenderedSlides / slidesToPreview) * 100;

  return (
    <div className="redlab-home">
      <div className="container">
        <div
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="carousel"
            ref={carouselRef}
            style={{ 
                width: `${trackWidthPercentage}%`,
                display: 'flex',
                height: '100%',
                willChange: 'transform'
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {renderedSlides.map((imageSrc, index) => (
              <div
                className="carousel-slide"
                key={`slide-${index}-${imageSrc}`}
                style={{ width: `${100 / numRenderedSlides}%`, flexShrink: 0, height: '100%', padding: '0 8px', boxSizing: 'border-box' }}
              >
                <div className="image-container" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Image
                    src={imageSrc}
                    alt={`Performance image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    priority={index >= slidesToPreview && index <= slidesToPreview + 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow carousel-arrow-left" onClick={() => handleNavClick('prev')} aria-label="Previous slide" />
          <button className="carousel-arrow carousel-arrow-right" onClick={() => handleNavClick('next')} aria-label="Next slide" />
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
        
        /* Removed .carousel styles from here to avoid conflicts with inline style logic */

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

        .carousel-arrow-left { left: 20px; }
        .carousel-arrow-left::before { transform: rotate(-135deg); margin-left: 3px; }
        
        .carousel-arrow-right { right: 20px; }
        .carousel-arrow-right::before { transform: rotate(45deg); margin-right: 3px; }

        @media (max-width: 768px) {
          .carousel-container { height: 300px; }
          .carousel-arrow { width: 38px; height: 38px; }
          .carousel-arrow::before { padding: 5px; }
        }
        @media (max-width: 480px) {
          .carousel-container { height: 220px; }
        }
      `}</style>
    </div>
  );
}