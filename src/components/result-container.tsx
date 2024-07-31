'use client'
import { useContextForm } from '@/hooks/useContextForm'
import { PlayAgainButton } from './play-again-button'
import { CardResult } from './card-result'
import { Winner, winnerMessage } from '@/utils/winner'
import { WinnerAnim } from './winner-anim'
import { pointsType } from '@/types/Point-Types'

export function ResultContainer() {
  const { playerChoice, enemyChoice } = useContextForm()

  return (
    <div className="flex items-center justify-around mt-28">
      <div className=" flex flex-wrap gap-16 items-center justify-center text-center tracking-[.2em] uppercase text-sm sm:text-lg">
        <div className="relative flex items-center justify-center md:order-1 space-y-6 ">
          {enemyChoice && (
            <WinnerAnim
              win={Winner(playerChoice, enemyChoice) === pointsType.PLAYER}
            />
          )}
          <CardResult choice={playerChoice} text="You picked" />
        </div>
        <div className="relative flex items-center justify-center md:order-3 space-y-6 ">
          {enemyChoice && (
            <WinnerAnim
              win={Winner(playerChoice, enemyChoice) === pointsType.ENEMY}
            />
          )}
          <CardResult choice={enemyChoice} text="The House Picked" />
        </div>
        <div className="md:order-2 space-y-6 sm:space-y-8 ml-4 z-40">
          <strong className="text-xl sm:text-3xl">
            {enemyChoice && winnerMessage(Winner(playerChoice, enemyChoice))}
          </strong>
          <PlayAgainButton />
        </div>
      </div>
    </div>
  )
}
