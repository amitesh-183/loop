import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box({ children, className }: BoxProps) {
  return (
    <div
      className={twMerge(
        `bg-gradient-to-b from-purple-800/30 to-neutral-950 h-fit w-full`,
        className
      )}
    >
      {children}
    </div>
  );
}
