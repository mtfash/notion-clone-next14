"use client";

import { useCallback } from "react";
import ExplorerEntry from "./entry";

export default function TreeExplorer() {
  const childEntries = useCallback(
    async (level: number) => [
      {
        title: "Modern Talking",
        level: level + 1,
        icon: <span>🎤</span>,
        childEntries: async () => [
          {
            title: "Dieter Bohlen",
            level: level + 2,
            icon: <span>🥁</span>,
            childEntries: async () => [],
          },
          {
            title: "Thomas Anders",
            level: level + 2,
            icon: <span>🥁</span>,
            childEntries: async () => [],
          },
        ],
      },
      {
        title: "Cheri Cheri Lady",
        level: level + 1,
        icon: <span>📌</span>,
        childEntries: async () => [],
      },
      {
        title: "Brother Louie",
        level: level + 1,
        icon: <span>📚</span>,
        childEntries: async () => [],
      },
      {
        title: "You Can Win If You Want",
        level: level + 1,
        icon: <span>📙</span>,
        childEntries: async () => [],
      },
    ],
    []
  );
  return (
    <div className="flex flex-col items-stretch">
      <ExplorerEntry
        entry={{
          title: "Some long text here just for testing",
          level: 0,
          icon: <span>📌</span>,
          childEntries: async () => [],
        }}
      />
      <ExplorerEntry
        entry={{
          title: "Bugs follow you left and right",
          level: 0,
          expand: true,
          childEntries: childEntries,
        }}
      />
      <ExplorerEntry
        entry={{
          title: "What's up Next.js community?",
          level: 0,
          childEntries: async () => [],
        }}
      />
    </div>
  );
}
