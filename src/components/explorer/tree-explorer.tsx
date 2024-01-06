"use client";

import ExplorerEntry from "./entry";
import { Page, useCreatePage, useGetPages } from "@/queries/pages.query";
import SimpleButton from "../button/simple-button";
import AddIcon from "../icons/add";

export default function TreeExplorer() {
  const { data } = useGetPages();
  const { mutate: createPage, isLoading: creatingPage } = useCreatePage();

  const handleNewPage = async () => {
    const pageData: Partial<Page> = { title: "Untitled" };
    createPage(pageData, {
      onSuccess(page) {
        // TODO: open the created page in the editor
        console.log("Page created", page);
      },
    });
  };

  return (
    <div className="flex flex-col items-stretch">
      {data &&
        data.map((page) => (
          <ExplorerEntry
            key={page._id}
            entry={{
              page,
              level: 1,
            }}
          />
        ))}

      <SimpleButton
        className="flex items-center rounded-[4px] px-[10px] py-[4px] gap-3 text-black/60"
        onClick={handleNewPage}
      >
        <AddIcon className="fill-black/40" />
        Add a page
      </SimpleButton>
    </div>
  );
}
