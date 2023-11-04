import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function Message({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 20 20"
      className={cn("w-[20px] h-[20px] aspect-square block fill-black flex-shrink-0", className)}
    >
      <path d="M5.9375 18.4844C6.38281 18.4844 6.71094 18.2656 7.25 17.7891L9.92969 15.4297H14.6328C16.9844 15.4297 18.3047 14.0703 18.3047 11.75V5.67969C18.3047 3.35938 16.9844 2 14.6328 2H4.67188C2.32812 2 1 3.35938 1 5.67969V11.75C1 14.0781 2.36719 15.4297 4.61719 15.4297H4.9375V17.3438C4.9375 18.0391 5.30469 18.4844 5.9375 18.4844ZM6.32812 16.7344V14.5078C6.32812 14.0469 6.125 13.8672 5.6875 13.8672H4.72656C3.25781 13.8672 2.55469 13.125 2.55469 11.7031V5.72656C2.55469 4.30469 3.25781 3.5625 4.72656 3.5625H14.5859C16.0469 3.5625 16.75 4.30469 16.75 5.72656V11.7031C16.75 13.125 16.0469 13.8672 14.5859 13.8672H9.84375C9.36719 13.8672 9.13281 13.9453 8.80469 14.2891L6.32812 16.7344ZM5.67969 6.82812H13.5469C13.8125 6.82812 14.0312 6.60156 14.0312 6.32812C14.0312 6.07031 13.8125 5.85156 13.5469 5.85156H5.67969C5.41406 5.85156 5.20312 6.07031 5.20312 6.32812C5.20312 6.60156 5.41406 6.82812 5.67969 6.82812ZM5.67969 9.30469H13.5469C13.8125 9.30469 14.0312 9.08594 14.0312 8.8125C14.0312 8.55469 13.8125 8.32812 13.5469 8.32812H5.67969C5.41406 8.32812 5.20312 8.55469 5.20312 8.8125C5.20312 9.08594 5.41406 9.30469 5.67969 9.30469ZM5.67969 11.7891H10.8047C11.0781 11.7891 11.2891 11.5703 11.2891 11.3047C11.2891 11.0312 11.0781 10.8125 10.8047 10.8125H5.67969C5.41406 10.8125 5.20312 11.0312 5.20312 11.3047C5.20312 11.5703 5.41406 11.7891 5.67969 11.7891Z"></path>
    </svg>
  );
}
