"use client";
import { FC } from "react";
import Image from "next/image";
import SimpleButton from "@/components/button/simple-button";
import ExpandIcon from "@/components/icons/expand";
import ChevronLeftIcon from "@/components/icons/chevron-left";

export const UserProfileButton: FC = () => {
	return (
		<SimpleButton className="flex items-center justify-between gap-2">
			<div className="flex items-center gap-2 flex-shrink">
				<Image
					src="/usericon.png"
					width={20}
					height={20}
					alt=""
					className="rounded-[3px]"
				/>
				<div className="font-medium text-ellipsis overflow-clip whitespace-nowrap flex-shrink">
					Mustafa Shujaie Notion
				</div>
				<ExpandIcon />
			</div>

			<SimpleButton className="hover:bg-gray-300/60 flex-shrink-0">
				<ChevronLeftIcon />
			</SimpleButton>
		</SimpleButton>
	);
};
