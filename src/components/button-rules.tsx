'use client'
import { useContextForm } from '@/hooks/useContextForm'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from './button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export function ButtonRules({ children, ...rest }: ButtonProps) {
  const { isOpen, setIsOpen } = useContextForm()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Button onClick={handleClick} {...rest}>
      {children}
    </Button>
  )
}
