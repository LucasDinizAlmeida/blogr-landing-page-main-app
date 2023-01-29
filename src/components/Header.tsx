import { useState } from "react";
import { Button } from "./Button";
import { MenuHamburguer } from "./MenuHamburguer";
import { MenuMobile } from "./MenuMobile";
import { NavigationMenuComponent } from "./NavigationMenuComponent";
import { Logo } from "./SVGs/Logo";

export function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <div className="flex flex-row items-center max-lg:justify-between w-full">
        <img src="./images/logo.svg" alt="logo" />


        <div className="ml-12 max-lg:hidden">
          <NavigationMenuComponent />
        </div>


        <div className="flex flex-row items-center justify-center gap-3 ml-auto max-lg:hidden">
          <Button background title="Login" />
          <Button title="SigIn" />
        </div>

        <MenuHamburguer
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          isOpenMenu={isOpenMenu}
        />

      </div>
      {
        isOpenMenu && <MenuMobile />
      }
    </>
  )
}