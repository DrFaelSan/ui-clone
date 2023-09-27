import { Bell, Briefcase, Component, CreditCard, FileText, HelpCircle, Settings, Shield, Sliders, User2 } from "lucide-react";
import { ElementType } from "react";

export type ListItemType = {
  icon: ElementType,
  text: string;
  isPurple?: boolean;
}

export const ListItemData : ListItemType[] = [
  {
    icon: HelpCircle,
    text: 'Me ajuda',
    isPurple: true,
  },
  {
    icon: User2,
    text: 'Meus dados',
  },
  {
    icon: Sliders,
    text: 'Configurar app',
  },
  {
    icon: Shield,
    text: 'Segurança',
  },
  {
    icon: Component,
    text: 'Configurar chaves pix',
  },
  {
    icon: Briefcase,
    text: 'Pedir conta PJ',
  },
  {
    icon: Bell,
    text: 'Notificações',
  },
  {
    icon: Settings,
    text: 'Configurar conta',
  },
  {
    icon: CreditCard,
    text: 'Configurar cartão',
  },
  {
    icon: FileText,
    text: 'Sobre',
  },
]
