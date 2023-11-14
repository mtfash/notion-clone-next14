import ExplorerEntry from "./entry";

export default function TreeExplorer() {
  return (
    <div className="flex flex-col items-stretch">
      <ExplorerEntry title="Some long ass text here just for testing" />
      <ExplorerEntry title="Bugs follow you left and right" />
      <ExplorerEntry title="What's up Next.js community?" />
    </div>
  );
}
