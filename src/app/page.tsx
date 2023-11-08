import { Sidebar } from "@/components/layout/sidebar/sidebar";
import Sidepeek from "@/components/layout/sidepeek/sidepeek";
import Header from "@/components/layout/header/header";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex justify-between items-stretch">
      <Sidebar />
      <div className="relative flex-1 overflow-hidden">
        <Header />

        <div className="bg-white flex items-stretch h-full">
          <Main />

          <Sidepeek />
        </div>
      </div>
    </div>
  );
}
