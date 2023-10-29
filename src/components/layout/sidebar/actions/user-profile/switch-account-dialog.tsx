import Dialog from "@/components/dialog/dialog";
import AccountList from "./account-list";
import Dots from "@/components/icons/dots";
import SimpleButton from "@/components/button/simple-button";

type SwitchAccountDialogProps = {
	isOpen: boolean;
	close: () => void;
};

export default function SwitchAccountDialog({
	isOpen,
	close,
}: SwitchAccountDialogProps) {
	return (
		<Dialog
			className="bg-white border border-[#e8e8e8] rounded-[4px] drop-shadow-xl absolute top-0 left-0 w-[340px] overflow-hidden"
			isOpen={isOpen}
			close={close}
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
				<AccountList />
			</div>
			<div
				className="bg-[#fbfaf9] py-[6px] px-[4px]"
				style={{ boxShadow: "rgba(55, 53, 47, 0.09) 0px -1px 0px" }}
			>
				<SimpleButton className="text-sm text-black/50 px-[8px]">
					Add another account
				</SimpleButton>
				<SimpleButton className="text-sm text-black/50 px-[8px]">
					Log out
				</SimpleButton>
			</div>
			<div
				className="bg-[#fbfaf9] py-[6px] px-[4px]"
				style={{ boxShadow: "rgba(55, 53, 47, 0.09) 0px -1px 0px" }}
			>
				<SimpleButton className="text-sm text-black/50 px-[8px]">
					Get Mac app
				</SimpleButton>
			</div>
		</Dialog>
	);
}
