import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function Sidepeek({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={cn("w-[16px] h-[16px] block fill-black flex-shrink-0", className)}
    >
      <path d="M2.1416 14.4492H13.8516C15.3281 14.4492 16.0938 13.6904 16.0938 12.2344V3.9082C16.0938 2.45215 15.3281 1.69336 13.8516 1.69336H2.1416C0.665039 1.69336 -0.100586 2.44531 -0.100586 3.9082V12.2344C-0.100586 13.6904 0.665039 14.4492 2.1416 14.4492ZM2.22363 13.1094C1.58789 13.1094 1.23926 12.7812 1.23926 12.1182V4.02441C1.23926 3.36133 1.58789 3.02637 2.22363 3.02637H13.7695C14.3984 3.02637 14.7539 3.36133 14.7539 4.02441V12.1182C14.7539 12.7812 14.3984 13.1094 13.7695 13.1094H2.22363ZM8.51953 12.1113H13.2158C13.5986 12.1113 13.7559 11.9541 13.7559 11.5645V4.57812C13.7559 4.18848 13.5986 4.02441 13.2158 4.02441H8.51953C8.13672 4.02441 7.98633 4.18848 7.98633 4.57812V11.5645C7.98633 11.9541 8.13672 12.1113 8.51953 12.1113Z"></path>
    </svg>
  );
}
