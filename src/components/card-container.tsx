'use client'
import Image from 'next/image'
import { data } from '@/utils/data'
import { Card } from './card'
import { useContextForm } from '@/hooks/useContextForm'
import { enemyChoiceRandom } from '@/utils/enemy-choice'
import { Winner, updateScore } from '@/utils/winner'

export function CardContainer() {
  const { setPLayerChoice, setEnemyChoice, scorePoints, setScorePoints } =
    useContextForm()

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const currentChoice = event.currentTarget.id
    const currentEnemyChoice = enemyChoiceRandom()
    setPLayerChoice(currentChoice)
    setTimeout(() => {
      setEnemyChoice(currentEnemyChoice)
      setScorePoints(
        updateScore(scorePoints, Winner(currentChoice, currentEnemyChoice)),
      )
    }, 1000)
  }
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-card-container grid-rows-3 justify-center w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[url('../assets/images/bg-pentagon.svg')] bg-no-repeat bg-center bg-75%">
        {data.map((item) => (
          <button
            key={item.name}
            className={`${item.name}-pos w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full`}
            id={item.name}
            onClick={handleClick}
          >
            <Card id={item.name}>
              <Image
                className="w-[30px] h=[30px] sm:w-[50px] sm:h=[50px]"
                src={item.icon}
                alt={item.name}
              />
            </Card>
          </button>
        ))}
      </div>
    </div>
  )
}
