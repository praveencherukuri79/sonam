import React, {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { AlertCircle, Loader2, Pause, Play, Volume2, VolumeX } from 'lucide-react';

interface VideoCardProps {
  caption: string;
  image?: string;
  videoUrl?: string | readonly string[];
}

function sourceMimeType(url: string): string {
  const path = url.split('?')[0].toLowerCase();
  if (path.endsWith('.webm')) return 'video/webm';
  return 'video/mp4';
}

export function VideoCard({ caption, image, videoUrl }: VideoCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playNonce, setPlayNonce] = useState(0);
  const videoSources = Array.isArray(videoUrl) ? videoUrl : videoUrl ? [videoUrl] : [];
  const hasVideo = videoSources.length > 0;
  const canRenderSources = hasVideo && shouldLoad;
  const sourcesKey = videoSources.join('|');

  useLayoutEffect(() => {
    if (!canRenderSources || !videoRef.current) {
      return;
    }

    videoRef.current.load();
  }, [canRenderSources, sourcesKey]);

  useEffect(() => {
    if (playNonce === 0 || !canRenderSources) {
      return undefined;
    }

    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    setHasError(false);
    setIsBuffering(true);

    void video.play().catch((err: unknown) => {
      setIsBuffering(false);
      const name = err && typeof err === 'object' && 'name' in err ? String((err as { name?: string }).name) : '';
      if (name === 'NotAllowedError' || name === 'AbortError') {
        return;
      }
      setHasError(true);
      setIsPlaying(false);
    });

    return undefined;
  }, [playNonce, canRenderSources]);

  useEffect(() => {
    const card = cardRef.current;

    if (!card || !hasVideo) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          return;
        }

        videoRef.current?.pause();
      },
      { rootMargin: '600px 0px', threshold: 0.01 },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, [hasVideo]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleTogglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused || video.ended) {
      if (!shouldLoad) {
        setShouldLoad(true);
      }

      setPlayNonce((n) => n + 1);
      return;
    }

    video.pause();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) {
      return;
    }

    event.preventDefault();
    handleTogglePlayback();
  };

  const handleToggleMute = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMuted((muted) => !muted);
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const nextTime = Number(event.currentTarget.value);

    if (videoRef.current) {
      videoRef.current.currentTime = nextTime;
    }

    setCurrentTime(nextTime);
  };

  return (
    <article
      ref={cardRef}
      className={`shadow-brand-video group relative aspect-[9/16] overflow-hidden rounded-[22px] bg-gradient-to-br from-brand-green/20 via-brand-mint/20 to-brand-saffron/20 sm:rounded-[28px] ${hasVideo ? 'cursor-pointer' : ''}`}
      aria-label={hasVideo ? `${isPlaying ? 'Pause' : 'Play'} ${caption}` : caption}
      onClick={hasVideo ? handleTogglePlayback : undefined}
      onKeyDown={hasVideo ? handleKeyDown : undefined}
      onPointerEnter={hasVideo ? () => setShouldLoad(true) : undefined}
      role={hasVideo ? 'button' : undefined}
      tabIndex={hasVideo ? 0 : undefined}
    >
      {hasVideo ? (
        <div className="relative h-full min-h-0 w-full bg-brand-accent-soft">
          {image ? (
            <img
              src={image}
              alt=""
              draggable={false}
              className={`absolute inset-0 z-0 box-border h-full w-full object-contain p-4 transition-opacity duration-300 ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            />
          ) : null}
          <video
            ref={videoRef}
            className={`relative z-10 h-full w-full object-cover object-center ${
              isPlaying ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onEnded={() => setIsPlaying(false)}
            onCanPlay={() => setIsBuffering(false)}
            onError={() => {
              setHasError(true);
              setIsBuffering(false);
              setIsPlaying(false);
            }}
            onLoadedMetadata={(event) => {
              setDuration(event.currentTarget.duration);
              setHasError(false);
            }}
            onPause={() => {
              setIsPlaying(false);
              setIsBuffering(false);
            }}
            onPlay={(event) => {
              document.querySelectorAll<HTMLVideoElement>('video[data-video-card="true"]').forEach((video) => {
                if (video !== event.currentTarget) {
                  video.pause();
                }
              });
              setIsBuffering(false);
              setIsPlaying(true);
            }}
            onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
            onWaiting={() => setIsBuffering(true)}
            data-video-card="true"
            muted={isMuted}
            playsInline
            preload={isPlaying ? 'auto' : shouldLoad ? 'metadata' : 'none'}
          >
            {canRenderSources &&
              videoSources.map((source) => (
                <source key={source} src={source} type={sourceMimeType(source)} />
              ))}
            Your browser does not support the video tag.
          </video>
        </div>
      ) : image && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {hasVideo && isBuffering && !hasError && (
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-brand-video-scrim/20">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-cream text-brand-green shadow-xl">
            <Loader2 className="animate-spin" size={24} />
          </div>
        </div>
      )}
      {hasVideo && hasError && (
        <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-brand-video-scrim/75 p-5 text-center text-white">
          <AlertCircle className="mb-3 text-brand-gold" size={28} />
          <p className="text-sm font-extrabold uppercase tracking-[0.16em]">Video unavailable</p>
          <p className="mt-2 text-xs leading-5 text-white/70">Please try again later.</p>
        </div>
      )}
      {hasVideo && isPlaying && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-brand-video-scrim/85 via-brand-video-scrim/25 to-transparent px-3 pb-3 pt-12">
          <div className="pointer-events-auto flex items-center gap-3">
            <button
              type="button"
              aria-label={isPlaying ? `Pause ${caption}` : `Play ${caption}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-ink shadow-lg transition hover:bg-brand-accent-soft"
              onClick={(event) => {
                event.stopPropagation();
                handleTogglePlayback();
              }}
            >
              <Pause size={17} fill="currentColor" />
            </button>
            <input
              aria-label={`Seek ${caption}`}
              className="h-1.5 min-w-0 flex-1 cursor-pointer accent-brand-gold"
              max={duration || 0}
              min="0"
              onChange={handleSeek}
              onClick={(event) => event.stopPropagation()}
              step="0.1"
              type="range"
              value={currentTime}
            />
            <button
              type="button"
              aria-label={isMuted ? `Unmute ${caption}` : `Mute ${caption}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-ink shadow-lg transition hover:bg-brand-accent-soft"
              onClick={handleToggleMute}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
          </div>
        </div>
      )}
      {(!hasVideo || (!isPlaying && !hasError)) && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-ink/5 via-brand-ink/10 to-brand-ink/75"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
            {hasVideo ? (
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-brand-cream/50 bg-brand-cream shadow-xl transition-transform group-hover:scale-110">
                <Play size={24} className="ml-1 text-brand-green" fill="currentColor" />
              </div>
            ) : (
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-brand-cream/50 bg-brand-cream shadow-xl transition-transform group-hover:scale-110">
                <Play size={24} className="ml-1 text-brand-green" fill="currentColor" />
              </div>
            )}
            <p className="inline-flex rounded-full bg-brand-video-scrim px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-cream sm:text-sm">{caption}</p>
          </div>
        </>
      )}
    </article>
  );
}
