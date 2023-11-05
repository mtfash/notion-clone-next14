import SimpleButton from "@/components/button/simple-button";
import ChevronSingleRight from "@/components/icons/chevron-single-right";
import MessageBubbles from "@/components/icons/message-bubbles";

export default function Comments() {
  return (
    <>
      <div className="flex items-center justify-between pl-6 py-3 border-b border-[#e8e8e8]">
        <div className="font-medium">Comments</div>
        <SimpleButton className="flex items-center gap-1 text-sm text-black/60">
          Open
          <ChevronSingleRight className="w-[10px] h-[10px] rotate-90 fill-black/60" />
        </SimpleButton>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-black/40 flex flex-col items-center">
          <MessageBubbles className="fill-black/40 mb-4" />
          <div className="font-medium text-black/60 mb-1">No open comments yet</div>
          <div className="w-[200px] text-center leading-tight">
            Open comments on this page will appear here
          </div>
        </div>
      </div>
    </>
  );
}
