"use client";
import { SyntheticEvent, useLayoutEffect, useState, FC, useMemo } from "react";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";

export const Sidebar: FC = () => {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(220);
	const [dragging, setDragging] = useState(false);

	useLayoutEffect(() => {
		const windowResizeHandler = () => setHeight(window.innerHeight);
		window.addEventListener("resize", windowResizeHandler);
		windowResizeHandler();

		return () => window.removeEventListener("resize", windowResizeHandler);
	}, []);

	const handle = useMemo(
		() => (
			<span
				className={clsx(
					"w-[2px] h-full absolute right-0 top-0 z-20",
					"transition-all duration-300 bg-gray-600/10 hover:bg-gray-600/30",
					{
						"hover:bg-gray-600/30": dragging,
						"cursor-col-resize": !dragging,
					}
				)}
			></span>
		),
		[dragging]
	);

	return (
		<ResizableBox
			width={width}
			height={height}
			minConstraints={[220, height]}
			maxConstraints={[390, height]}
			onResize={(e: SyntheticEvent, data: ResizeCallbackData) => {
				setWidth(data.size.width);
				setDragging(true);
			}}
			onResizeStop={() => {
				setDragging(false);
			}}
			handle={handle}
			axis="x"
			style={{
				position: "relative",
			}}
			className="bg-[#fbfbfa]"
		></ResizableBox>
	);
};
