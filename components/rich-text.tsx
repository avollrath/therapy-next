import type { JSX } from "react"

interface RichTextProps {
  children: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function RichText({ children, className = "", as: Component = "span" }: RichTextProps) {
  return <Component className={className} dangerouslySetInnerHTML={{ __html: children }} />
}
