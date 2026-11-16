import { experience } from "@/lib/site-content";

export function ExperienceList() {
  return (
    <ol className="flex flex-col">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.period}`}
          className="grid gap-1 border-b border-foreground/10 py-6 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
        >
          <p className="text-sm text-foreground/50">{job.period}</p>
          <div>
            <h3 className="font-medium">
              {job.role}
              <span className="font-normal text-foreground/55">
                {" "}
                · {job.company}
              </span>
            </h3>
            <p className="mt-0.5 text-sm text-foreground/45">{job.location}</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-6 text-foreground/80">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
