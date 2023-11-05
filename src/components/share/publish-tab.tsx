import World from "../icons/world";

export default function PublishTab() {
  return (
    <div className="p-[30px] flex flex-col items-center justify-center">
      <World className="w-[30px] h-[30px] fill-black/30 mb-[10px]" />
      <div className="font-medium mb-2">Publish to web</div>
      <div className="text-black/50 text-center mb-6 mx-8">
        Publish a static website of this page. You can allow others to view, duplicate, and remix.{" "}
        <a href="/" className="underline">
          Learn more.
        </a>
      </div>
      <button className="block w-full rounded-[4px] bg-[#2283e2] text-white py-[6px]">
        Publish to web
      </button>
    </div>
  );
}
