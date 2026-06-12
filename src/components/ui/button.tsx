import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_6px_18px_rgba(8,23,54,0.35)] hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(8,23,54,0.45)]",
        brand: "bg-secondary text-secondary-foreground shadow-[0_6px_18px_rgba(8,23,54,0.35)] hover:bg-secondary-strong hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(8,23,54,0.45)]",
        hero: "bg-gradient-to-r from-secondary to-secondary-strong text-white font-semibold shadow-[0_6px_22px_rgba(8,23,54,0.42)] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(8,23,54,0.52)]",
        glass:
          "border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-[0_6px_18px_rgba(0,0,0,0.35)] hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)]",
        destructive: "bg-destructive text-destructive-foreground shadow-[0_4px_14px_rgba(69,10,10,0.35)] hover:bg-destructive/90 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(69,10,10,0.45)]",
        outline:
          "border border-input bg-background/80 text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5",
        secondary: "bg-secondary/15 text-foreground shadow-sm hover:bg-secondary/25",
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
