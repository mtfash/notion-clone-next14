import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function BoardIcon({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={cn("w-[16px] h-[16px] block fill-gray-400 flex-shrink-0", className)}
    >
      <path d="M2.39697 14.4634H13.5964C15.0532 14.4634 15.8311 13.6921 15.8311 12.2485V4.24609C15.8311 2.80249 15.0532 2.03125 13.5964 2.03125H2.39697C0.940186 2.03125 0.162354 2.7959 0.162354 4.24609V12.2485C0.162354 13.6987 0.940186 14.4634 2.39697 14.4634ZM2.52222 12.9934C1.94214 12.9934 1.63232 12.7034 1.63232 12.0969V4.39771C1.63232 3.79126 1.94214 3.50122 2.52222 3.50122H4.92822V12.9934H2.52222ZM6.34546 12.9934V3.50122H9.64795V12.9934H6.34546ZM13.4712 3.50122C14.0447 3.50122 14.3611 3.79126 14.3611 4.39771V12.0969C14.3611 12.7034 14.0447 12.9934 13.4712 12.9934H11.0652V3.50122H13.4712Z"></path>
    </svg>
  );
}
