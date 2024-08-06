import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Skeleton = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={twMerge("animate-pulse rounded-lg bg-slate-300/90", className)}
    {...props}
  />
);
