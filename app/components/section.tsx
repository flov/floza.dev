import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-foreground/10 py-14">
      <h2 className="text-xs font-medium tracking-[0.18em] text-foreground/55 uppercase">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
