"use client";
import { MouseEvent } from "react";
import { create } from "zustand";
import { cn } from "@/lib/utils";

type OverlayProps = {
  onClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  children: React.ReactNode;
  zIndex: number;
  className?: string;
};

function Overlay({ children, className, onClick, zIndex }: OverlayProps) {
  return (
    <div
      role="button"
      className={cn("w-screen h-screen fixed inset-0 hover:cursor-default", className)}
      onClick={onClick}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}

type OverlayStackChild = {
  key: string;
  child: React.ReactNode;
};

interface OverlayStackState {
  children: OverlayStackChild[];
  push: (element: React.ReactNode) => void;
}

const useOverlayStackStore = create<OverlayStackState>((set) => ({
  children: [],
  push: (element) =>
    set((state) => {
      const key = `element-${state.children.length}`;

      const handleClose = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
          e.stopPropagation();
          set((state) => ({
            children: [...state.children.filter((ch) => ch.key !== key)],
          }));
        }
      };

      const child: OverlayStackChild = {
        key,
        child: (
          <Overlay key={key} onClick={handleClose} zIndex={1000 + 10 * (state.children.length + 1)}>
            {element}
          </Overlay>
        ),
      };

      return {
        children: [...state.children, child],
      };
    }),
}));

export function useOverlayStack() {
  const push = useOverlayStackStore((state) => state.push);
  return { push };
}

export default function OverlayStack() {
  return useOverlayStackStore((state) => state.children.map(({ child }) => child));
}
