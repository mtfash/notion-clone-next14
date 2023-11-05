import SimpleButton from "../button/simple-button";
import Gear from "../icons/gear";
import Notion from "../icons/notion";

export default function ConnectionsListMenu() {
  return (
    <div className="w-[240px] bg-white rounded-[8px] shadow-lg overflow-hidden border-[#e8e8e8]">
      <div className="px-[10px] pt-[10px] pb-[6px] border-b border-b-[#e8e8e8]">
        <input
          type="text"
          placeholder="Search for connections..."
          className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-[4px] p-[6px] w-full text-sm focus:border-blue-400 focus:outline-offset-[2px] focus:outline-blue-200"
        />
      </div>
      <div className="h-[200px] overflow-y-scroll px-[4px]">
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Bardeen
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Census
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Hightouch
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          IFTTT
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Make
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Marker.io
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Bardeen
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Pipedream
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Qonto
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Rootly
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Slapdash
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Tray.io
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Typeform
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Unito 2-Way Sync
        </SimpleButton>
        <SimpleButton className="flex items-center gap-[8px]">
          <Notion />
          Webex
        </SimpleButton>
      </div>

      <div className="border-t border-t-[#e8e8e8] px-[4px] pb-[6px] pt-[4px]">
        <SimpleButton className="flex items-center gap-[10px] px-[4px]">
          <Gear />
          Manage connections
        </SimpleButton>
      </div>
    </div>
  );
}
