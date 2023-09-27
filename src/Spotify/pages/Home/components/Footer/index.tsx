import {
  Play,
  Heart,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/manuel_gomes.jpg"
          width={56}
          height={56}
          alt="Capa do album"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Eu vou deixar de ser besta</strong>
          <span className="text-xs text-zinc-400">Manuel Gomes</span>
        </div>
        <Heart className="text-white hover:text-zinc-400" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:11</span>
          <div className="h-1 rounded=full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-8 h-1 roundend-full" />
          </div>
          <span className="text-xs text-zinc-400">3:37</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded=full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 roundend-full" />
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
