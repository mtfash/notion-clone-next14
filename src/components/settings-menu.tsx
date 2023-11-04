import { cn } from "@/lib/utils";
import SimpleButton from "./button/simple-button";
import Repost from "./icons/repost";
import MoveTo from "./icons/move-to";
import Lock from "./icons/lock";
import Customize from "./icons/Customize";

export default function SettingsMenu() {
  return (
    <div
      className={cn(
        "w-[240px] bg-white rounded-[8px] shadow-lg overflow-hidden h-[90%] border border-[#e8e8e8]"
      )}
    >
      <div className="px-4 py-[6px] border-b border-[#e8e8e8]">
        <div className="text-sm text-black/60">Style</div>
        <div className="flex items-stretch justify-center mt-[4px]">
          <SimpleButton className="aspect-square flex flex-col items-center justify-center flex-1">
            <div className="text-[22px] text-blue-500 font-medium">Ag</div>
            <div className="text-sm text-black/40">Default</div>
          </SimpleButton>
          <SimpleButton className="aspect-square flex flex-col items-center justify-center flex-1">
            <div className="text-[22px] font-medium font-serif">Ag</div>
            <div className="text-sm text-black/40">Serif</div>
          </SimpleButton>
          <SimpleButton className="aspect-square flex flex-col items-center justify-center flex-1">
            <div className="text-[22px] font-medium font-mono">Ag</div>
            <div className="text-sm text-black/40">Mono</div>
          </SimpleButton>
        </div>
      </div>
      <div className="py-[6px] px-[4px] border-b border-[#e8e8e8]">
        <SimpleButton className="flex items-center justify-between">
          Small text
          <div className="w-[36px] h-[20px] rounded-full bg-[#ccc] p-[2px]">
            <div className="aspect-square w-[16px] bg-white rounded-full"></div>
          </div>
        </SimpleButton>
        <SimpleButton className="flex items-center justify-between">
          Full width
          <div className="w-[36px] h-[20px] rounded-full bg-green-600 p-[2px] flex flex-row-reverse">
            <div className="aspect-square w-[16px] bg-white rounded-full"></div>
          </div>
        </SimpleButton>
      </div>
      <div className="py-[6px] px-[4px] border-b border-[#e8e8e8]">
        <SimpleButton className="flex items-start justify-between gap-[10px]">
          <Repost className="relative top-[2px]" />
          <div>
            <div className="text-black/90">Turn into wiki</div>
            <div className="text-sm text-black/60">
              Organize by owner, tags, verification, and more
            </div>
          </div>
        </SimpleButton>
        <SimpleButton className="flex items-start justify-between gap-[10px]">
          <MoveTo />
          <div className="flex justify-between items-center flex-1">
            <div className="text-black/90">Move to</div>
            <div className="text-sm text-black/40">⌘+Shift+P</div>
          </div>
        </SimpleButton>
      </div>
      <div className="py-[6px] px-[4px] border-b border-[#e8e8e8]">
        <SimpleButton className="flex items-start justify-between gap-[10px]">
          <Customize className="relative top-[2px]" />
          <div className="flex justify-between items-center flex-1">
            <div className="text-black/90">Customize page</div>
          </div>
        </SimpleButton>
        <SimpleButton className="flex items-start justify-between gap-[10px]">
          <Lock className="relative top-[2px]" />
          <div className="flex justify-between items-center flex-1">
            <div className="text-black/90">Lock page</div>
          </div>
        </SimpleButton>
      </div>
    </div>
  );
}
