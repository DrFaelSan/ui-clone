import React from "react";
export default function LayoutNubank({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-zinc-100 text-zinc-50">{children}</div>
    </>
  );
}
