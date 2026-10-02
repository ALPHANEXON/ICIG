import Image from "next/image";
import type { SiteImage } from "@/data/images";

interface PhotoProps {
  image: SiteImage;
  /** Tailwind aspect-ratio classes for the frame. */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export default function Photo({
  image,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className = "",
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden rounded-card bg-subtle ${aspect} ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

/** Dimmed photograph behind a night section. The parent section needs
    `relative overflow-hidden` and its content `relative`. */
export function Backdrop({
  image,
  priority = false,
  opacity = "opacity-25",
  scrim = "bg-gradient-to-b from-night/50 via-night/70 to-night",
}: {
  image: SiteImage;
  priority?: boolean;
  opacity?: string;
  /** Gradient laid over the photo to keep text legible. */
  scrim?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Image
        src={image.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        priority={priority}
        className={`object-cover ${opacity}`}
      />
      <div className={`absolute inset-0 ${scrim}`} />
    </div>
  );
}
