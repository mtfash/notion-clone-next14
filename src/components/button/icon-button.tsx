import { cn } from "@/lib/utils";
import * as React from "react";

type IconButtonProps = {
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
} & React.ComponentPropsWithRef<"div">;

const IconButton = (
  { children, className, size = "md", ...rest }: IconButtonProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <div
    ref={ref}
    role="button"
    className={cn(
      "hover:bg-[#efefef] aspect-square flex items-center justify-center",
      {
        "rounded-[4px] px-[10px] py-[4px]": size === "md",
        "rounded-[4px] px-[6px] py-[2px]": size === "sm",
      },
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default React.forwardRef<HTMLDivElement, IconButtonProps>(IconButton);
