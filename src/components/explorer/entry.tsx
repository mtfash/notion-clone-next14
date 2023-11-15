"use client";

import { cn } from "@/lib/utils";
import ChevronSingleRight from "../icons/chevron-single-right";
import FileIcon from "../icons/file";
import Plus2 from "../icons/plus2";
import Dots from "../icons/dots";
import Image from "next/image";
import { useEffect, useState } from "react";

export type Entry = {
  title: string;
  level: number;
  icon?: string | React.ReactNode;
  expand?: boolean;
  childEntries: (level: number) => Promise<Entry[]>;
};

type ExplorerEntryProps = {
  entry: Entry;
};

export default function ExplorerEntry({ entry }: ExplorerEntryProps) {
  const { title, level, icon, expand, childEntries } = entry;

  const [children, setChildren] = useState<Entry[]>([]);
  const [_expand, setExpand] = useState(expand);

  const _level = level + 1;

  let iconElement: React.ReactNode = <FileIcon className="fill-black/40" />;

  if (typeof icon === "string") {
    iconElement = <Image src={icon} alt="icon" />;
  } else if (icon) {
    iconElement = icon;
  }

  useEffect(() => {
    childEntries(level).then(setChildren);
  }, [childEntries, level]);

  return (
    <div className="relative">
      <div
        role="button"
        className={cn(
          "flex items-center justify-between rounded-[4px] px-[10px] py-[4px] gap-[4px]",
          "hover:bg-black/5 group"
        )}
        style={{
          paddingLeft: _level * 10,
        }}
      >
        <div className="flex items-center gap-[2px]">
          <button
            type="button"
            className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10"
            onClick={() => setExpand(!_expand)}
          >
            <ChevronSingleRight
              className={cn("fill-black/40 w-[14px] transition-transform duration-200 ease-in", {
                "rotate-90": _expand,
              })}
            />
          </button>
          <button
            type="button"
            className="flex items-center justify-center aspect-square w-[20px] rounded-[4px] hover:bg-black/10"
          >
            {iconElement}
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

      {_expand && (
        <div>
          {children.length ? (
            children.map((child, key) => <ExplorerEntry entry={child} key={key} />)
          ) : (
            <div
              className={cn(
                "px-[10px] py-[4px] font-medium text-black/40"
              )}
              style={{
                paddingLeft: _level * 10 + 45,
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
