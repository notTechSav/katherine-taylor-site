'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Intersection Observer to load video only when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !shouldLoad) {
              setShouldLoad(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(video);
      
      return () => observer.disconnect();
    }
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      poster="/homepage-about.jpg"
    >
      {shouldLoad && <source src="/hero-video.mp4" type="video/mp4" />}
      <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"></div>
    </video>
  );
}
