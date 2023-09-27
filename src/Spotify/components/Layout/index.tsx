import React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-zinc-900 text-zinc-50">{children}</div>
    </>
  );
}
