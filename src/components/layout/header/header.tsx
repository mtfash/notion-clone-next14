"use client";

import Breadcrumbs from "@/components/breadcrumb";
import IconButton from "@/components/button/icon-button";
import SimpleButton from "@/components/button/simple-button";
import Clock from "@/components/icons/clock";
import Dots from "@/components/icons/dots";
import Message from "@/components/icons/message";
import Star from "@/components/icons/star";
import { useOverlayStack } from "@/components/overlay-stack";
import RelativeFixed from "@/components/relative-fixed";
import SettingsMenu from "@/components/settings/settings-menu";
import Share from "@/components/share/share";
import { useRef } from "react";

export default function Header() {
  const settingsButtonRef = useRef<HTMLDivElement>(null);

  const { push } = useOverlayStack();

  return (
    <header className="flex items-center justify-between px-4 pt-[8px]">
      <Breadcrumbs />

      <div className="flex items-stretch gap-[2px]">
        <div className="text-black/50 cursor-default flex items-center justify-center mr-4">
          Edited 8 Feb
        </div>
        <SimpleButton
          size="sm"
          className="text-black/80 flex items-center justify-center"
          onClick={() =>
            push(
              <RelativeFixed position={{ top: 50, right: 5 }}>
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
