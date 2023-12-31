import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function ChevronSingleRight({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={cn("w-[16px] h-[16px] aspect-square block fill-black flex-shrink-0 transform", className)}
    >
      <path d="M12.375 8.06445C12.375 7.83203 12.2861 7.63379 12.1084 7.45605L6.77637 2.24023C6.62598 2.08984 6.44141 2.01465 6.22266 2.01465C5.77832 2.01465 5.42285 2.35645 5.42285 2.80078C5.42285 3.01953 5.51172 3.21777 5.66211 3.375L10.4746 8.06445L5.66211 12.7539C5.51855 12.9043 5.42285 13.1025 5.42285 13.3213C5.42285 13.7725 5.77832 14.1143 6.22266 14.1143C6.44141 14.1143 6.62598 14.0391 6.77637 13.8887L12.1084 8.67285C12.293 8.49512 12.375 8.29688 12.375 8.06445Z"></path>
    </svg>
  );
}
