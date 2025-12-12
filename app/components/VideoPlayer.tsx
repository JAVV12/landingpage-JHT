'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface VideoPlayerProps {
  videoId: string;
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSpeedIndicator, setShowSpeedIndicator] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame Player API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, [videoId]);

  const initializePlayer = () => {
    if (!playerRef.current) return;

    playerInstanceRef.current = new window.YT.Player(playerRef.current, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0, // Hide default controls
        disablekb: 1,
        fs: 0,
        rel: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        cc_load_policy: 0,
        playsinline: 1,
        loop: 1,
        playlist: videoId,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event: any) => {
    setDuration(event.target.getDuration());
    event.target.playVideo();
  };

  const onPlayerStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      setShowSpeedIndicator(true);
      // Hide speed indicator after 3 seconds
      setTimeout(() => setShowSpeedIndicator(false), 3000);
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setIsCompleted(true);
      setProgress(100);
      // Allow controls after completion
    }
  };

  // Update progress bar
  useEffect(() => {
    if (!playerInstanceRef.current || !isPlaying) return;

    const interval = setInterval(() => {
      if (playerInstanceRef.current && playerInstanceRef.current.getCurrentTime) {
        const currentTime = playerInstanceRef.current.getCurrentTime();
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isCompleted) return; // Allow seeking only after completion

    e.preventDefault();
    e.stopPropagation();

    // Prevent seeking before completion
    return false;
  };

  const handlePlayerClick = (e: React.MouseEvent) => {
    if (!isCompleted) {
      e.preventDefault();
      e.stopPropagation();
      // Prevent pausing before completion
      return false;
    }
  };

  return (
    <div className="relative w-full h-full group" onClick={handlePlayerClick}>
      {/* Video Player */}
      <div ref={playerRef} className="w-full h-full rounded-xl overflow-hidden" />

      {/* Custom Progress Bar */}
      <div
        className="absolute bottom-4 left-4 right-4 h-3 bg-black/30 rounded-full cursor-pointer group-hover:h-4 transition-all duration-300"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full transition-all duration-300 relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          {/* Animated progress indicator */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Speed Indicator */}
      {showSpeedIndicator && (
        <div className="absolute top-4 right-4 bg-accent-500 text-dark-600 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
          ▶️ 2x SPEED
        </div>
      )}

      {/* Lock Indicator */}
      {!isCompleted && (
        <div className="absolute top-4 left-4 bg-dark-600/80 text-neutral-50 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
          <span>🔒</span>
          Completa el video para continuar
        </div>
      )}

      {/* Completion Message */}
      {isCompleted && (
        <div className="absolute inset-0 bg-dark-600/90 flex items-center justify-center">
          <div className="text-center text-neutral-50">
            <div className="text-2xl mb-2">✅</div>
            <div className="font-bold text-lg">¡Video completado!</div>
            <div className="text-sm opacity-80">Ahora puedes interactuar con la página</div>
          </div>
        </div>
      )}
    </div>
  );
}
