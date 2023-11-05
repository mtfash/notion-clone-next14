import React, { useCallback, useEffect, useState } from "react";

type TopLeftPosition = {
  top: number | string;
  left: number | string;
  right?: undefined;
  bottom?: undefined;
};

type TopRightPosition = {
  top: number | string;
  right: number | string;
  left?: undefined;
  bottom?: undefined;
};

type BottomRightPosition = {
  top?: undefined;
  left?: undefined;
  bottom: number | string;
  right: number | string;
};

type BottomLeftPosition = {
  top?: undefined;
  right?: undefined;
  bottom: number | string;
  left: number | string;
};

type Position = TopLeftPosition | TopRightPosition | BottomRightPosition | BottomLeftPosition;

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
  const _position: any = {};

  switch (side) {
    case "bottom-left":
      if (typeof position.left === "number") {
        _position.left = rect.left + position.left;
      } else if (typeof position.left === "string") {
        _position.left = position.left;
      }

      if (typeof position.right === "number") {
        const rightDistance = window.innerWidth - rect.right;
        _position.right = rightDistance + rect.width + position.right;
      } else if (typeof position.right === "string") {
        _position.right = position.right;
      }

      if (typeof position.top === "number") {
        _position.top = rect.bottom + position.top;
      } else if (typeof position.top === "string") {
        _position.top = position.top;
      }

      if (typeof position.bottom === "number") {
        _position.bottom = window.innerHeight - (rect.bottom - position.bottom);
      } else if (typeof position.bottom === "string") {
        _position.bottom = position.bottom;
      }
      break;
    case "bottom-right":
      if (typeof position.left === "number") {
        _position.left = rect.right + position.left;
      } else if (typeof position.left === "string") {
        _position.left = position.left;
      }

      if (typeof position.right === "number") {
        _position.right = window.innerWidth - rect.right + position.right;
      } else if (typeof position.right === "string") {
        _position.right = position.right;
      }

      if (typeof position.top === "number") {
        _position.top = rect.bottom + position.top;
      } else if (typeof position.top === "string") {
        _position.top = position.top;
      }

      if (typeof position.bottom === "number") {
        _position.bottom = window.innerHeight - (rect.bottom - position.bottom);
      } else if (typeof position.bottom === "string") {
        _position.bottom = position.bottom;
      }
      break;
    case "top-left":
      if (typeof position.left === "number") {
        _position.left = rect.left + position.left;
      } else if (typeof position.left === "string") {
        _position.left = position.left;
      }

      if (typeof position.right === "number") {
        const rightDistance = window.innerWidth - rect.right;
        _position.right = rightDistance + rect.width + position.right;
      } else if (typeof position.right === "string") {
        _position.right = position.right;
      }

      if (typeof position.top === "number") {
        _position.top = rect.top + position.top;
      } else if (typeof position.top === "string") {
        _position.top = position.top;
      }

      if (typeof position.bottom === "number") {
        _position.bottom = window.innerHeight - rect.top + position.bottom;
      } else if (typeof position.bottom === "string") {
        _position.bottom = position.bottom;
      }
      break;

    case "top-right":
      if (typeof position.left === "number") {
        _position.left = rect.right + position.left;
      } else if (typeof position.left === "string") {
        _position.left = position.left;
      }

      if (typeof position.right === "number") {
        _position.right = window.innerWidth - rect.right + position.right;
      } else if (typeof position.right === "string") {
        _position.right = position.right;
      }

      if (typeof position.top === "number") {
        _position.top = rect.top + position.top;
      } else if (typeof position.top === "string") {
        _position.top = position.top;
      }

      if (typeof position.bottom === "number") {
        _position.bottom = window.innerHeight - rect.top + position.bottom;
      } else if (typeof position.bottom === "string") {
        _position.bottom = position.bottom;
      }
      break;
  }
  return _position;
}
