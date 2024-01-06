import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function TemplateIcon({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 20 20"
      className={cn("w-[20px] h-[20px] block fill-gray-400 flex-shrink-0", className)}
    >
      <g>
        <path d="M6.39733 5.67853C5.89764 5.50234 5.36002 5.40649 4.8 5.40649C2.14904 5.40649 0 7.55432 0 10.2038C0 12.8533 2.14904 15.0011 4.8 15.0011C6.52165 15.0011 8.0316 14.0952 8.87867 12.7343L5.26487 12.0975L6.39733 5.67853Z"></path>
        <path d="M17.3126 3.66609L7.85843 2L6.19141 11.4489L10.6545 12.2354L14.3998 5.81854L16.3449 9.15116L17.3126 3.66609Z"></path>
        <path d="M8.80078 17L14.4008 7.4054L20.0008 17H8.80078Z"></path>
      </g>
    </svg>
  );
}
