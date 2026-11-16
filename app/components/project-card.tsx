import Image from "next/image";
import { projects } from "@/lib/site-content";

export function ProjectList() {
  return (
    <ul className="flex flex-col gap-4">
      {projects.map((project) => (
        <li
          key={project.title}
          className="rounded-2xl border border-foreground/10 p-5 sm:p-6"
        >
          {"image" in project && project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={2752}
              height={1536}
              sizes="(min-width: 48rem) 720px, 100vw"
              className="mb-5 h-auto w-full rounded-xl ring-1 ring-foreground/10"
            />
          ) : null}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="text-sm text-foreground/50">{project.period}</p>
          </div>
          <p className="mt-1 text-sm text-foreground/65">{project.subtitle}</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm leading-6 text-foreground/80">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="pl-4 -indent-4">
                <span className="text-foreground/35" aria-hidden="true">
                  —{" "}
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 underline-offset-4 hover:underline dark:text-amber-300"
            >
              {project.hrefLabel}
            </a>
            {"repos" in project &&
              project.repos.map((repo) => (
                <a
                  key={repo.href}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 underline-offset-4 hover:text-foreground hover:underline"
                >
                  {repo.label}
                </a>
              ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
