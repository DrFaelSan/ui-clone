import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  itemName: string;
  itemIcon: React.ReactElement<LucideIcon>;
}

export default function MenuItem({ itemName, itemIcon }: MenuItemProps) {
  return (
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
    >
      {itemIcon}
      {itemName}
    </a>
  );
}
