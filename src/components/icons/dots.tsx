import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function Dots({ className, size }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 13 3"
      className={cn(
        "block fill-inherit flex-shrink-0",
        {
          "w-[12px] h-[12px]": size === "sm",
          "w-[18px] h-[18px]": size === "md",
        },
        className
      )}
    >
      <g>
        <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
        <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
        <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
      </g>
    </svg>
  );
}
