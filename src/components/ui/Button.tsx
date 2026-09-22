// src/components/ui/Button.tsx
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-white shadow-sm hover:bg-brand-orange-dark hover:shadow-md",
  secondary:
    "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-lg px-6 py-3 font-sans text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
  target?: undefined;
  rel?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
