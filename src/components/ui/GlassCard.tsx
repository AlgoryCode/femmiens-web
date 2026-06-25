import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  shine?: boolean;
  variant?: "default" | "rose" | "lavender";
}

export function GlassCard({
  children,
  className = "",
  shine = false,
  variant = "default",
}: GlassCardProps) {
  const variantClass =
    variant === "rose"
      ? "glass-rose"
      : variant === "lavender"
        ? "glass-lavender"
        : "glass";

  return (
    <div
      className={`${variantClass} rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,120,138,0.18)] ${shine ? "glass-shine" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
