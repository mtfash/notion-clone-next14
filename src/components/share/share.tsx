import { cn } from "@/lib/utils";
import { useState } from "react";
import SimpleButton from "../button/simple-button";
import ShareTab from "./share-tab";
import PublishTab from "./publish-tab";

export default function Share() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className={cn("w-[500px] rounded-[8px] overflow-hidden bg-white shadow-lg")}>
      <div className="border-b border-[#e8e8e8]">
        <ul className="flex items-stretch px-[8px] py-[6px]">
          <li className="relative">
            <SimpleButton
              onClick={() => setCurrentPage(0)}
              className={cn({
                "text-black/80 font-medium": currentPage === 0,
                "text-black/40": currentPage !== 0,
              })}
            >
              Share
            </SimpleButton>
            {currentPage === 0 && (
              <span className="w-[75%] h-[2px] bg-black block absolute bottom-[-7px] left-1/2 transform -translate-x-1/2"></span>
            )}
          </li>
          <li className="relative">
            <SimpleButton
              onClick={() => setCurrentPage(1)}
              className={cn({
                "text-black/80 font-medium": currentPage === 1,
                "text-black/40": currentPage !== 1,
              })}
            >
              Publish
            </SimpleButton>
            {currentPage === 1 && (
              <span className="w-[75%] h-[2px] bg-black block absolute bottom-[-7px] left-1/2 transform -translate-x-1/2"></span>
            )}
          </li>
        </ul>
      </div>
      {currentPage === 0 && <ShareTab />}
      {currentPage === 1 && <PublishTab />}
    </div>
  );
}
