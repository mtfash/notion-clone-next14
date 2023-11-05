"use client";
import { Sidebar } from "@/components/layout/sidebar/sidebar";
import Header from "@/components/layout/header/header";
import Sidepeek from "@/components/layout/sidepeek/sidepeek";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex justify-between items-stretch">
      <Sidebar />
      <div className="flex-1 h-screen relative flex flex-col">
        <Header className="bg-white relative z-10" />

        <div className="h-full flex-1 overflow-y-scroll"></div>

        <Sidepeek />
      </div>
    </div>
  );
}
