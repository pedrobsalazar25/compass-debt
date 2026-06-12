import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_4px_0_#0f172a] hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_6px_0_#0f172a] active:translate-y-0.5 active:shadow-[0_2px_0_#0f172a]",
        brand: "bg-secondary text-secondary-foreground shadow-[0_4px_0_#1e293b] hover:bg-secondary-strong hover:-translate-y-0.5 hover:shadow-[0_6px_0_#1e293b] active:translate-y-0.5 active:shadow-[0_2px_0_#1e293b]",
        hero: "bg-gradient-to-r from-secondary to-secondary-strong text-white font-semibold shadow-[0_4px_0_#1e293b] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_6px_0_#1e293b] active:translate-y-0.5 active:shadow-[0_2px_0_#1e293b]",
        glass:
          "border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-[0_4px_0_rgba(0,0,0,0.25)] hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-[0_2px_0_rgba(0,0,0,0.25)]",
        destructive: "bg-destructive text-destructive-foreground shadow-[0_4px_0_#450a0a] hover:bg-destructive/90 hover:-translate-y-0.5 hover:shadow-[0_6px_0_#450a0a] active:translate-y-0.5 active:shadow-[0_2px_0_#450a0a]",
        outline:
          "border border-input bg-background/80 text-foreground shadow-[0_4px_0_var(--color-border)] hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_6px_0_var(--color-border)] active:translate-y-0.5 active:shadow-[0_2px_0_var(--color-border)]",
        secondary: "bg-secondary/15 text-foreground shadow-[0_4px_0_rgba(0,0,0,0.05)] hover:bg-secondary/25 hover:-translate-y-0.5 hover:shadow-[0_6px_0_rgba(0,0,0,0.05)] active:translate-y-0.5 active:shadow-[0_2px_0_rgba(0,0,0,0.05)]",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-8 px-3 text-xs",
        smWide: "h-9 px-4 text-xs",
        lg: "h-11 px-8 text-sm",
        xl: "h-12 px-6 text-sm md:px-7",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
