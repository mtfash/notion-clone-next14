"use client";

import React from "react";
import { SidebarContainer } from "./sidebar-container";
import UserProfileAction from "./actions/user-profile/user-profile-action";
import TreeExplorer from "@/components/explorer/tree-explorer";
import SimpleButton from "@/components/button/simple-button";
import Search from "@/components/icons/search";
import Clock from "@/components/icons/clock";
import Gear from "@/components/icons/gear";
import Plus from "@/components/icons/plus";
import LinkButton from "@/components/button/link-button";

function Sidebar() {
  return (
    <SidebarContainer>
      <div>
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
          <LinkButton
            className="flex items-center gap-2 font-medium text-black/40"
            href="/pages/new?popup=true"
          >
            <Plus className="fill-black/40" />
            New page
          </LinkButton>
        </div>
        <div className="flex-1 overflow-y-auto px-1">
          <TreeExplorer />
        </div>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
