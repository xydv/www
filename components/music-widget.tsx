"use client";

import Link from "next/link";
import { useSSE } from "react-hooks-sse";

export function MusicWidget() {
  const sse = useSSE("update", {
    name: "not playing anything",
    artist: "n/a",
    image: "https://f4.bcbits.com/img/a3316669401_16.jpg",
    isPlaying: false,
  });

  return (
    <div className="border p-3 sm:p-4 w-full">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 bg-muted">
          {sse.image && (
            <img
              src={sse.image || "/placeholder.svg"}
              alt={`${sse.name.toLowerCase()} album art`}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-2">
            <Link
              className="text-md font-medium truncate hover:underline"
              href={`https://music.youtube.com/search?q=${sse.name}`}
              target="_blank"
            >
              {sse.name.toLowerCase()}
            </Link>
            {sse.isPlaying && (
              <div className="equalizer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground truncate">
            {sse.artist.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
