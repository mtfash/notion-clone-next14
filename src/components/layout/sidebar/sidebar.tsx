import { FC } from "react";
import { SidebarContainer } from "./sidebar-container";
import UserProfileAction from "./actions/user-profile/user-profile-action";
import SimpleButton from "@/components/button/simple-button";
import Search from "@/components/icons/search";
import Clock from "@/components/icons/clock";
import Gear from "@/components/icons/gear";
import Plus from "@/components/icons/plus";

export const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <div className="p-1">
        <UserProfileAction />
        <SimpleButton className="flex items-center gap-2 font-medium text-black/40">
          <Search className="fill-black/40" />
          Search
        </SimpleButton>
        <SimpleButton className="flex items-center gap-2 font-medium text-black/40">
          <Clock className="fill-black/40" size="sm" />
          Updates
        </SimpleButton>
        <SimpleButton className="flex items-center gap-2 font-medium text-black/40">
          <Gear className="fill-black/40" />
          Settings & members
        </SimpleButton>
        <SimpleButton className="flex items-center gap-2 font-medium text-black/40">
          <Plus className="fill-black/40" />
          New page
        </SimpleButton>
      </div>
    </SidebarContainer>
  );
};
