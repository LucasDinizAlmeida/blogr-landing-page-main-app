import { useWindowSize } from 'react-use';


export function IllustrationEditorDesktop() {
  const size = useWindowSize();

  if (size.width <= 1024) {

    return (
      <img src="./images/illustration-editor-mobile.svg" alt="editor" />
    )


  }

  return (
    <img src="./images/illustration-editor-desktop.svg" alt="editor" />
  )


}