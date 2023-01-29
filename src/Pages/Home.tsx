import { Button } from "../components/Button";
import { Content1 } from "../components/Content1";
import { Content2 } from "../components/Content2";
import { Content3 } from "../components/Content3";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export function Home() {

  return (
    <>
      <div className="py-8 px-2 sm:px-32 bg-gradient-to-r from-redCustomBg-300 to-redCustomBg-500 rounded-bl-[100px]">
        <Header />
        <div className="flex flex-col items-center justify-center py-28">
          <h1 className="text-white text-5xl text-center font-semibold">A modern publishing platform</h1>
          <span className="text-neutral-200 text-base mt-6">Grow your audience and build your online brand</span>
          <div className="flex flex-row items-center justify-center gap-3 mt-8">
            <Button title="Start for free" />
            <Button background={true} title="Learn More" />
          </div>
        </div>
      </div>

      <Content1 />

      <Content2 />

      <Content3 />

      <Footer />
    </>
  )
}