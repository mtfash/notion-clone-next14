import Comments from "@/components/comments/comments";

export default function Sidepeek() {
  return (
    <div className="h-full overflow-y-auto flex flex-col items-stretch">
      <Comments />
    </div>
  );
}
