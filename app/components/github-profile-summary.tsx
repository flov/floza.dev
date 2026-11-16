import { links, profile } from "@/lib/site-content";

const githubHref = links.find((link) => link.label === "GitHub")?.href;

export function GitHubProfileSummary() {
  if (!githubHref) {
    return null;
  }

  return (
    <a
      href={githubHref}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 block overflow-hidden rounded-xl ring-1 ring-foreground/10 transition-opacity hover:opacity-90"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={profile.githubSummaryCard}
        alt="GitHub profile summary for flov"
        width={700}
        height={200}
        decoding="async"
        loading="lazy"
        className="h-auto w-full"
      />
    </a>
  );
}