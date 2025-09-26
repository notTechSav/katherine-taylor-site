'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoaded(true);
        setShowVideo(true);
        // Try to play the video
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error('Video play failed:', error);
            // Don't set hasError for autoplay failures, just show the poster
          });
        }
      };

      const handleError = (e: Event) => {
        console.error('Video failed to load:', e);
        setHasError(true);
      };

      const handleCanPlay = () => {
        setIsLoaded(true);
        setShowVideo(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  if (hasError) {
    return (
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/homepage-about.jpg)',
        }}
      />
    );
  }
  
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/homepage-about.jpg"
        onError={(e) => {
          console.error('Video error:', e);
          setHasError(true);
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback image while video loads */}
      {!showVideo && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/homepage-about.jpg)',
          }}
        />
      )}
    </div>
  );
}
