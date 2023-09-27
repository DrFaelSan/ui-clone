import { ChevronRight } from "lucide-react";
import { ElementType } from "react";

type ListItemProps = {
  icon: ElementType,
  text: string;
  isPurple?: boolean; 
};

export default function ListItem({icon: Icon, text, isPurple}: ListItemProps) {
  return (
    <div className="flex flex-row gap-2 p-3 items-center">
      <Icon className={`${isPurple ? 'text-[#820AD1]' : 'text-[#7A7A80]'} mr-3 w-10`} />
      <p className="font-medium text-[#7A7A80] w-full text-left">{text}</p>
      <ChevronRight className="text-[#7A7A80] w-10" />
    </div>
  )
}
