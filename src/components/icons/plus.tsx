import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function Plus({ className }: IconProps) {
	return (
		<div className="w-[20px] h-[20px] flex items-center justify-center">
			<svg
				role="graphics-symbol"
				viewBox="0 0 22 22"
				className={cn(
					"w-[14px] h-[14px] d-block fill-black flex-shrink-0",
					className
				)}
			>
				<path d="M11 22C17.0326 22 22 17.0326 22 11C22 4.97795 17.0221 0 10.9895 0C4.9674 0 0 4.97795 0 11C0 17.0326 4.9674 22 11 22ZM5.83221 11.0105C5.83221 10.3461 6.30681 9.87152 6.96069 9.87152H9.88207V6.95014C9.88207 6.30681 10.3461 5.83221 10.9895 5.83221C11.6539 5.83221 12.1285 6.30681 12.1285 6.95014V9.87152H15.0499C15.6932 9.87152 16.1678 10.3461 16.1678 11.0105C16.1678 11.6539 15.6932 12.1179 15.0499 12.1179H12.1285V15.0499C12.1285 15.6932 11.6539 16.1572 10.9895 16.1572C10.3461 16.1572 9.88207 15.6932 9.88207 15.0499V12.1179H6.96069C6.30681 12.1179 5.83221 11.6539 5.83221 11.0105Z"></path>
			</svg>
		</div>
	);
}
