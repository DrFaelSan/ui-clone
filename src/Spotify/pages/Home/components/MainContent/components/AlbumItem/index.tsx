import { Play } from "lucide-react";

interface Album {
  name: string;
  descripition: string;
  imageSrc: string;
}

export default function AlbumItem(album: Album) {
  return (
    <a
      href="https://www.youtube.com/watch?v=YVI-q3idGiM&t=2418s"
      target="_blank"
      className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <div className="relative">
        <img
          src={album.imageSrc}
          className="w-full static"
          width={104}
          height={104}
          alt={`image album: ${name}`}
        />
        <Play className="w-8 h-8 bg-green-400 rounded-full p-2 text-center text-black ml-auto z-100 absolute  bottom-1 right-1 invisible group-hover:visible" />
      </div>
      <strong className="font-semibold text-sm">{album.name}</strong>
      <span className="text-xs text-zinc-400">{album.descripition}</span>
    </a>
  );
}
