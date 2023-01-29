import { useWindowSize } from 'react-use';

export function IllustrationLaptop() {

  const size = useWindowSize();

  if (size.width <= 1024) {

    return (
      <img src="./images/illustration-laptop-mobile.svg" alt="laptop" />
    )

  }

  return (
    <img src="./images/illustration-laptop-desktop.svg" alt="laptop" />
  )


}