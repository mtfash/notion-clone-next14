"use client";
import { useState } from "react";
import Image from "next/image";
import Dialog from "@/components/dialog/dialog";
import ExpandIcon from "@/components/icons/expand";
import SimpleButton from "@/components/button/simple-button";
import ChevronLeftIcon from "@/components/icons/chevron-left";
import AccountSwitcher from "./account-switcher";
import Dots from "@/components/icons/dots";

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
						Mustafa Shujaie Notion
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
			<Dialog
				className="bg-white border border-[#e8e8e8] rounded-[4px] drop-shadow-xl absolute top-0 left-0 w-[360px]"
				isOpen={isOpen}
				close={() => setIsOpen(false)}
			>
				<div className="px-[4px] py-[8px]">
					<div className="flex items-center justify-between px-[8px] pb-[8px]">
						<div className="text-xs font-medium text-black/50">
							someone@gmail.com
						</div>

						<SimpleButton>
							<Dots />
						</SimpleButton>
					</div>
					<AccountSwitcher />
				</div>
			</Dialog>
		</>
	);
}
