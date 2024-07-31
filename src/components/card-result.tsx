import { data } from '@/utils/data'
import { Card } from './card'
import Image from 'next/image'

interface CardResultTypes {
  choice: string
  text: string
}

export function CardResult({ choice, text }: CardResultTypes) {
  const getIconChoice = (choice: string) => {
    const choiceIndex = data.findIndex((items) => items.name === choice)
    return data[choiceIndex].icon
  }

  return (
    <div className="flex flex-col gap-8 sm:gap-16 items-center justify-center">
      <span>{text}</span>
      {choice ? (
        <Card id={choice} scale>
          <Image
            src={getIconChoice(choice)}
            className="sm:h-14 sm:w-14 w-7 h-7"
            alt={choice}
          />
        </Card>
      ) : (
        <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full bg-primary"></div>
      )}
    </div>
  )
}
