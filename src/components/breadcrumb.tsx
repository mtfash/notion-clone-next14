import SimpleButton from "./button/simple-button";

function Separator() {
  return <div className="mx-1 text-sm text-black/50">/</div>;
}

export default function Breadcrumbs() {
  return (
    <div className="flex items-center">
      <SimpleButton size="sm">Docker</SimpleButton>
      <Separator />
      <SimpleButton size="sm">Volumes</SimpleButton>
    </div>
  );
}
