import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
  title: string;
  background?: boolean;
}

export function Button({ title, background = false, ...rest }: ButtonProps) {

  if (!background) {
    return (
      <button className="text-redCustom-400 bg-white text-base font-bold py-3 rounded-full w-[120px] text-center hover:bg-neutral-700 hover:text-white transition-colors"
        {...rest}
      >
        {title}
      </button>
    )
  }

  return (
    <button className="text-white bg-redCustom-400 text-base font-bold py-3 rounded-full w-[120px] text-center hover:bg-neutral-700 hover:text-white transition-colors"
      {...rest}
    >
      {title}
    </button>
  )
}