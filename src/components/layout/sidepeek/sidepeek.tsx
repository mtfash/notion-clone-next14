import Comments from "@/components/comments/comments";
import { create } from "zustand";

interface SidepeekState {
  visible: boolean;
  toggle: () => void;
}

export const useSidepeek = create<SidepeekState>((set) => ({
  visible: false,
  toggle: () => set((state) => ({ visible: !state.visible })),
}));

export default function Sidepeek() {
  const { visible, toggle } = useSidepeek();

  return (
    visible && (
      <div className="bg-white min-w-[385px] flex-1 pt-[48px]">
        <div className="h-full overflow-y-auto flex flex-col items-stretch">
          <Comments />
        </div>
      </div>
    )
  );
}
