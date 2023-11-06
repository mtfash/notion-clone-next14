"use client";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import Header from "@/components/layout/header/header";
import Sidepeek from "@/components/layout/sidepeek/sidepeek";
import { SyntheticEvent, useLayoutEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import IconButton from "@/components/button/icon-button";
import ChevronLeft from "@/components/icons/chevron-left";

export default function Home() {
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
    <div className="w-screen h-screen bg-white flex justify-between items-stretch">
      <Sidebar />
      <div className="relative flex-1 overflow-hidden">
        <Header />

        <div className="bg-white flex items-stretch h-full">
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
          <div className="bg-white min-w-[385px] flex-1 pt-[48px]">
            <Sidepeek />
          </div>
        </div>
      </div>
    </div>
  );
}
