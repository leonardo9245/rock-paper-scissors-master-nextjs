'use client'
import { useContextForm } from '@/hooks/useContextForm'
import { ResultContainer } from './result-container'
import { CardContainer } from './card-container'

export function Selector() {
  const { playerChoice } = useContextForm()

  return <>{playerChoice ? <ResultContainer /> : <CardContainer />}</>
}
