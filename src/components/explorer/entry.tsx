"use client";

import { cn } from "@/lib/utils";
import { Page, getPages, useDeletePage } from "@/queries/pages.query";
import { MouseEvent, MouseEventHandler, useRef, useState } from "react";
import { useOverlayStack } from "../overlay-stack";
import ChevronSingleRight from "../icons/chevron-single-right";
import SimpleButton from "../button/simple-button";
import RelativeFixed from "../relative-fixed";
import Duplicate from "../icons/duplicate";
import Sidepeek from "../icons/sidepeek";
import External from "../icons/external";
import FileIcon from "../icons/file";
import Delete from "../icons/delete";
import MoveTo from "../icons/move-to";
import Repost from "../icons/repost";
import Rename from "../icons/rename";
import Plus2 from "../icons/plus2";
import Dots from "../icons/dots";
import Star from "../icons/star";
import Link from "../icons/link";

export type EntryPage = {
  title: string;
  icon: string | React.ReactNode;
};

export type Entry = {
  page: Page | EntryPage;
  level: number;
};

type ExplorerEntryProps = {
  entry: Entry;
  editable?: boolean;
  entryClassName?: string;
  onSelect?: (page?: Page | undefined) => void;
};

export default function ExplorerEntry({
  entry,
  editable = true,
  entryClassName,
  onSelect,
}: ExplorerEntryProps) {
  const { page, level } = entry;

  const optionsButtonRef = useRef<HTMLButtonElement>(null);

  const { push, pop } = useOverlayStack();

  const [children, setChildren] = useState<Entry[]>([]);
  const [expand, setExpand] = useState(false);

  let iconElement: React.ReactNode =
    "_id" in page ? <FileIcon className="fill-black/40" /> : page.icon;

  const handleExpand: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!expand) {
      setExpand(true);
      try {
        const parentId = "_id" in page ? page._id : undefined;
        const childrenPages = await getPages(parentId);
        setChildren(
          childrenPages.map((childPage) => ({
            level: level + 1,
            page: childPage,
          }))
        );
      } catch (error) {}
    } else {
      setExpand(false);
    }
  };

  const handleOptionsClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (page) {
      push(
        <RelativeFixed
          side="bottom-left"
          relativeTo={optionsButtonRef.current}
          position={{ top: 0, left: 0 }}
        >
          <EntryContextMenu entry={entry} close={pop} />
        </RelativeFixed>
      );
    }
  };

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onSelect) {
      onSelect("_id" in page ? page : undefined);
    }
  };

  return (
    <div className="relative">
      <div
        role="button"
        className={cn(
          "flex items-center justify-between rounded-[4px] px-[10px] py-[4px] gap-[4px]",
          "hover:bg-black/5 group",
          entryClassName
        )}
        style={{
          paddingLeft: level * 10,
        }}
        onClick={handleClick}
      >
        <div className="flex items-center gap-[2px]">
          {/** EXPAND BUTTON */}
          <button
            type="button"
            className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10 active:outline-none focus:outline-none"
            onClick={handleExpand}
          >
            <ChevronSingleRight
              className={cn("fill-black/40 w-[14px] transition-transform duration-200 ease-in", {
                "rotate-90": expand,
              })}
            />
          </button>
          {/** END EXPAND BUTTON */}

          <button
            type="button"
            className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10 active:outline-none focus:outline-none"
          >
            {iconElement}
          </button>
        </div>

        <div
          className={cn("flex-1 text-black/60 truncate", {
            "font-medium": editable,
          })}
        >
          {page.title}
        </div>

        {editable && (
          <div className="items-center gap-[4px] group-hover:flex hidden">
            <button
              type="button"
              className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10 active:outline-none focus:outline-none"
              onClick={handleOptionsClick}
              ref={optionsButtonRef}
            >
              <Dots className="w-[14px] fill-black/40" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10 active:outline-none focus:outline-none"
            >
              <Plus2 className="fill-black/40" />
            </button>
          </div>
        )}
      </div>

      {expand && (
        <div>
          {children.length ? (
            children.map((child, key) => (
              <ExplorerEntry
                entry={child}
                key={key}
                entryClassName={entryClassName}
                editable={editable}
                onSelect={onSelect}
              />
            ))
          ) : (
            <div
              className={cn("px-[10px] py-[4px] font-medium text-black/40")}
              style={{
                paddingLeft: level * 10 + 45,
              }}
            >
              No pages inside
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function EntryContextMenu({ entry, close }: { entry: Entry; close: () => void }) {
  const { page } = entry;

  const { mutate: deletePage, isLoading: pageIsDeleting } = useDeletePage();

  const handleDelete = () => {
    if (page && "_id" in page) {
      deletePage(page._id, {
        onSuccess(page) {
          console.log("Page deleted:", page);
        },
      });
    }

    close();
  };

  return (
    <div className="bg-white rounded-[8px] shadow-lg overflow-hidden w-[280px]">
      <div className="px-[4px] py-[6px] border-b">
        <SimpleButton className="flex items-center gap-[8px]" onClick={handleDelete}>
          <Delete className="w-[16px] fill-black/60" /> Delete
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Star className="w-[16px] fill-black/60" /> Add to Favorites
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Duplicate className="w-[16px] fill-black/60" />

          <div className="flex-1 flex items-center justify-between">
            Duplicate
            <div className="text-sm text-black/40">⌘+D</div>
          </div>
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Rename className="w-[16px] fill-black/60" />
          <div className="flex-1 flex items-center justify-between">
            Rename
            <div className="text-sm text-black/40">⌘+Shift+R</div>
          </div>
        </SimpleButton>
      </div>
      <div className="px-[4px] py-[6px] border-b">
        <SimpleButton className="flex items-center gap-[8px]">
          <External className="w-[16px] fill-black/60" />
          <div className="flex-1 flex items-center justify-between">
            Open in new tab
            <div className="text-sm text-black/40">⌘+Shift+↵</div>
          </div>
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Sidepeek className="w-[16px] fill-black/60" />
          <div className="flex-1 flex items-center justify-between">
            Open in side peek
            <div className="text-sm text-black/40">⌥+Click</div>
          </div>
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Link className="w-[16px] fill-black/60" /> Copy link
        </SimpleButton>
      </div>
      <div className="px-[4px] py-[6px] border-b">
        <SimpleButton className="flex items-center gap-[8px]">
          <MoveTo className="w-[16px] fill-black/60" />
          <div className="flex-1 flex items-center justify-between">
            Move to
            <div className="text-sm text-black/40">⌘+Shift+P</div>
          </div>
        </SimpleButton>
        <SimpleButton className="flex items-start justify-between gap-[10px]">
          <Repost className="relative top-[2px]" />
          <div className="flex-1">
            <div className="text-black/90">Turn into wiki</div>
            <div className="text-sm text-black/60">
              Organize by owner, tags, verification, and more
            </div>
          </div>
        </SimpleButton>
      </div>
      <div className="px-[14px] py-[6px]">
        <div className="text-sm text-black/50">Last edited by Mustafa Shujaie</div>
        <div className="text-sm text-black/50">Jan 13, 2023, 3:51 PM</div>
      </div>
    </div>
  );
}
