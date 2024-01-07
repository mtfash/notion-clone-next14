"use client";

import { cn } from "@/lib/utils";
import SimpleButton from "../button/simple-button";
import PageMetaHeader from "../layout/header/page-meta-header";
import FUllScreenIcon from "../icons/fullscreen";
import NewPageForm from "./new-page-form";
import { Page } from "@/queries/pages.query";
import { PageParentSelect } from "./page-parent-select";

type NewPageModalProps = {
  page?: Page;
};

export default function NewPageModal({ page }: NewPageModalProps) {
  return (
    <div
      className={cn(
        "h-[80%] w-[90%] xl:w-[80%] max-w-[1024px] flex flex-col items-stretch justify-between",
        "top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 rounded-md bg-white"
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
          <PageParentSelect />
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
