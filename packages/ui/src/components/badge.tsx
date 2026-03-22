import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase transition-colors",
  {
    variants: {
      variant: {
        verified: "bg-emerald-900/60 text-emerald-400 border border-emerald-800/60",
        unverified: "bg-graphite-800 text-platinum-400 border border-graphite-600",
        "under-review": "bg-trust-500/10 text-trust-400 border border-trust-500/30",
        concern: "bg-alert-600/10 text-alert-400 border border-alert-600/30",
        paused: "bg-graphite-800 text-platinum-500 border border-graphite-700",
        premium: "bg-emerald-800/40 text-emerald-300 border border-emerald-700/50",
        new: "bg-emerald-600/20 text-emerald-400 border border-emerald-600/40",
        live: "bg-alert-600/20 text-alert-400 border border-alert-600/40 animate-pulse",
      },
    },
    defaultVariants: {
      variant: "unverified",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
