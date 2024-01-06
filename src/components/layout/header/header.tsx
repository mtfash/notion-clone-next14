"use client";
import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/breadcrumb";
import PageMetaHeader from "./page-meta-header";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between pl-4 absolute w-full bg-white py-[8px] px-4",
        className
      )}
      style={{ zIndex: 100 }}
    >
      <Breadcrumbs />
      <PageMetaHeader />
    </header>
  );
}
