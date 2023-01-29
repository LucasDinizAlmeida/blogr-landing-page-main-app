import { List, X } from 'phosphor-react';


interface MenuHamburguerProps {
  isOpenMenu: boolean;
  onClick: () => void;
}


export function MenuHamburguer({ onClick, isOpenMenu }: MenuHamburguerProps) {


  return (
    <>
      {
        isOpenMenu ?
          <button className="flex lg:hidden" onClick={onClick}>
            <X size={45} color='#ffffff' weight="bold" />
          </button>
          :
          <button className="flex lg:hidden" onClick={onClick}>
            <List size={45} color='#ffffff' weight="bold" />
            {/* <img src="/hamburguer.svg" alt="menu hamburguer" /> */}
          </button>

      }
    </>
  )
}