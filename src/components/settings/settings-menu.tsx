import { useRef } from "react";
import { useOverlayStack } from "../overlay-stack";
import { cn } from "@/lib/utils";
import ChevronSingleRight from "../icons/chevron-single-right";
import GetNotifiedMenu from "./get-notified-menu";
import AnalyticsMenu from "./analytics-menu";
import RelativeFixed from "../relative-fixed";
import SimpleButton from "../button/simple-button";
import Duplicate from "../icons/duplicate";
import Customize from "../icons/_customize";
import Sidepeek from "../icons/sidepeek";
import History from "../icons/history";
import MoveTo from "../icons/move-to";
import Notion from "../icons/notion";
import ZoomIn from "../icons/zoopin";
import Reload from "../icons/reload";
import Delete from "../icons/delete";
import Repost from "../icons/repost";
import Undo from "../icons/undo";
import Lock from "../icons/lock";
import Bell from "../icons/bell";
import Link from "../icons/link";
import Add from "../icons/add";
import ConnectionsListMenu from "./connections-list-menu";

export default function SettingsMenu() {
  const showMenuBtnRef = useRef<HTMLDivElement>(null);
  const showAnalyticsBtnRef = useRef<HTMLDivElement>(null);
  const addConnectionButtonRef = useRef<HTMLDivElement>(null);

  const { push } = useOverlayStack();

  return (
    <div className="h-screen">
      <div className={cn("w-[240px] bg-white rounded-[8px] shadow-lg overflow-hidden h-[70%]")}>
        <div className="overflow-y-scroll h-full">
          <div className="py-[6px] px-4 border-b border-[#e8e8e8]">
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
              <div className="flex-1">
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

          <div className="py-[6px] px-[4px] border-b border-[#e8e8e8]">
            <SimpleButton
              className="flex items-start justify-between gap-[10px]"
              onClick={() =>
                push(
                  <RelativeFixed
                    relativeTo={showMenuBtnRef.current}
                    position={{ right: 0, top: 0 }}
                    side="top-left"
                  >
                    <GetNotifiedMenu />
                  </RelativeFixed>
                )
              }
              ref={showMenuBtnRef}
            >
              <Bell className="relative top-[2px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Get notified</div>

                <ChevronSingleRight className="w-[12px] fill-black/40" />
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Link className="relative top-[1px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Copy link</div>

                <div className="text-sm text-black/40">⌘+⌥+L</div>
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Duplicate className="relative top-[1px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Duplicate</div>

                <div className="text-sm text-black/40">⌘+D</div>
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Sidepeek className="relative top-[2px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Open in side peek</div>

                <div className="text-sm text-black/40">⌥+Click</div>
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Notion className="relative top-[1px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Open in Mac app</div>
              </div>
            </SimpleButton>
          </div>

          <div className="py-[6px] px-[4px] border-b border-[#e8e8e8]">
            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Undo className="relative top-[1px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Undo</div>

                <div className="text-sm text-black/40">⌘+Z</div>
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <History className="relative top-[1px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Page history</div>
              </div>
            </SimpleButton>

            <SimpleButton
              className="flex items-start justify-between gap-[10px]"
              onClick={() =>
                push(
                  <RelativeFixed
                    relativeTo={showAnalyticsBtnRef.current}
                    position={{ right: 0, top: 0 }}
                    side="top-left"
                  >
                    <AnalyticsMenu />
                  </RelativeFixed>
                )
              }
              ref={showAnalyticsBtnRef}
            >
              <ZoomIn className="relative top-[1px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Page analytics</div>

                <ChevronSingleRight className="w-[12px] fill-black/40" />
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Reload className="relative top-[2px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Show deleted pages</div>
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Delete className="relative top-[2px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Delete</div>
              </div>
            </SimpleButton>
          </div>

          <div className="py-[6px] px-[4px] border-b border-[#e8e8e8]">
            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <Undo className="relative top-[1px]" />
              <div className="flex justify-between items-center flex-1">
                <div className="text-black/90">Import</div>
              </div>
            </SimpleButton>

            <SimpleButton className="flex items-start justify-between gap-[10px]">
              <History className="relative top-[1px]" />
              <div className="flex-1">
                <div className="text-black/90">Export</div>
                <div className="text-sm text-black/60">PDF, HTML, Markdown & CSV</div>
              </div>
            </SimpleButton>
          </div>

          <div className="py-[6px] border-b border-[#e8e8e8]">
            <div className="px-4 pb-[4px]">
              <div className="text-sm text-black/60">Connections</div>
            </div>

            <div className="px-[4px]">
              <SimpleButton
                className="flex items-start justify-between gap-[10px]"
                ref={addConnectionButtonRef}
                onClick={() =>
                  push(
                    <RelativeFixed
                      relativeTo={addConnectionButtonRef.current}
                      side="top-left"
                      position={{ right: 0, top: 0 }}
                    >
                      <ConnectionsListMenu />
                    </RelativeFixed>
                  )
                }
              >
                <Add className="relative top-[2px]" />
                <div className="flex-1 flex justify-between items-center">
                  <div className="text-black/90">Add connection</div>
                  <ChevronSingleRight className="w-[12px] fill-black/40" />
                </div>
              </SimpleButton>
            </div>
          </div>
          <div className="py-4 px-4">
            <div className="text-sm text-black/40 space-y-1">
              <div>Word count: 174</div>
              <div>Last edited by Mustafa Shujaie</div>
              <div>Yesterday at 6:27 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
