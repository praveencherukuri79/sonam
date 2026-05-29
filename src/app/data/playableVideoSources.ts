/**
 * Slot order: home gallery [0..2], /videos page [0..5].
 * Shared gallery motion sources. Swap entries with per-slot `public/videos/*.mp4` assets when available.
 */
const sharedGalleryClip = [
  'https://videos.pexels.com/video-files/8670876/8670876-hd_720_1280_25fps.mp4',
] as const;

export const galleryVideoBySlot: readonly (readonly string[])[] = [
  sharedGalleryClip,
  sharedGalleryClip,
  sharedGalleryClip,
  sharedGalleryClip,
  sharedGalleryClip,
  sharedGalleryClip,
] as const;
