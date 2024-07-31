import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  children: ReactNode
  scale?: boolean
}

export function Card({ id, scale = false, children, ...rest }: CardProps) {
  return (
    <div
      id={id}
      className={`flex items-center justify-center rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] ${id}-color shadow-button-shadow ${
        scale && 'sm:scale-150 scale-125'
      }`}
      {...rest}
    >
      <div
        className={`flex items-center justify-center bg-white w-[76px] h-[76px] sm:w-[112px] sm:h-[112px] rounded-full shadow-card-shadow`}
      >
        {children}
      </div>
    </div>
  )
}
