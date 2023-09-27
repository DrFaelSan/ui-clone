import { Home as HomeIcon, Search, Library, LucideIcon } from "lucide-react";
import MenuItem from "./components/MenuItem";
import MenuPlayListItem from "./components/MenuPlayListItem";

export default function SideBar() {
  const playListNames: string[] = [
    "Hot Hits Brasil",
    "Link Park",
    "Pop Brasil",
    "Manuel Gomes Hits",
    "100% Ferrugem",
    "Gospel 2023",
  ];

  const menuItens: {
    itemName: string;
    itemIcon: React.ReactElement<LucideIcon>;
  }[] = [
    { itemName: "Home", itemIcon: <HomeIcon /> },
    { itemName: "Search", itemIcon: <Search /> },
    { itemName: "Your Library", itemIcon: <Library /> },
  ];

  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-5">
        {menuItens.map((el, index) => (
          <MenuItem key={index} itemIcon={el.itemIcon} itemName={el.itemName} />
        ))}
      </nav>
      <section className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-2">
        {playListNames.map((el, index) => (
          <MenuPlayListItem playListName={el} key={index} />
        ))}
      </section>
    </aside>
  );
}
