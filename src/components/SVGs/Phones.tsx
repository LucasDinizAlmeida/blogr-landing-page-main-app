import { useWindowSize } from 'react-use';

export function Phones() {
  const size = useWindowSize();

  if (size.width < 500) {

    return (
      <img src="./images/illustration-phones-red.png" alt="phone" />
    )
  }

  return (
    <img src="../images/illustration-phones.svg" alt="" />
  )


}