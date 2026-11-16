import { ExperienceList } from "@/app/components/experience-list";
import { GitHubProfileSummary } from "@/app/components/github-profile-summary";
import { Hero } from "@/app/components/hero";
import { ProjectList } from "@/app/components/project-card";
import { Section } from "@/app/components/section";
import { SocialLinks } from "@/app/components/social-links";
import { nav, profile, skillGroups } from "@/lib/site-content";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div className="sticky top-0 z-10 border-b border-foreground/10 bg-background/85 backdrop-blur">
        <nav
          aria-label="Page"
          className="mx-auto flex max-w-3xl items-center gap-5 overflow-x-auto px-6 py-3 text-sm"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/65 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <main id="content" className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <Section id="about" title="About">
          <p className="max-w-2xl text-base leading-7 text-foreground/80">
            {profile.bio}
          </p>
          <dl className="mt-8 flex flex-col gap-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt className="text-sm text-foreground/50">{group.label}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-foreground/10 px-3 py-1 text-sm text-foreground/80"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <GitHubProfileSummary />
        </Section>
        <Section id="experience" title="Experience">
          <ExperienceList />
        </Section>
        <Section id="projects" title="Projects">
          <ProjectList />
        </Section>
        <Section id="contact" title="Contact">
          <p className="max-w-xl text-base leading-7 text-foreground/80">
            Open to software engineering projects. The fastest way to reach me
            is email.
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </Section>
      </main>
      <footer className="border-t border-foreground/10">
        <p className="mx-auto max-w-3xl px-6 py-8 text-sm text-foreground/45">
          {profile.name} · {profile.location}
        </p>
      </footer>
    </div>
  );
}
