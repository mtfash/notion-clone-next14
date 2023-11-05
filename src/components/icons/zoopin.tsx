import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function ZoomIn({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 51 52"
      className={cn("w-[16px] h-[16px] block fill-black flex-shrink-0", className)}
    >
      <path d="M.414 21.297c0 2.86.533 5.543 1.6 8.049a21.156 21.156 0 004.468 6.576 20.797 20.797 0 006.577 4.443c2.505 1.067 5.18 1.6 8.023 1.6 2.116 0 4.13-.305 6.043-.914a21.55 21.55 0 005.332-2.565l11.654 11.655a3.44 3.44 0 001.245.812c.473.186.964.28 1.472.28.728 0 1.371-.17 1.93-.508a3.48 3.48 0 001.32-1.346 3.887 3.887 0 00.482-1.93 3.8 3.8 0 00-.279-1.447 3.126 3.126 0 00-.787-1.193l-11.578-11.63a20.414 20.414 0 002.818-5.51c.694-2.013 1.041-4.138 1.041-6.372 0-2.844-.541-5.51-1.625-7.998a20.718 20.718 0 00-4.443-6.602 20.515 20.515 0 00-6.602-4.468c-2.488-1.067-5.162-1.6-8.023-1.6-2.844 0-5.518.533-8.023 1.6a20.592 20.592 0 00-6.577 4.468A21.072 21.072 0 002.014 13.3c-1.067 2.488-1.6 5.154-1.6 7.998zm5.408 0c0-2.1.39-4.071 1.168-5.916a15.517 15.517 0 013.301-4.875 15.168 15.168 0 014.875-3.276c1.845-.795 3.817-1.193 5.916-1.193 2.116 0 4.096.398 5.941 1.193a14.877 14.877 0 014.85 3.276 15.515 15.515 0 013.3 4.875c.796 1.845 1.194 3.817 1.194 5.916 0 2.116-.398 4.096-1.193 5.941a15.517 15.517 0 01-3.301 4.875 15.426 15.426 0 01-4.85 3.276c-1.845.795-3.825 1.193-5.941 1.193-2.099 0-4.07-.398-5.916-1.193a15.737 15.737 0 01-4.875-3.276 15.52 15.52 0 01-3.3-4.875c-.78-1.845-1.169-3.825-1.169-5.941zm15.31 10.36c.458 0 .746-.263.864-.788.237-1.32.474-2.437.711-3.351.254-.931.559-1.693.914-2.286a4.554 4.554 0 011.397-1.498c.575-.389 1.311-.694 2.209-.914.914-.237 2.056-.448 3.427-.634.542-.085.813-.381.813-.89 0-.507-.271-.812-.813-.913-1.354-.17-2.496-.373-3.427-.61-.915-.253-1.668-.567-2.26-.939a4.814 4.814 0 01-1.422-1.498c-.373-.61-.677-1.363-.914-2.26a42.337 42.337 0 01-.635-3.326c-.084-.542-.372-.813-.863-.813s-.796.263-.914.788a53.724 53.724 0 01-.737 3.377c-.22.914-.507 1.675-.863 2.285a4.64 4.64 0 01-1.396 1.472c-.576.373-1.32.677-2.235.914-.914.22-2.048.424-3.402.61-.559.101-.838.406-.838.914 0 .49.28.787.838.889 1.693.186 3.055.44 4.088.761 1.032.305 1.828.762 2.387 1.371.575.61 1.015 1.44 1.32 2.489.305 1.05.584 2.395.838 4.037a1 1 0 00.279.584c.17.152.38.228.635.228z"></path>
    </svg>
  );
}
