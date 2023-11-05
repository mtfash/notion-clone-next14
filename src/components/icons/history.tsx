import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function History({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={cn("w-[16px] h-[16px] block fill-black flex-shrink-0", className)}
    >
      <path d="M0.788086 6.67676C0.254883 6.67676 0.118164 7.07324 0.412109 7.47656L2.06641 9.77344C2.29883 10.0947 2.6543 10.0879 2.87988 9.77344L4.53418 7.46973C4.81445 7.08008 4.68457 6.67676 4.1582 6.67676H3.16699C3.78223 4.20898 6.00391 2.39746 8.66992 2.39746C11.8145 2.39746 14.3438 4.91992 14.3438 8.06445C14.3438 11.209 11.8145 13.7451 8.66992 13.7383C6.83105 13.7314 5.22461 12.8701 4.19922 11.5166C3.92578 11.1953 3.52246 11.0928 3.19434 11.332C2.87988 11.5576 2.81836 11.9951 3.11914 12.3574C4.38379 14.0117 6.45508 15.126 8.66992 15.126C12.5391 15.126 15.7314 11.9336 15.7314 8.06445C15.7314 4.20215 12.5391 1.00293 8.66992 1.00293C5.2793 1.00293 2.40137 3.45703 1.75195 6.67676H0.788086ZM8.41699 4.09961C8.08203 4.09961 7.82227 4.36621 7.82227 4.69434V8.41309C7.82227 8.57031 7.87695 8.7207 7.99316 8.87793L9.62695 11.0312C9.86621 11.3525 10.2217 11.4072 10.5156 11.1953C10.7959 11.0039 10.8164 10.6416 10.5977 10.3477L9.01172 8.20801V4.69434C9.01172 4.36621 8.74512 4.09961 8.41699 4.09961Z"></path>
    </svg>
  );
}
