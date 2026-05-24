"use client";

import * as React from "react";
import { Pause, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const artists = [
  {
    name: "Big M",
    role: "Trap oscuro",
    song: "Luces bajas",
    image: "/bigm.JPG",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    soundcloudUrl: undefined,
  },
  {
    name: "Dikleo",
    role: "Flow melodico",
    song: "Sin pausa",
    image: "/dikleo.JPG",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    soundcloudUrl: undefined,
  },
  {
    name: "Alon",
    role: "Voz principal",
    song: "Corta la bocha",
    image: "/alon.JPG",
    audio: undefined,
    soundcloudUrl: "https://soundcloud.com/alonpue/corta-la-bocha-elsurfmeceba",
  },
  {
    name: "Goder",
    role: "Producer",
    song: "Base pesada",
    image:
      "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?auto=format&fit=crop&w=900&q=85",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    soundcloudUrl: undefined,
  },
];

type Artist = (typeof artists)[number];

export default function ArtistCarousel() {
  const audioRefs = React.useRef<Record<string, HTMLAudioElement | null>>({});
  const [playing, setPlaying] = React.useState<string | null>(null);

  const toggleSong = async (artist: Artist) => {
    Object.entries(audioRefs.current).forEach(([name, audio]) => {
      if (name !== artist.name) {
        audio?.pause();
      }
    });

    if (playing === artist.name) {
      audioRefs.current[artist.name]?.pause();
      setPlaying(null);
      return;
    }

    if (artist.soundcloudUrl) {
      setPlaying(artist.name);
      return;
    }

    if (artist.audio) {
      const currentAudio = audioRefs.current[artist.name];

      if (!currentAudio) {
        return;
      }

      await currentAudio.play();
    }

    setPlaying(artist.name);
  };

  return (
    <Carousel className="w-full" opts={{ loop: true, slidesToScroll: 3 }}>
      <CarouselContent className="-ml-4">
        {artists.map((artist, index) => {
          const isPlaying = playing === artist.name;

          return (
            <CarouselItem
              key={artist.name}
              className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <article
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#151515] shadow-2xl shadow-black/30 transition duration-500 hover:-translate-y-1 hover:border-[#d7ff4f]/40"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-950">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="h-full w-full animate-film-pan object-cover opacity-80 grayscale-[20%] transition duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.28)_42%,rgba(0,0,0,0.92)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.24),transparent_34%)] opacity-60" />
                  <div className="absolute inset-x-0 top-0 h-px bg-white/40" />

                  <button
                    type="button"
                    onClick={() => void toggleSong(artist)}
                    className="absolute bottom-4 right-4 inline-flex size-12 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white shadow-xl shadow-black/40 backdrop-blur-xl transition hover:scale-105 hover:bg-[#d7ff4f] hover:text-black"
                    aria-label={
                      isPlaying
                        ? `Pausar ${artist.song}`
                        : `Reproducir ${artist.song}`
                    }
                  >
                    {isPlaying ? (
                      <Pause className="size-4 fill-current" />
                    ) : (
                      <Play className="ml-0.5 size-4 fill-current" />
                    )}
                  </button>

                  <div className="absolute bottom-4 left-4 max-w-[75%]">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d7ff4f]">
                      {artist.role}
                    </p>
                    <h3 className="mt-1 text-3xl font-black uppercase leading-none text-white">
                      {artist.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 py-3">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                      Track
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-zinc-200">
                      {artist.song}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-zinc-300 backdrop-blur-md">
                    {isPlaying ? "Play" : "Preview"}
                  </span>
                </div>

                {artist.audio ? (
                  <audio
                    ref={(node) => {
                      audioRefs.current[artist.name] = node;
                    }}
                    src={artist.audio}
                    preload="none"
                    onEnded={() => setPlaying(null)}
                  />
                ) : null}

                {artist.soundcloudUrl && isPlaying ? (
                  <iframe
                    title={`${artist.name} - ${artist.song}`}
                    width="1"
                    height="1"
                    allow="autoplay"
                    className="pointer-events-none absolute -left-96 top-0 h-px w-px opacity-0"
                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                      artist.soundcloudUrl
                    )}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
                  />
                ) : null}
              </article>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className="-left-2 top-1/2 border-white/30 bg-white/15 text-white shadow-lg shadow-black/30 backdrop-blur-xl hover:bg-white hover:text-black md:-left-5" />
      <CarouselNext className="-right-2 top-1/2 border-white/30 bg-white/15 text-white shadow-lg shadow-black/30 backdrop-blur-xl hover:bg-white hover:text-black md:-right-5" />
    </Carousel>
  );
}
