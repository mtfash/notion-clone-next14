import { cn } from "@/lib/utils";
import { IconProps } from "./icon-props";

export default function Clock({ className }: IconProps) {
	return (
		<svg
			role="graphics-symbol"
			viewBox="0 0 20 20"
			className={cn(
				"w-[20px] h-[20px] d-block fill-black flex-shrink-0",
				className
			)}
		>
			<path d="M6.87695 10.8601C6.72038 10.8601 6.58708 10.8072 6.47705 10.7014C6.37126 10.5956 6.31836 10.4644 6.31836 10.3079C6.31836 10.1555 6.37126 10.0264 6.47705 9.92065C6.58708 9.81486 6.72038 9.76196 6.87695 9.76196H9.44775V6.24536C9.44775 6.08879 9.50065 5.9576 9.60645 5.85181C9.71224 5.74601 9.84131 5.69312 9.99365 5.69312C10.1502 5.69312 10.2814 5.74601 10.3872 5.85181C10.493 5.9576 10.5459 6.08879 10.5459 6.24536V10.3079C10.5459 10.4644 10.493 10.5956 10.3872 10.7014C10.2814 10.8072 10.1502 10.8601 9.99365 10.8601H6.87695ZM10 16.6174C9.0944 16.6174 8.2417 16.4439 7.44189 16.0969C6.64209 15.7542 5.9375 15.2781 5.32812 14.6687C4.71875 14.0593 4.24056 13.3569 3.89355 12.5613C3.55078 11.7615 3.37939 10.9067 3.37939 9.99683C3.37939 9.09123 3.55078 8.24064 3.89355 7.44507C4.24056 6.64526 4.71663 5.94067 5.32178 5.3313C5.93115 4.72192 6.63574 4.24585 7.43555 3.90308C8.23535 3.55607 9.08805 3.38257 9.99365 3.38257C10.8993 3.38257 11.752 3.55607 12.5518 3.90308C13.3558 4.24585 14.0604 4.72192 14.6655 5.3313C15.2749 5.94067 15.7531 6.64526 16.1001 7.44507C16.4471 8.24064 16.6206 9.09123 16.6206 9.99683C16.6206 10.9067 16.4471 11.7615 16.1001 12.5613C15.7531 13.3569 15.2749 14.0593 14.6655 14.6687C14.0604 15.2781 13.3579 15.7542 12.5581 16.0969C11.7583 16.4439 10.9056 16.6174 10 16.6174ZM10 15.1638C10.7152 15.1638 11.3838 15.0305 12.0059 14.7639C12.6322 14.4973 13.1823 14.1292 13.6562 13.6594C14.1302 13.1855 14.5005 12.6375 14.7671 12.0154C15.0337 11.3891 15.167 10.7162 15.167 9.99683C15.167 9.28166 15.0316 8.61304 14.7607 7.99097C14.4941 7.36466 14.1239 6.81453 13.6499 6.34058C13.1802 5.86662 12.6322 5.49634 12.0059 5.22974C11.3838 4.96313 10.7131 4.82983 9.99365 4.82983C9.27848 4.82983 8.60775 4.96313 7.98145 5.22974C7.35938 5.49634 6.81136 5.86662 6.3374 6.34058C5.86768 6.81453 5.49951 7.36466 5.23291 7.99097C4.97054 8.61304 4.83936 9.28166 4.83936 9.99683C4.83936 10.7162 4.97054 11.3891 5.23291 12.0154C5.49951 12.6375 5.86979 13.1855 6.34375 13.6594C6.81771 14.1292 7.36572 14.4973 7.98779 14.7639C8.6141 15.0305 9.28483 15.1638 10 15.1638Z"></path>
		</svg>
	);
}
