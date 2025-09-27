"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  /** Optional MP4 source (defaults to Cloudinary hosted file) */
  srcMp4?: string;
  /** Optional WebM fallback */
  srcWebm?: string;
  /** Poster shown before playback */
  poster?: string;
  className?: string;
}

export default function HeroVideo({
  srcMp4 = "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1758931445/katherine-taylor-escort-video_xzyalf.mp4",
  srcWebm,
  poster = "/media/hero-poster.jpg",
  className,
}: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        // If autoplay is blocked, just leave poster visible
        console.warn("Autoplay blocked, showing poster only.");
      });
    }
  }, []);

  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
    >
      {srcWebm && <source src={srcWebm} type="video/webm" />}
      <source src={srcMp4} type="video/mp4" />
      {/* Fallback text */}
      Your browser does not support the video tag.
    </video>
  );
}
