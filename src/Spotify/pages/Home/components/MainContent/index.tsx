import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { data as DataAlbum } from "./data";
import AlbumItem from "./components/AlbumItem";
import AlbumGridItem from "./components/AlbumItemGrid";

export default function MainContent() {
  return (
    <>
      <main className="flex-1 p-6 bg-gradient-to-b from-green-300 from-3% via-transparent via-27% to-black to-70%">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <div className=" p-1 bg-black overflow-hidden rounded-full w-56 h-15 flex flex-row items-center justify-between">
            <img
              src="/eu-avatar.jpg"
              className="rounded-full"
              width={48}
              height={48}
              alt="Capa do album"
            />
            <strong>Rafael Vieira P...</strong>
            <ChevronDown size={20} />
          </div>
        </div>
        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {DataAlbum.map((album, index) => (
            <AlbumGridItem
              key={index}
              descripition={album.descripition}
              imageSrc={album.imageSrc}
              name={album.name}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl mt-10">
            Made for Rafael Vieira Lima
          </h2>
          <span className="text-sm text-zinc-400">Show All</span>
        </div>
        <div className="grid grid-cols-8 gap-4 mt-6">
          {DataAlbum.map((album, index) => (
            <AlbumItem
              key={index}
              descripition={album.descripition}
              imageSrc={album.imageSrc}
              name={album.name}
            />
          ))}
        </div>
      </main>
    </>
  );
}
