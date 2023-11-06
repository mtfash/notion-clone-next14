"use client";
import { useRef } from "react";
import { useOverlayStack } from "@/components/overlay-stack";
import { cn } from "@/lib/utils";
import RelativeFixed from "@/components/relative-fixed";
import SettingsMenu from "@/components/settings/settings-menu";
import SimpleButton from "@/components/button/simple-button";
import Breadcrumbs from "@/components/breadcrumb";
import IconButton from "@/components/button/icon-button";
import Message from "@/components/icons/message";
import Clock from "@/components/icons/clock";
import Share from "@/components/share/share";
import Dots from "@/components/icons/dots";
import Star from "@/components/icons/star";
import ChevronLeft from "@/components/icons/chevron-left";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  const settingsButtonRef = useRef<HTMLDivElement>(null);

  const { push } = useOverlayStack();

  return (
    <header
      className={cn(
        "flex items-center justify-between pl-4 absolute w-full bg-white py-[8px] px-4",
        className
      )}
      style={{ zIndex: 100 }}
    >
      <Breadcrumbs />
      <div className="flex justify-end items-center gap-[2px] w-[385px]">
        <div className="text-black/50 cursor-default flex items-center justify-center mr-4">
          Edited 8 Feb
        </div>
        <SimpleButton
          size="sm"
          className="text-black/80 flex items-center justify-center"
          onClick={() =>
            push(
              <RelativeFixed position={{ top: 50, right: 10 }}>
                <Share />
              </RelativeFixed>
            )
          }
        >
          Share
        </SimpleButton>
        <IconButton size="sm">
          <Message className="fill-black/70" />
        </IconButton>
        <IconButton size="sm">
          <Clock className="fill-black/70" size="md" />
        </IconButton>
        <IconButton size="sm">
          <Star className="fill-black/70" />
        </IconButton>
        <IconButton
          size="sm"
          ref={settingsButtonRef}
          onClick={() =>
            push(
              <RelativeFixed
                relativeTo={settingsButtonRef.current}
                position={{ top: 0, right: 0 }}
                side="bottom-right"
              >
                <SettingsMenu />
              </RelativeFixed>
            )
          }
        >
          <Dots className="fill-black/70" size="md" />
        </IconButton>
      </div>
    </header>
  );
}
