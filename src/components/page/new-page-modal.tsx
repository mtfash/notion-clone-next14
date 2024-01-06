"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import SimpleButton from "../button/simple-button";
import PageMetaHeader from "../layout/header/page-meta-header";
import FUllScreenIcon from "../icons/fullscreen";
import ChevronSingleRight from "../icons/chevron-single-right";
import NewPageForm from "./new-page-form";

export default function NewPageModal() {
  return (
    <div
      className={cn(
        "h-[90%] w-[90%] xl:w-[40%] flex flex-col items-stretch justify-between",
        "top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2",
        "rounded-md bg-white"
      )}
    >
      <header className="flex items-center justify-between px-[10px] pt-[10px] pb-[5px]">
        <div className="flex items-center gap-[5px]">
          <SimpleButton className="aspect-square w-[24px] flex items-center justify-center">
            <FUllScreenIcon />
          </SimpleButton>
          <div className="px-[5px] my-[5px]">
            <div className="border-l h-[16px]"></div>
          </div>
          <SimpleButton>
            <div className="flex items-center gap-1">
              <div className="text-gray-500">Add to</div>

              <Image src="/usericon.png" width={22} height={22} alt="" className="rounded-full" />

              <div className="font-medium">Private pages</div>

              <ChevronSingleRight className="w-[10px] rotate-90" />
            </div>
          </SimpleButton>
        </div>

        <PageMetaHeader />
      </header>
      <div className="flex-1 overflow-y-auto px-[10px] pb-[10px]">
        <div className="w-full lg:w-[80%] px-4 lg:px-0 mx-auto pt-[40px]">
          <NewPageForm />
        </div>
      </div>
    </div>
  );
}
