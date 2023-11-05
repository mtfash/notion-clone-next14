import Header from "@/components/layout/header/header";
import { Sidebar } from "@/components/layout/sidebar/sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex justify-between items-stretch">
      <Sidebar />
      <div className="flex-1 h-screen relative flex flex-col">
        <Header className="bg-white" />
      </div>
    </div>
  );
}
