import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

type LinkButtonProps = {
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  href: string;
} & React.ComponentPropsWithRef<"a">;

const LinkButton = (
  { href, children, className, size = "md", ...rest }: LinkButtonProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => (
  <Link
    ref={ref}
    href={href}
    role="button"
    className={cn(
      "hover:bg-[#efefef]",
      {
        "rounded-[4px] px-[10px] py-[4px]": size === "md",
        "rounded-[4px] px-[6px] py-[2px]": size === "sm",
      },
      className
    )}
    {...rest}
  >
    {children}
  </Link>
);

export default React.forwardRef<HTMLAnchorElement, LinkButtonProps>(LinkButton);
