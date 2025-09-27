"use client";

import { useEffect, useRef, useState } from "react";

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
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Video play failed:", err);
            // Poster stays visible if autoplay is blocked
          });
        }
      };

      const handleError = (e: Event) => {
        console.error("Video failed to load:", e);
        setHasError(true);
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("error", handleError);

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  if (hasError) {
    return (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/homepage-about.jpg)" }}
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
        poster="/homepage-about.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          console.error("Video error:", e);
          setHasError(true);
        }}
      >
        {/* Optional WebM fallback if you generate one via Cloudinary */}
        {/* <source src="https://res.cloudinary.com/.../video.webm" type="video/webm" /> */}
        <source
          src="https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1758931445/katherine-taylor-escort-video_xzyalf.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Fallback image until the video shows */}
      {!showVideo && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/homepage-about.jpg)" }}
        />
      )}
    </div>
  );
}
