import SimpleButton from "../button/simple-button";
import ZoomIn from "../icons/zoopin";
import Gear from "../icons/gear";

export default function AnalyticsMenu() {
  return (
    <div className="w-[240px] bg-white rounded-[8px] shadow-lg overflow-hidden border-[#e8e8e8] p-[4px] py-[6px]">
      <SimpleButton className="flex items-center gap-[10px]">
        <ZoomIn className="" />
        View analytics
      </SimpleButton>
      <SimpleButton className="flex items-center gap-[10px]">
        <Gear />
        Privacy settings
      </SimpleButton>
    </div>
  );
}
