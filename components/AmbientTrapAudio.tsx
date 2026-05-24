"use client";

import * as React from "react";
import { Pause, Volume2 } from "lucide-react";

const alonTrack =
  "https://soundcloud.com/alonpue/corta-la-bocha-elsurfmeceba";

export default function AmbientTrapAudio() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <>
      {enabled ? (
        <iframe
          title="Alon - Corta la bocha"
          width="100%"
          height="166"
          allow="autoplay"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[-1] h-40 w-full opacity-0"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            alonTrack
          )}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
        />
      ) : null}

      <button
        type="button"
        onClick={() => setEnabled((current) => !current)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:bg-[#d7ff4f] hover:text-black"
        aria-label={
          enabled ? "Pausar cancion de Alon" : "Activar cancion de Alon"
        }
      >
        {enabled ? <Pause className="size-4" /> : <Volume2 className="size-4" />}
        {enabled ? "Alon on" : "Alon"}
      </button>
    </>
  );
}
