import { cn } from "@/lib/utils";
import ChevronSingleRight from "../icons/chevron-single-right";
import FileIcon from "../icons/file";
import Plus2 from "../icons/plus2";
import Dots from "../icons/dots";

type ExplorerEntryProps = {
  title: string;
};

export default function ExplorerEntry({ title }: ExplorerEntryProps) {
  return (
    <div
      role="button"
      className={cn(
        "flex items-center justify-between rounded-[4px] px-[10px] py-[4px] gap-[4px]",
        "hover:bg-black/5 group"
      )}
    >
      <div className="flex items-center gap-[2px]">
        <button
          type="button"
          className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10"
        >
          <ChevronSingleRight className="fill-black/40 w-[14px]" />
        </button>
        <button
          type="button"
          className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10"
        >
          <FileIcon className="fill-black/40" />
        </button>
      </div>

      <div className="flex-1 font-medium text-black/60 truncate">{title}</div>

      <div className="items-center gap-[4px] group-hover:flex hidden">
        <button
          type="button"
          className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10"
        >
          <Plus2 className="fill-black/40" />
        </button>

        <button
          type="button"
          className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10"
        >
          <Dots className="w-[14px] fill-black/40" />
        </button>
      </div>
    </div>
  );
}
