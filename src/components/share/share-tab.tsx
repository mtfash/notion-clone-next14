import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useOverlayStack } from "../overlay-stack";
import ChevronSingleRight from "../icons/chevron-single-right";
import RelativeFixed from "../relative-fixed";
import SimpleButton from "../button/simple-button";
import Organization from "../icons/organization";
import LockFilled from "../icons/lock-filled";
import Check from "../icons/check";
import Link from "../icons/link";

export default function ShareTab() {
  const inviteTypeBtnRef = useRef<HTMLButtonElement>(null);
  const { push } = useOverlayStack();
  return (
    <>
      <div className="p-[14px] border-b border-[#e8e8e8]">
        <div className="flex items-stretch justify-between gap-[4px]">
          <input
            type="text"
            placeholder="Add people, groups, or emails..."
            className="bg-[#f8f8f8] border-[#e8e8e8] border rounded-[4px] flex-1 p-[4px] focus:border-blue-400 focus:outline-offset-[2px] focus:outline-blue-200"
          />
          <button className="bg-[#0077d4] text-white font-medium px-[10px] rounded-[4px]">
            Invite
          </button>
        </div>
      </div>
      <div className="px-[14px] py-[6px] flex items-center justify-between">
        <button
          className="flex items-center justify-between bg-white rounded-full border border-[#cecece] hover:bg-[#e8e8e8] py-[4px] px-[14px] text-black/50"
          ref={inviteTypeBtnRef}
          onClick={() =>
            push(
              <RelativeFixed
                relativeTo={inviteTypeBtnRef.current}
                side="bottom-left"
                position={{ top: 0, left: 0 }}
              >
                <InviteType />
              </RelativeFixed>
            )
          }
        >
          <LockFilled className="fill-black/50 mr-[6px]" />
          Invite only
          <ChevronSingleRight className="fill-black/50 rotate-90 w-[12px] ml-[4px]" />
        </button>
      </div>
    </>
  );
}

function InviteType() {
  return (
    <div className={cn("w-[450px] rounded-[8px] overflow-hidden bg-white shadow-lg p-[4px]")}>
      <SimpleButton className="flex items-center gap-[10px]">
        <LockFilled className="fill-black/50" />
        <div className="flex items-center justify-between flex-1">
          <div>
            <div className="font-medium">Invite only</div>
            <div className="text-sm text-black/50">Only you and people invited can access</div>
          </div>
          <Check />
        </div>
      </SimpleButton>
      <SimpleButton className="flex items-center gap-[10px]">
        <Link className="fill-black/50" />
        <div className="flex-1">
          <div className="text-black/80">Anyone with link at Mustafa Shujaie&apos;s Notion</div>
          <div className="text-sm text-black/50">
            People invited and workspace members with link can access
          </div>
        </div>
      </SimpleButton>
      <SimpleButton className="flex items-center gap-[10px]">
        <Organization className="fill-black/50" />
        <div className="flex-1">
          <div className="text-black/80">Everyone at Mustafa Shujaie&apos;s Notion</div>
          <div className="text-sm text-black/50">All workspace members can search and access</div>
        </div>
      </SimpleButton>
    </div>
  );
}
