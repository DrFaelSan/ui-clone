interface SectionItemProps {
  playListName: string;
}

export default function MenuPlayListItem({ playListName }: SectionItemProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
      {playListName}
    </a>
  );
}
