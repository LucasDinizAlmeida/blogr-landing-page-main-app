import { IllustrationEditorDesktop } from "./SVGs/IllustrationEditorDesktop";
import { TextContent } from "./TextContent";

export function Content1() {
  return (
    <div className="py-8 mt-28 mb-56">
      <h2 className="text-center font-semibold text-neutral-800 text-3xl mb-16 px-1">Designed for the future</h2>

      <div className="flex flex-col sm:flex-row items-center relative">
        <div className=" -right-40 sm:absolute flex-1 sm:hidden">
          <IllustrationEditorDesktop />
        </div>

        <div className="flex px-2 sm:px-32 items-center justify-between overflow-hidden">
          <div className="flex flex-col gap-12">
            <TextContent
              title="Introducing an extensible editor"
            />
            <TextContent
              title="Robust content management"
            />
          </div>
        </div>

        <div className=" -right-40 sm:absolute flex-1 max-sm:hidden">
          <IllustrationEditorDesktop />
        </div>

      </div>
    </div>
  )
}