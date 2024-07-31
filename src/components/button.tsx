import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonTypes) {
  return (
    <button
      className="text-base rounded-md px-8 py-1.5 uppercase border"
      {...rest}
    >
      {children}
    </button>
  )
}
