import { FC } from "react";
import { SidebarContainer } from "./sidebar-container";
import { UserProfileButton } from "./user-profile-button";
import SimpleButton from "@/components/button/simple-button";
import SearchIcon from "@/components/icons/search";
import ClockIcon from "@/components/icons/clock";
import GearIcon from "@/components/icons/gear";
import PlusIcon from "@/components/icons/plus";

export const Sidebar: FC = () => {
	return (
		<SidebarContainer>
			<div className="p-1">
				<UserProfileButton />
				<SimpleButton className="flex items-center gap-2 font-medium text-black/40">
					<SearchIcon />
					Search
				</SimpleButton>
				<SimpleButton className="flex items-center gap-2 font-medium text-black/40">
					<ClockIcon />
					Updates
				</SimpleButton>
				<SimpleButton className="flex items-center gap-2 font-medium text-black/40">
					<GearIcon />
					Settings & members
				</SimpleButton>
				<SimpleButton className="flex items-center gap-2 font-medium text-black/40">
					<PlusIcon />
					New page
				</SimpleButton>
			</div>
		</SidebarContainer>
	);
};
