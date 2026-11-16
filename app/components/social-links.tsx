import { links } from "@/lib/site-content";

const icons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  "Stack Overflow": StackOverflowIcon,
  Email: MailIcon,
} as const;

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => {
        const Icon = icons[link.label];
        const external = link.href.startsWith("http");
        return (
          <li key={link.href}>
            <a
              href={link.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-foreground/15 px-3.5 text-sm text-foreground/80 transition-colors hover:border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
            >
              <Icon />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 fill-current">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 fill-current">
      <path d="M0 1.15C0 .51.52 0 1.16 0h13.68C15.48 0 16 .51 16 1.15v13.7c0 .64-.52 1.15-1.16 1.15H1.16C.52 16 0 15.49 0 14.85V1.15ZM4.77 13.6V6.16H2.42V13.6h2.35ZM3.59 5.2a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72ZM13.6 13.6V9.5c0-2.2-1.17-3.22-2.74-3.22-1.26 0-1.82.7-2.14 1.18V6.16H6.37c.03.7 0 7.44 0 7.44h2.35V9.67c0-.21.02-.42.08-.57.18-.42.58-.86 1.26-.86.89 0 1.24.68 1.24 1.67v3.69H13.6Z" />
    </svg>
  );
}

function StackOverflowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 fill-current">
      <path d="M12.7 14.3v-3.4h1.5V16H1.2v-5.1h1.5v3.4h10Zm.3-4.6-.9-1.2-5.6 4.1.9 1.2 5.6-4.1Zm1.3-2.3-1.6-.8-3.4 6.5 1.6.8 3.4-6.5Zm-9.6 6.2.3-1.5-6.3-1.4-.3 1.5 6.3 1.4Zm7.5-8.8L9.6 2.4 4.4 9.7l2.6 2.4 4.6-7.3ZM5.3 1.2 3.4 0 .6 5.2l1.9 1.2L5.3 1.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 fill-current">
      <path d="M1.5 2.5h13a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm.4 1.6 5.7 4.1c.2.2.6.2.8 0l5.7-4.1H1.9Zm12.6 1-4.8 3.5 4.8 3.6V5.1Zm-.4 8.4-5.5-4.1-.6.4a1.6 1.6 0 0 1-1.9 0l-.6-.4-5.5 4.1h14.1Zm-13.1-.9 4.8-3.6L1 5.1v7.5Z" />
    </svg>
  );
}
