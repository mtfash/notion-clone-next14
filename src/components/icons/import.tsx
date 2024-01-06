import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function ImportIcon({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={cn("w-[20px] h-[20px] aspect-square block fill-gray-400 flex-shrink-0")}
    >
      <path d="M13.291 14.5723C13.291 14.1484 12.9902 13.834 12.5732 13.834H8.06836C8.24609 13.8203 8.42383 13.7314 8.56055 13.5947L13.0586 9.08301C13.2158 8.91895 13.291 8.74121 13.291 8.54297C13.291 8.12598 12.9902 7.81836 12.5801 7.81836C12.3682 7.81836 12.1836 7.90039 12.0469 8.03711L10.4951 9.56836L8.69043 11.585L8.75195 10.1084V1.61133C8.75195 1.16016 8.44434 0.852539 8 0.852539C7.5625 0.852539 7.25488 1.16016 7.25488 1.61133V10.1084L7.30957 11.5781L5.50488 9.56836L3.95312 8.03711C3.82324 7.90039 3.63184 7.81836 3.42676 7.81836C3.0166 7.81836 2.70898 8.12598 2.70898 8.54297C2.70898 8.74121 2.78418 8.91895 2.94141 9.08301L7.44629 13.5947C7.58301 13.7314 7.75391 13.8203 7.93848 13.834H3.44043C3.0166 13.834 2.70898 14.1484 2.70898 14.5723C2.70898 14.9893 3.0166 15.3037 3.44043 15.3037H12.5732C12.9902 15.3037 13.291 14.9893 13.291 14.5723Z"></path>
    </svg>
  );
}