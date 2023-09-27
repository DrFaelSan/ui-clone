import { BookDown, Component, DollarSign, HelpingHand, QrCode, Receipt, Send, SmartphoneCharging } from "lucide-react";
import { ElementType } from "react";

export type CardItemType = {
  icon: ElementType,
  title: string;
}

export const CardItemData : CardItemType[] = [
  {
    title: 'Área Pix',
    icon: Component
  },
  {
    title: 'Pagar',
    icon: QrCode
  },
  {
    title: 'Transferir',
    icon: Send
  },
  {
    title: 'Depositar',
    icon: BookDown
  },
  {
    title: 'Pegar emprestado',
    icon: DollarSign
  },
  {
    title: 'Recarga de celular',
    icon: SmartphoneCharging
  },
  {
    title: 'Doação',
    icon: HelpingHand
  },
];