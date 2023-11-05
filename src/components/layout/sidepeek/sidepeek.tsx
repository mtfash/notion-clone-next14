import Comments from "@/components/comments/comments";
import { cn } from "@/lib/utils";
import { SyntheticEvent, useLayoutEffect, useMemo, useState } from "react";
import { ResizableBox, ResizeCallbackData } from "react-resizable";

export default function Sidepeek() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(300);
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
        className={cn(
          "w-[2px] h-full absolute  top-0",
          "transition-all duration-300",
          "bg-gray-600/10 hover:bg-gray-600/30",
          {
            "hover:bg-gray-600/30": dragging,
            "cursor-col-resize": !dragging,
          }
        )}
        style={{ zIndex: 1000 }}
      ></span>
    ),
    [dragging]
  );

  return (
    <div className="absolute w-[385px] h-screen top-0 right-0 border-l border-[#e8e8e8] overflow-hidden z-0">
      <div className="bg-white h-full mt-[48px] overflow-y-scroll flex flex-col items-stretch">
        <Comments />
      </div>
    </div>
  );
}
