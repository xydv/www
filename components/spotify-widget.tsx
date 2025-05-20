"use client"

import { useState } from "react"
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react"

interface SpotifyWidgetProps {
  // These props would be populated dynamically
  songTitle?: string
  artistName?: string
  albumArt?: string
  isPlaying?: boolean
  duration?: number
  progress?: number
}

export function SpotifyWidget({
  songTitle = "not playing",
  artistName = "spotify",
  albumArt = "/placeholder.svg?height=60&width=60",
  isPlaying = false,
  duration = 180, // 3 minutes in seconds
  progress = 45, // 45 seconds
}: SpotifyWidgetProps) {
  return (
    <div className="border p-3 sm:p-4 w-full">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 bg-muted">
          {albumArt && (
            <img
              src={albumArt || "/placeholder.svg"}
              alt={`${songTitle} album art`}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className="flex-grow min-w-0">
          <h4 className="text-md font-medium truncate">{songTitle}</h4>
          <p className="text-sm text-muted-foreground truncate">{artistName}</p>
        </div>
      </div>
    </div>
  )
}
