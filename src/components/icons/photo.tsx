import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function PhotoIcon({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 14 14"
      className={cn("w-[14px] h-[14px] block fill-gray-400 flex-shrink-0", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm0 12h10L8.5 5.5l-2 4-2-1.5L2 12z"
      ></path>
    </svg>
  );
}
