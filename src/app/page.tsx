import Sidebar from "@/components/layout/sidebar/sidebar";
import Header from "@/components/layout/header/header";
import { NextPageProps } from "@/lib/next";

export default function Home({ params, searchParams }: NextPageProps) {
  return (
    <div className="w-full h-screen bg-white flex justify-between items-stretch">
      <Sidebar />
      <div className="relative flex-1 overflow-hidden">
        <Header />

        <div className="bg-white flex items-stretch h-full">
          <div className="bg-white w-full h-full flex-1 text-center justify-center items-center flex"></div>
        </div>
      </div>
    </div>
  );
}
