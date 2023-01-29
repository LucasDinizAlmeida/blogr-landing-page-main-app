import { IllustrationLaptop } from "./SVGs/IllustrationLaptop";
import { TextContent } from "./TextContent";

export function Content3() {
  return (
    <>

      <div className="py-8 my-28 sm:my-56">

        <div className="flex flex-col sm:flex-row items-center relative">
          <div className=" -right-40 sm:absolute flex-1 sm:hidden">
            <IllustrationLaptop />
          </div>

          <div className=" -left-40 sm:absolute flex-1 max-sm:hidden">
            <IllustrationLaptop />
          </div>

          <div className="flex px-2 sm:px-32 items-center ml-auto justify-between overflow-hidden">
            <div className="flex flex-col gap-12">
              <TextContent
                title="Free, Open, simple"
              />
              <TextContent
                title="Powerful tooling"
              />
            </div>
          </div>


        </div>
      </div>
    </>
  )
}