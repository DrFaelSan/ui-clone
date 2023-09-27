import { ElementType } from "react";

type CardProps = {
  icon: ElementType,
  title: string;
};

export default function Card({icon: Icon, title}: CardProps) {
  return (
    <div className="flex flex-col h-[131px] w-[151px] drop-shadow-2xl bg-white rounded-lg text-black items-center justify-center">
      <Icon className="bg-[#E8E8F0] text-[#820AD1] rounded-full h-16 w-16 p-4 my-2" />
      <h3 className="text-[#7A7A80]">{title}</h3>
    </div>
  )
}
