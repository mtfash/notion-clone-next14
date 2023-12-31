import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function Expand({ className }: IconProps) {
	return (
		<svg
			role="graphics-symbol"
			viewBox="-1 -1 9 11"
			className={cn(
				"w-3 h-3 d-block fill-gray-400 flex-shrink-0",
				className
			)}
		>
			<path
				id="path0_stroke"
				d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"
			></path>
		</svg>
	);
}
