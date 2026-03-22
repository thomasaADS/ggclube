import { cn } from "../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  padded?: boolean;
}

export function Section({ className, container = true, padded = true, children, ...props }: SectionProps) {
  return (
    <section className={cn(padded && "py-20 md:py-28", className)} {...props}>
      {container ? (
        <div className="mx-auto max-w-7xl px-6">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-12 max-w-2xl", className)} {...props} />;
}

export function SectionLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-3",
        className
      )}
      {...props}
    />
  );
}

export function SectionTitle({
  className,
  as: Tag = "h2",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" }) {
  return (
    <Tag
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold text-ivory-50 tracking-tight leading-[1.1]",
        className
      )}
      {...props}
    />
  );
}

export function SectionDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-lg text-platinum-400 leading-relaxed mt-4", className)}
      {...props}
    />
  );
}
