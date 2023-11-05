import SimpleButton from "../button/simple-button";
import Check from "../icons/check";

export default function GetNotifiedMenu() {
  return (
    <div className="w-[240px] bg-white rounded-[8px] shadow-lg overflow-hidden border-[#e8e8e8] p-[4px] py-[6px]">
      <SimpleButton className="flex items-center justify-between">
        All comments
        <Check className="w-[16px]" />
      </SimpleButton>
      <SimpleButton>Replies and @mentions</SimpleButton>
    </div>
  );
}
