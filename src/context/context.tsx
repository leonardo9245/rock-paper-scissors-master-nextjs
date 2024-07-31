'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

export const Context = createContext({
  scorePoints: 0,
  playerChoice: '',
  enemyChoice: '',
  isOpen: false,
  setScorePoints: (_value: number) => {},
  setPLayerChoice: (value: string) => {},
  setEnemyChoice: (value: string) => {},
  setIsOpen: (value: boolean) => {},
})

export function ContextProvider({ children }: ProviderProps) {
  const [scorePoints, setScorePoints] = useState(0)
  const [playerChoice, setPLayerChoice] = useState('')
  const [enemyChoice, setEnemyChoice] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Context.Provider
      value={{
        scorePoints,
        playerChoice,
        enemyChoice,
        isOpen,
        setScorePoints,
        setPLayerChoice,
        setEnemyChoice,
        setIsOpen,
      }}
    >
      {children}
    </Context.Provider>
  )
}
