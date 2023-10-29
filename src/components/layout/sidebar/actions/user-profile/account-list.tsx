import Check from "@/components/icons/check";
import Grab from "@/components/icons/grab";
import Image from "next/image";

export default function AccountList() {
	return (
		<>
			<div
				className="flex items-center hover:bg-[#f1f1f0] px-[10px] py-[4px] rounded-[4px]"
				role="button"
			>
				<button className="hover:cursor-grab">
					<Grab className="opacity-40" />
				</button>
				<Image
					src="/usericon-lg.png"
					width={32}
					height={32}
					className="rounded-[4px] block ml-[8px]"
					alt=""
				/>
				<div className="flex-1 flex justify-between items-center gap-2 ml-[14px]">
					<div className="space-y-[1px] leading-tight">
						<div>Mustafa Shujaie&apos;s Notion</div>
						<div className="text-sm text-black/50">
							Free Plan · 1 member
						</div>
					</div>
					<Check className="ml-auto" />
				</div>
			</div>

			<div
				className="flex items-center hover:bg-[#f1f1f0] px-[10px] py-[4px] rounded-[4px]"
				role="button"
			>
				<button className="hover:cursor-grab">
					<Grab className="opacity-40" />
				</button>
				<div className="w-[32px] h-[32px] rounded-[4px] bg-black/10 flex items-center justify-center ml-[8px] text-xl font-semibold text-black/50">
					S
				</div>
				<div className="flex-1 flex justify-between items-center gap-2 ml-[14px]">
					<div className="space-y-[1px] leading-tight">
						<div>Sololab</div>
						<div className="text-sm text-black/50">
							Free Plan · 6 members
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
