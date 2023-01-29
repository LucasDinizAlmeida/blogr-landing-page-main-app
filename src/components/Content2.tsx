import { Phones } from "./SVGs/Phones";

export function Content2() {
  return (
    <>
      <div className="lg:hidden -mb-36 w-screen flex items-center justify-center">
        <Phones />
      </div>
      <div className="px-2 sm:px-32 py-28 flex flex-row items-center bg-gradient-to-r from-greyCustomBg-700 to-greyCustomBg-600 rounded-bl-[100px] rounded-tr-[100px] lg:relative">
        <div className="absolute max-lg:hidden max-xl:left-0">
          <Phones />
        </div>
        <div className="w-1/2 max-lg:mx-auto ml-auto">
          <h2 className="text-center font-semibold text-white text-3xl mb-8">State of the Art Infrastructure</h2>
          <p className="text-base max-sm:text-center text-white leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, impedit, cumque facere animi consequatur deserunt non sapiente deleniti nulla praesentium ipsa similique rem, distinctio labore nobis illo ab ipsam saepe?</p>
        </div>

      </div>
    </>
  )
}