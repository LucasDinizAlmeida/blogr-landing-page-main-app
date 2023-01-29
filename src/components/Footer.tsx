import { Logo } from "./SVGs/Logo";

export function Footer() {

  return (
    <div className="py-12 px-2 sm:px-32 flex flex-col sm:flex-row items-center sm:items-start justify-between bg-neutral-800 rounded-tr-[100px]">
      <img src="./images/logo.svg" alt="logo" />

      <div className="flex flex-col max-sm:mt-12 sm:flex-row w-2/4 items-center justify-between sm:mr-10">
        <div className="max-sm:mb-12">
          <span className="text-white mb-7 block">Product</span>
          <ul className="text-sm text-neutral-300 flex flex-col gap-2">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="max-sm:mb-12">
          <span className="text-white mb-7 block">Company</span>
          <ul className="text-sm text-neutral-300 flex flex-col gap-2">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <span className="text-white mb-7 block">Connect</span>
          <ul className="text-sm text-neutral-300 flex flex-col gap-2">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}