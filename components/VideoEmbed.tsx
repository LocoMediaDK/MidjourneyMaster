/**
 * VideoEmbed component - Embeds videos from various sources.
 * Supports YouTube, Vimeo, Google Drive, and generic iframe embeds.
 * Responsive design - maintains 16:9 aspect ratio.
 */

interface VideoEmbedProps {
  // The video URL (YouTube, Vimeo, Google Drive, or direct iframe src)
  url: string;
  // Optional title for accessibility
  title?: string;
}

/**
 * Converts a YouTube watch URL to an embed URL with optimal parameters for courses.
 * Example: https://www.youtube.com/watch?v=abc123 -> https://www.youtube.com/embed/abc123?rel=0&modestbranding=1
 */
function getYouTubeEmbedUrl(url: string): string | null {
  // Handle various YouTube URL formats
  const patterns = [
    // Standard watch URL: youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/,
    // Short URL: youtu.be/VIDEO_ID
    /(?:youtu\.be\/)([a-zA-Z0-9_-]+)/,
    // Already an embed URL
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      // Add parameters for optimal course video experience:
      // - rel=0: Only show related videos from same channel (not random YouTube videos)
      // - modestbranding=1: Minimize YouTube branding
      // - controls=1: Show player controls (default, but explicit)
      return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1&controls=1`;
    }
  }

  return null;
}

/**
 * Converts a Vimeo URL to an embed URL.
 */
function getVimeoEmbedUrl(url: string): string | null {
  const pattern = /(?:vimeo\.com\/)(\d+)/;
  const match = url.match(pattern);
  
  if (match && match[1]) {
    return `https://player.vimeo.com/video/${match[1]}`;
  }
  
  return null;
}

/**
 * Converts a Google Drive URL to an embed URL.
 * Example: https://drive.google.com/file/d/FILE_ID/view -> https://drive.google.com/file/d/FILE_ID/preview
 */
function getGoogleDriveEmbedUrl(url: string): string | null {
  // Match Google Drive file URLs
  const pattern = /(?:drive\.google\.com\/file\/d\/)([a-zA-Z0-9_-]+)/;
  const match = url.match(pattern);
  
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  
  return null;
}

/**
 * Determines the embed URL based on the source.
 */
function getEmbedUrl(url: string): string {
  // Try YouTube first
  const youtubeUrl = getYouTubeEmbedUrl(url);
  if (youtubeUrl) return youtubeUrl;

  // Try Vimeo
  const vimeoUrl = getVimeoEmbedUrl(url);
  if (vimeoUrl) return vimeoUrl;

  // Try Google Drive
  const googleDriveUrl = getGoogleDriveEmbedUrl(url);
  if (googleDriveUrl) return googleDriveUrl;

  // Return original URL (assume it's already an embed URL)
  return url;
}

export default function VideoEmbed({ url, title = "Video" }: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(url);
  
  // Check if this is a Google Drive video (to add overlay for popup icon)
  const isGoogleDrive = url.includes('drive.google.com');

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-base-300">
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      
      {/* Overlay to hide Google Drive's "Open in Drive" popup icon */}
      {isGoogleDrive && (
        <div 
          className="absolute top-0 right-0 w-20 h-16 pointer-events-none bg-gradient-to-bl from-black/80 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

