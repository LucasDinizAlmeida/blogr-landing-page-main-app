
interface TextContentProps {
  title: string;
}

export function TextContent({ title }: TextContentProps) {

  return (
    <div className="max-w-[400px] max-sm:text-center">
      <h3 className="mb-8 font-semibold text-neutral-800 text-xl">{title}</h3>
      <p className="text-base text-neutral-400 leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, impedit, cumque facere animi consequatur deserunt non sapiente deleniti nulla praesentium ipsa similique rem, distinctio labore nobis illo ab ipsam saepe? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor necessitatibus veritatis, modi accusantium veniam ex at sapiente voluptatum, cupiditate perspiciatis nam dicta quidem optio expedita rem, ducimus consequatur explicabo vitae!</p>
    </div>
  )
}