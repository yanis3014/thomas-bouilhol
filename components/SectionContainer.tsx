import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({ children, className = "" }: SectionContainerProps) {
  return <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>;
}
