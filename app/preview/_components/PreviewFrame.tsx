"use client";

import { useRouter } from "next/navigation";

type PreviewFrameProps = {
  title: string;
  src: string;
};

export function PreviewFrame({ title, src }: PreviewFrameProps) {
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <button
        type="button"
        onClick={() => router.back()}
        className="fixed right-4 top-4 z-[9999] rounded-full bg-background/90 px-5 py-2 font-cormorant text-2xl italic text-cream shadow-lg transition hover:text-blush"
      >
        ← Retour
      </button>
      <iframe title={title} src={src} className="h-full w-full border-none" />
    </div>
  );
}
