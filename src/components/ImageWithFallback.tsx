// app/components/ImageWithFallback.tsx
"use client"; // Mark this as a Client Component

import React, { useState } from 'react';
import Image from 'next/image'; // Use next/image for optimization

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string; // Allow passing a className for styling
  fallbackSrc?: string; // Optional: path to a generic placeholder image
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = "/images/placeholder.jpg", // Default placeholder
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleImageError = () => {
    if (!error) { // Prevent infinite loop if fallback also fails
        setError(true);
        setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleImageError}
      style={{ objectFit: 'cover' }} // Ensures image covers the dimensions, crops if necessary
    />
  );
};

export default ImageWithFallback;