import SimpleButton from "@/components/button/simple-button";
import AccountList from "./account-list";
import Dots from "@/components/icons/dots";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useOverlayStack } from "@/components/overlay-stack";
import RelativeFixed from "@/components/relative-fixed";
import PlusSquare from "@/components/icons/plus-square";
import RemoveCircle from "@/components/icons/remove-circle";

export default function SwitchAccountDialog() {
  const buttonRef = useRef<HTMLDivElement>(null);

  const { push } = useOverlayStack();

  const handleClick = () => {
    push(
      <RelativeFixed
        relativeTo={buttonRef.current}
        side="bottom-left"
        position={{ left: -5, top: 5 }}
      >
        <div className="w-[240px] bg-white rounded-[4px] px-[4px] py-[5px] border border-[#e8e8e8] drop-shadow-xl">
          <SimpleButton className="flex items-center gap-4 text-sm text-black/80 px-[8px]">
            <PlusSquare className="fill-black/40" /> Join or create workspace
          </SimpleButton>
          <SimpleButton className="flex items-center gap-4 text-sm text-black/80 px-[8px]">
            <RemoveCircle className="fill-black/40" /> Log out
          </SimpleButton>
        </div>
      </RelativeFixed>
    );
  };

  return (
    <div className={cn("w-[340px] rounded-[4px] bg-white border border-[#e8e8e8] drop-shadow-xl")}>
      <div className="px-[4px] py-[8px]">
        <div className="flex items-center justify-between px-[8px] pb-[8px]">
          <div className="text-xs font-medium text-black/50">someone@gmail.com</div>

          <SimpleButton ref={buttonRef} onClick={handleClick}>
            <Dots />
          </SimpleButton>
        </div>
        <AccountList />
      </div>

      <div
        className="bg-[#fbfaf9] py-[6px] px-[4px]"
        style={{ boxShadow: "rgba(55, 53, 47, 0.09) 0px -1px 0px" }}
      >
        <SimpleButton className="text-sm text-black/50 px-[8px]">Add another account</SimpleButton>

        <SimpleButton className="text-sm text-black/50 px-[8px]">Log out</SimpleButton>
      </div>

      <div
        className="bg-[#fbfaf9] py-[6px] px-[4px] rounded-b-[4px]"
        style={{ boxShadow: "rgba(55, 53, 47, 0.09) 0px -1px 0px" }}
      >
        <SimpleButton className="text-sm text-black/50 px-[8px]">Get Mac app</SimpleButton>
      </div>
    </div>
  );
}
