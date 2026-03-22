import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-950 disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-600 text-ivory-50 hover:bg-emerald-500 active:bg-emerald-700 shadow-subtle hover:shadow-glow-emerald",
        secondary:
          "bg-graphite-700 text-ivory-100 hover:bg-graphite-600 active:bg-graphite-800 border border-graphite-600",
        ghost:
          "text-ivory-200 hover:bg-graphite-800/50 hover:text-ivory-50",
        outline:
          "border border-graphite-500 text-ivory-200 hover:border-emerald-600 hover:text-emerald-400 bg-transparent",
        platinum:
          "bg-platinum-200 text-obsidian-900 hover:bg-platinum-100 font-semibold",
        danger:
          "bg-alert-600 text-ivory-50 hover:bg-alert-500",
        link:
          "text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-5 text-sm rounded-lg",
        lg: "h-12 px-8 text-base rounded-lg",
        xl: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
