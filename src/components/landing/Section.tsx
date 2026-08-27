import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  alt,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <section id={id} className={alt ? "bg-surface py-16 sm:py-24" : "py-16 sm:py-24"}>
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">{eyebrow}</p>
          )}
          <h2 className="mt-3 text-2xl font-bold sm:text-4xl">{title}</h2>
          <div className="rule-red mt-4" />
          {description && <p className="mt-5 text-muted-foreground">{description}</p>}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
