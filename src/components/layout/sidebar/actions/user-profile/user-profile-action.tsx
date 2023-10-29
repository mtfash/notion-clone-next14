"use client";
import { useState } from "react";
import Image from "next/image";
import ExpandIcon from "@/components/icons/expand";
import SimpleButton from "@/components/button/simple-button";
import ChevronLeftIcon from "@/components/icons/chevron-left";
import SwitchAccountDialog from "./switch-account-dialog";

export default function UserProfileAction() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<SimpleButton
				className="flex items-center justify-between gap-2"
				onClick={() => setIsOpen(true)}
			>
				<div className="flex items-center gap-2 flex-shrink">
					<Image
						src="/usericon.png"
						width={20}
						height={20}
						alt=""
						className="rounded-[3px]"
					/>
					<div className="font-medium text-ellipsis overflow-clip whitespace-nowrap flex-shrink">
						Mustafa Shujaie&apos;s Notion
					</div>
					<ExpandIcon />
				</div>

				<SimpleButton
					className="hover:bg-gray-300/60 p-2 px-2 py-2 aspect-square flex items-center justify-center"
					onClick={(e) => e.stopPropagation()}
				>
					<ChevronLeftIcon className="fill-gray-400" />
				</SimpleButton>
			</SimpleButton>

			<SwitchAccountDialog
				isOpen={isOpen}
				close={() => setIsOpen(false)}
			/>
		</>
	);
}
