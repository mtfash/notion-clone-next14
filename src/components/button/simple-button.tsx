import clsx from "clsx";
import * as React from "react";

type SimpleButtonProps = {
	isLoading?: boolean;
	className?: string;
} & React.ComponentPropsWithRef<"div">;

const SimpleButton = (
	{ children, className, ...rest }: SimpleButtonProps,
	ref: React.ForwardedRef<HTMLDivElement>
) => (
	<div
		className={clsx("rounded-[4px] px-[10px] p-[5px] hover:bg-[#ebebea]", className)}
		ref={ref}
		role="button"
		{...rest}
	>
		{children}
	</div>
);

export default React.forwardRef<HTMLDivElement, SimpleButtonProps>(
	SimpleButton
);
