import React, { useCallback, useEffect, useState } from "react";

type Position = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

type Side = "top-right" | "bottom-right" | "bottom-left" | "top-left";

type RelativeFixedProps = {
  relativeTo: HTMLElement | null;
  side: Side;
  position: Position;
} & React.ComponentPropsWithRef<"div">;

const RelativeFixed = (
  { relativeTo, side, position, children, style, ...rest }: RelativeFixedProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const [pos, setPos] = useState<Position>(getRelativePosition(side, position, relativeTo));

  const handleWindowResize = useCallback(() => {
    setPos(getRelativePosition(side, position, relativeTo));
  }, [side, position, relativeTo]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [handleWindowResize]);

  return (
    <div style={{ ...style, ...pos, position: "fixed" }} {...rest} ref={ref}>
      {children}
    </div>
  );
};

export default React.forwardRef<HTMLDivElement, RelativeFixedProps>(RelativeFixed);

function getRelativePosition(side: Side, position: Position, relativeTo: HTMLElement | null) {
  if (!relativeTo) {
    return position;
  }

  const rect = relativeTo.getBoundingClientRect();
  const _position: Position = {};

  switch (side) {
    case "bottom-left":
      if (typeof position.left !== "undefined") {
        _position.left = rect.left + position.left;
      }

      if (typeof position.right !== "undefined") {
        const rightDistance = window.innerWidth - rect.right;
        _position.right = rightDistance + rect.width + position.right;
      }

      if (typeof position.top !== "undefined") {
        _position.top = rect.bottom + position.top;
      }

      if (typeof position.bottom !== "undefined") {
        _position.bottom = window.innerHeight - (rect.bottom - position.bottom);
      }
      break;
    case "bottom-right":
      if (typeof position.left !== "undefined") {
        _position.left = rect.right + position.left;
      }

      if (typeof position.right !== "undefined") {
        _position.right = window.innerWidth - rect.right + position.right;
      }

      if (typeof position.top !== "undefined") {
        _position.top = rect.bottom + position.top;
      }

      if (typeof position.bottom !== "undefined") {
        _position.bottom = window.innerHeight - (rect.bottom - position.bottom);
      }
      break;
    case "top-left":
      if (typeof position.left !== "undefined") {
        _position.left = rect.left + position.left;
      }

      if (typeof position.right !== "undefined") {
        const rightDistance = window.innerWidth - rect.right;
        _position.right = rightDistance + rect.width + position.right;
      }

      if (typeof position.top !== "undefined") {
        _position.top = rect.top + position.top;
      }

      if (typeof position.bottom !== "undefined") {
        _position.bottom = window.innerHeight - rect.top + position.bottom;
      }
      break;

    case "top-right":
      if (typeof position.left !== "undefined") {
        _position.left = rect.right + position.left;
      }

      if (typeof position.right !== "undefined") {
        _position.right = window.innerWidth - rect.right + position.right;
      }

      if (typeof position.top !== "undefined") {
        _position.top = rect.top + position.top;
      }

      if (typeof position.bottom !== "undefined") {
        _position.bottom = window.innerHeight - rect.top + position.bottom;
      }
      break;
  }
  return _position;
}
