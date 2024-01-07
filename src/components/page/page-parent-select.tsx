import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useOverlayStack } from "../overlay-stack";
import ChevronSingleRight from "../icons/chevron-single-right";
import RelativeFixed from "../relative-fixed";
import SimpleButton from "../button/simple-button";
import SearchIcon from "../icons/search";
import { Page, useGetRecentlyCreatedPages } from "@/queries/pages.query";
import ExplorerEntry from "../explorer/entry";
import SpinnerIcon from "../icons/spinner";

type SuggestedPagesListProps = {
  onSelect: (page?: Page | undefined) => void;
};

function SuggestedPagesList({ onSelect }: SuggestedPagesListProps) {
  const { data, isLoading } = useGetRecentlyCreatedPages();

  return (
    <div>
      <ExplorerEntry
        editable={false}
        entryClassName="rounded-none"
        entry={{
          level: 1,
          page: {
            title: "Priavte pages",
            icon: (
              <Image src="/usericon.png" width={18} height={18} alt="" className="rounded-full" />
            ),
          },
        }}
        onSelect={onSelect}
      />

      {data &&
        data.map((page) => (
          <ExplorerEntry
            entry={{ level: 1, page }}
            key={page._id}
            editable={false}
            entryClassName="rounded-none"
            onSelect={onSelect}
          />
        ))}

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <SpinnerIcon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
}

type ContextMenuProps = {
  onChange: (page: Page | undefined) => void;
};

function ContextMenu({ onChange }: ContextMenuProps) {
  return (
    <div className="bg-white w-[300px] shadow-lg rounded-md overflow-hidden">
      <div className="p-[10px]">
        <div className="relative">
          <SearchIcon className="absolute left-[4px] top-1/2 -translate-y-1/2 z-10 fill-black/40" />
          <input
            type="text"
            className={cn(
              "w-full rounded-[4px] py-[2px] px-[5px] pl-[24px] relative z-0",
              "border border-gray-300 bg-[#f8f8f8] text-black/60 placeholder:text-black/30",
              "focus:outline focus:outline-blue-500/30 focus:outline-[3px] focus:border-blue-500"
            )}
            placeholder="Search page to add to"
          />
        </div>
      </div>
      <div className="pt-[5px] px-[10px] pb-[10px]">
        <h2 className="text-sm text-black/40 font-medium">Suggested</h2>
      </div>
      <div className="pb-[10px] max-h-[300px] overflow-y-auto">
        <SuggestedPagesList onSelect={onChange} />
      </div>
    </div>
  );
}

export function PageParentSelect() {
  const [selectedPage, setSelectedPage] = useState<Page>();
  const buttonRef = useRef<HTMLDivElement>(null);
  const { push, pop } = useOverlayStack();

  const clickHandler = () => {
    push(
      <RelativeFixed
        relativeTo={buttonRef.current}
        position={{ top: 0, left: 0 }}
        side="bottom-left"
      >
        <ContextMenu
          onChange={(page) => {
            setSelectedPage(page);
            pop();
          }}
        />
      </RelativeFixed>
    );
  };

  return (
    <SimpleButton ref={buttonRef} onClick={clickHandler}>
      <div className="flex items-center gap-2">
        <div className="text-gray-500">Add to</div>

        {selectedPage ? (
          <div>{selectedPage.title}</div>
        ) : (
          <div className="flex items-center gap-1 whitespace-nowrap">
            <Image src="/usericon.png" width={22} height={22} alt="" className="rounded-full" />
            <div className="font-medium">Private pages</div>
          </div>
        )}

        <ChevronSingleRight className="w-[10px] rotate-90" />
      </div>
    </SimpleButton>
  );
}
