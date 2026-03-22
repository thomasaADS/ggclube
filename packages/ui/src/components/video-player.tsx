"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "../lib/utils";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

export function VideoPlayer({ youtubeId, title, thumbnail, className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <div className={cn("relative aspect-video rounded-xl overflow-hidden", className)}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={cn(
        "relative aspect-video rounded-xl overflow-hidden group cursor-pointer block w-full",
        className
      )}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-obsidian-950/40 group-hover:bg-obsidian-950/20 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-emerald-600/90 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300 shadow-glow-emerald">
          <Play className="w-6 h-6 text-ivory-50 ml-0.5" />
        </div>
      </div>
    </button>
  );
}
