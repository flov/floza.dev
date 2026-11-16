import Image from "next/image";
import { profile } from "@/lib/site-content";

export function Hero() {
  return (
    <header className="flex flex-col gap-8 py-16 sm:flex-row sm:items-center sm:py-20">
      <Image
        src={profile.image}
        alt={profile.name}
        width={1024}
        height={1024}
        priority
        className="size-28 shrink-0 rounded-full object-cover ring-1 ring-foreground/15 sm:size-36"
      />
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-sm text-foreground/60">{profile.location}</p>
          <h1 className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg leading-7 text-foreground/75">
            {profile.roles}
          </p>
        </div>
        <p className="max-w-xl text-sm leading-6 text-foreground/55">
          “{profile.tagline}”
          <span className="text-foreground/40"> — {profile.taglineAttribution}</span>
        </p>
        <a
          href={profile.cvHref}
          download="Florian_Vallen_CV.pdf"
          className="inline-flex h-11 w-fit items-center rounded-full bg-amber-700 px-5 text-sm font-medium text-white transition-colors hover:bg-amber-600 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
        >
          Download CV (PDF)
        </a>
      </div>
    </header>
  );
}
