import { useEffect, useRef } from 'react';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  const VIDEO_SRC =
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';
  const SENSITIVITY = 2.5;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Helper to perform seeking safely and smoothly at high frame rates
    const performSeek = () => {
      if (!video) return;
      if (isSeekingRef.current) return;

      const duration = video.duration || 1;
      const clampedTarget = Math.max(0, Math.min(targetTimeRef.current, duration));

      if (Math.abs(video.currentTime - clampedTarget) > 0.01) {
        isSeekingRef.current = true;
        try {
          if ('fastSeek' in video) {
            (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek(clampedTarget);
          } else {
            video.currentTime = clampedTarget;
          }
        } catch {
          video.currentTime = clampedTarget;
        } finally {
          setTimeout(() => {
            isSeekingRef.current = false;
          }, 10);
        }
      }
    };

    let rafId: number;
    const loop = () => {
      performSeek();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      const offset = (delta / window.innerWidth) * SENSITIVITY * duration;
      targetTimeRef.current = Math.max(0, Math.min(targetTimeRef.current + offset, duration));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const currentX = e.touches[0].clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      const offset = (delta / window.innerWidth) * SENSITIVITY * duration;
      targetTimeRef.current = Math.max(0, Math.min(targetTimeRef.current + offset, duration));
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        prevXRef.current = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
    };

    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 z-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: '70% center' }}
      />
      {/* Subtle overlay gradient to keep text legible over bright/dark video parts */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 pointer-events-none" />
    </div>
  );
}
