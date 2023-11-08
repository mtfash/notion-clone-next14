import Comments from "@/components/comments/comments";

export default function Sidepeek() {
  return (
    <div className="bg-white min-w-[385px] flex-1 pt-[48px]">
      <div className="h-full overflow-y-auto flex flex-col items-stretch">
        <Comments />
      </div>
    </div>
  );
}
