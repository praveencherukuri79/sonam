/**
 * Slot order: home gallery [0..2], /videos page [0..5].
 * One Pexels HD clip is reused everywhere as a placeholder; replace with per-slot `public/videos/*.mp4` when ready.
 */
const pexelsPlaceholderClip = [
  'https://videos.pexels.com/video-files/8670876/8670876-hd_720_1280_25fps.mp4',
] as const;

export const demoVideoBySlot: readonly (readonly string[])[] = [
  pexelsPlaceholderClip,
  pexelsPlaceholderClip,
  pexelsPlaceholderClip,
  pexelsPlaceholderClip,
  pexelsPlaceholderClip,
  pexelsPlaceholderClip,
] as const;
