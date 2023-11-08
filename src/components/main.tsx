"use client";

import { SyntheticEvent, useLayoutEffect, useMemo, useState } from "react";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import { cn } from "@/lib/utils";
import IconButton from "@/components/button/icon-button";
import ChevronLeft from "@/components/icons/chevron-left";

export default function Main() {
  const [height, setHeight] = useState(1200);
  const [width, setWidth] = useState(600);
  const [dragging, setDragging] = useState(false);

  useLayoutEffect(() => {
    const windowResizeHandler = () => setHeight(window.innerHeight);
    window.addEventListener("resize", windowResizeHandler);
    windowResizeHandler();

    return () => window.removeEventListener("resize", windowResizeHandler);
  }, []);

  const handle = useMemo(
    () => (
      <div
        className={cn(
          "w-[2px] h-screen absolute right-0 top-0",
          "transition-all duration-300",
          "bg-gray-600/10",
          {
            "bg-gray-600/30": dragging,
            "cursor-col-resize": !dragging,
          }
        )}
        style={{ zIndex: 101 }}
      >
        <IconButton className="w-[24px] h-[24px] aspect-square absolute top-[10px] left-[10px]">
          <ChevronLeft className="w-[12px] fill-black/50 transform -scale-x-100" />
        </IconButton>
      </div>
    ),
    [dragging]
  );

  return (
    <ResizableBox
      className="h-full pt-[48px]"
      width={width}
      height={height}
      minConstraints={[600, height]}
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
    >
      <div className="bg-white w-full h-full flex-1 text-center justify-center items-center flex"></div>
    </ResizableBox>
  );
}
