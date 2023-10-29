import { cn } from "@/lib/utils";

type DialogProps = {
	className?: string;
	children: React.ReactNode;
	isOpen: boolean;
	close: () => void;
};

export default function Dialog({
	className,
	children,
	isOpen,
	close,
}: DialogProps) {
	return (
		isOpen && (
			<div className="relative">
				<div
					role="button"
					className="w-screen h-screen fixed inset-0 hover:cursor-default"
					style={{ zIndex: 100 }}
					onClick={close}
				></div>
				<div
					className={cn("relative", className)}
					style={{ zIndex: 101 }}
				>
					{children}
				</div>
			</div>
		)
	);
}
