"use client";

import SimpleButton from "../button/simple-button";
import SmileIcon from "../icons/smile";
import PhotoIcon from "../icons/photo";
import MessageIcon from "../icons/message";
import ReturnIcon from "../icons/return";
import NewFileIcon from "../icons/new-file";
import SparklesIcon from "../icons/sparkles";
import ImportIcon from "../icons/import";
import TemplateIcon from "../icons/template";
import TableIcon from "../icons/table";
import BoardIcon from "../icons/board";

export default function NewPageForm() {
  return (
    <>
      <div className="group mb-[20px]">
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 py-[10px]">
          <SimpleButton className="flex items-center gap-1 text-gray-400">
            <SmileIcon />
            Add icon
          </SimpleButton>

          <SimpleButton className="flex items-center gap-1 text-gray-400">
            <PhotoIcon />
            Add cover
          </SimpleButton>

          <SimpleButton className="flex items-center gap-1 text-gray-400">
            <MessageIcon className="fill-gray-400" />
            Add comment
          </SimpleButton>
        </div>

        <input
          type="text"
          className="w-full border-none focus:outline-none text-4xl font-bold placeholder:text-gray-300"
          placeholder="Untitled"
        />
      </div>

      <div className="flex flex-col items-stretch gap-1 mb-4">
        <SimpleButton className="flex items-center justify-between text-gray-400 hover:text-gray-500 text-lg group">
          <div className="flex items-center gap-[10px]">
            <NewFileIcon />
            Empty page
          </div>

          <ReturnIcon className="hidden group-hover:block" />
        </SimpleButton>

        <SimpleButton className="flex items-center justify-between text-gray-400 hover:text-gray-500 text-lg group">
          <div className="flex items-center gap-[10px]">
            <SparklesIcon />
            Start writing with AI...
          </div>

          <ReturnIcon className="hidden group-hover:block" />
        </SimpleButton>
      </div>

      <h2 className="text-gray-400 text-sm mb-[10px]">Add new</h2>
      <div className="flex flex-col items-stretch gap-1">
        <SimpleButton className="flex items-center justify-between text-gray-400 hover:text-gray-500 text-lg group">
          <div className="flex items-center gap-[10px]">
            <ImportIcon />
            Import
          </div>

          <ReturnIcon className="hidden group-hover:block" />
        </SimpleButton>

        <SimpleButton className="flex items-center justify-between text-gray-400 hover:text-gray-500 text-lg group">
          <div className="flex items-center gap-[10px]">
            <TemplateIcon />
            Templates
          </div>

          <ReturnIcon className="hidden group-hover:block" />
        </SimpleButton>

        <SimpleButton className="flex items-center justify-between text-gray-400 hover:text-gray-500 text-lg group">
          <div className="flex items-center gap-[10px]">
            <TableIcon />
            Table
          </div>

          <ReturnIcon className="hidden group-hover:block" />
        </SimpleButton>

        <SimpleButton className="flex items-center justify-between text-gray-400 hover:text-gray-500 text-lg group">
          <div className="flex items-center gap-[10px]">
            <BoardIcon />
            Board
          </div>

          <ReturnIcon className="hidden group-hover:block" />
        </SimpleButton>
      </div>
    </>
  );
}
