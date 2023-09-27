import { Play } from "lucide-react";

interface Album {
  name: string;
  descripition: string;
  imageSrc: string;
}

export default function AlbumGridItem(album: Album) {
  return (
    <a
      href="https://www.youtube.com/watch?v=YVI-q3idGiM&t=2418s"
      target="_blank"
      className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
    >
      <img src={album.imageSrc} width={104} height={104} alt="Capa do album" />
      <strong>{album.name}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
