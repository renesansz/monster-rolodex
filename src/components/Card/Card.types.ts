import { HTMLProps, ReactNode } from "react"

export type CardProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode
}
