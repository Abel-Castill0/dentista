"use client";

import { CldImage } from "next-cloudinary";

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

/**
 * Usa CldImage (Cloudinary optimizado) cuando NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
 * está configurado. Mientras tanto, cae a <img> normal para placeholders.
 */
export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  loading,
  priority,
}: SmartImageProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (cloudName) {
    return (
      <CldImage
        src={src}
        alt={alt}
        width={width ?? 800}
        height={height ?? 600}
        className={className}
        loading={loading}
        priority={priority}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      referrerPolicy="no-referrer"
    />
  );
}
