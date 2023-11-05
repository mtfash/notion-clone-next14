import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function Lock({ className }: IconProps) {
  return (
    <svg
      role="graphics-symbol"
      viewBox="0 0 16 16"
      className={cn("w-[16px] h-[16px] block fill-black flex-shrink-0", className)}
    >
      <path d="M4.79395 14.7227H11.1992C12.252 14.7227 12.7783 14.1963 12.7783 13.0479V8.20801C12.7783 7.19629 12.3682 6.66992 11.541 6.56055V4.96094C11.541 2.36328 9.81152 1.1123 7.99316 1.1123C6.18164 1.1123 4.45215 2.36328 4.45215 4.96094V6.56055C3.625 6.66992 3.21484 7.19629 3.21484 8.20801V13.0479C3.21484 14.1963 3.73438 14.7227 4.79395 14.7227ZM5.75098 4.83105C5.75098 3.22461 6.76953 2.35645 7.99316 2.35645C9.2168 2.35645 10.2422 3.22461 10.2422 4.83105V6.54004H5.75098V4.83105ZM4.99219 13.5059C4.69141 13.5059 4.54102 13.3623 4.54102 13V8.25586C4.54102 7.89355 4.69141 7.76367 4.99219 7.76367H11.0078C11.3086 7.76367 11.4521 7.89355 11.4521 8.25586V13C11.4521 13.3623 11.3086 13.5059 11.0078 13.5059H4.99219Z"></path>
    </svg>
  );
}