import { CreditCard, Eye } from "lucide-react";
import { CardItemData, CardItemType } from '../Home/data/CardItemData';
import { ListItemData, ListItemType } from '../Home/data/ListItemData';
import Card from "./components/Card";
import ListItem from "./components/ListItem";

export default function HomeNubank() {
    return (
    <div className="h-screen flex flex-col bg-[#E5E5E5]">
      <header className="flex flex-row bg-white h-20 items-center justify-between p-5">
        <img src="/nubank.svg" alt="logo" width={50} height={50} />
        <div className="flex flex-row w-52 h-15 rounded-full bg-[#E8E8F0] p-2 text-black justify-center items-center">
          <span className="font-semibold text-sm">Acessar outra conta</span>
        </div>
      </header>
      <div className="bg-[#820AD1] h-150 p-5 flex flex-row">
        <div className="flex flex-col space-y-1 mx-10">
          <strong className="font-medium text-sm">Olá, Rafael Vieira Paulino</strong>
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">Conta</span>
            <Eye size={15} />
          </div>
          <h1 className="font-bold">R$ 100,00</h1>
        </div>
        <div className="bg-[#E8E8F0] w-80 rounded-lg mx-10 flex flex-col items-center justify-center p-5">
          <p className="text-black">
            Veja os descontos que preparamos para você no
            <span className="text-[#820AD1]"> Shopping Nubank</span>
          </p>
        </div>
        <div className="bg-[#E8E8F0] w-80 rounded-lg p-5 mx-10 flex flex-col items-center justify-center">
          <p className="text-black">
            <span className="text-[#820AD1]">25% de desconto </span> em
            empréstimo com portabilidade de salário
          </p>
        </div>
      </div>
      <main className="m-4 p-2">
          <div className="p-10">
            <div className="flex flex-row items-center justify-between gap-2">
              {CardItemData.map((el: CardItemType, index: number) => <Card key={index} title={el.title} icon={el.icon}/>)}
            </div>
            <div className="flex flex-row justify-around my-2 py-5">
              <aside className="bg-white rounded-xl  divide-y-2 flex flex-col justify-center p-3 ">
              {ListItemData.map((el: ListItemType, index: number) => <ListItem key={index} text={el.text} icon={el.icon} isPurple={el.isPurple ?? false}/>)}
              </aside>
              <main className="flex-1 mx-10">
                <div className="h-[191px] w-[540px] rounded-xl bg-white flex flex-col gap-2 px-6 justify-center">
                  <div className="flex flex-row items-center justify-around w-2/3 mb-5">
                      <CreditCard className="text-[#323232]" />
                      <p className="font-semibold text-sm text-black">Cartão de crédito</p>
                      <div className="w-3 h-3 bg-[#7A7A80] rounded-full" /> 
                      <span className="text-[#7A7A80]">Fecha em 01 JAN</span>
                  </div>
                  <div className="flex flex-row items-center justify-around w-full mb-5">
                    <div className="flex flex-row justify-around items-center gap-2">
                      <div className="w-3 h-3 bg-[#00DD16] rounded-full" />
                      <div className="flex flex-col items-center justify-center gap-2">
                        <strong className="font-semibold text-lg text-black">R$ 4.599,99</strong>
                        <span className="text-[#7A7A80] text-sm">Limite disponível</span>
                      </div> 
                    </div>
                    <div className="flex flex-row justify-around items-center gap-2">
                      <div className="w-3 h-3 bg-[#009BDD] rounded-full" />
                      <div className="flex flex-col items-center justify-center gap-2">
                        <strong className="font-semibold text-lg text-black">R$ 526,55</strong>
                        <span className="text-[#7A7A80] text-sm">Fatura Atual</span>
                      </div>  
                    </div>
                    <div className="flex flex-row justify-around items-center gap-2">
                      <div className="w-3 h-3 bg-[#FF7900] rounded-full" /> 
                      <div className="flex flex-col items-center justify-center gap-2">
                        <strong className="font-semibold text-lg text-black">R$ 4.599,99</strong>
                        <span className="text-[#7A7A80] text-sm">Próximas faturas</span>
                      </div> 
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center item-center w-full">
                    <div className="flex overflow-hidden w-full rounded-full h-2">
                      <div className="bg-[#00DD16]  w-[75%]" />
                      <div className="bg-[#009BDD]  w-[15%]" />
                      <div className="bg-[#FF7900]  w-[10%]" />
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
      </main>
    </div>
  );
}
