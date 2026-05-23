import { HTMLAttributes } from "react";

type Variant = "low" | "mid" | "high" | "pink";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  rounded?: string;
}

const variantClass: Record<Variant, string> = {
  low:  "glass-low",
  mid:  "glass",
  high: "glass-high",
  pink: "glass-pink",
};

export default function GlassCard({
  children,
  className = "",
  variant = "mid",
  rounded = "rounded-2xl",
  style,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`${rounded} ${variantClass[variant]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
