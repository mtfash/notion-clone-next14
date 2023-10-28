import { Sidebar } from "@/components/layout/Sidebar";

export default function Home() {
	return (
		<div className="w-screen h-screen bg-white flex justify-between items-stretch">
			<Sidebar />
			<div className="flex-1"></div>
		</div>
	);
}
