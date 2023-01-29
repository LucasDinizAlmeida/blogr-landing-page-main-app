import { Button } from "./Button";
import { NavigationMenuComponent } from "./NavigationMenuComponent";


export function MenuMobile() {


  return (
    <div className="flex flex-col items-center bg-white justify-center py-20 w-[85%] absolute left-1/2 translate-x-[-50%] mt-6 rounded-md">
      {/* <nav className="flex flex-col gap-4 text-black mb-10">
        <span>Product</span>
        <span>Company</span>
        <span>Connect</span>
      </nav> */}
      <div className="relative">
        <NavigationMenuComponent />
      </div>

      <div className="flex flex-col items-center mt-6 justify-center gap-3">
        <Button background title="Login" />
        <Button title="SigIn" />
      </div>

    </div>
  )
}