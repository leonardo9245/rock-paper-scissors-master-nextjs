import { data } from './data'
import { pointsType } from '@/types/Point-Types'

const Winner = (playerChoice: string, enemyChoice: string): pointsType => {
  const playerChoiceIndex = data.findIndex((data) => data.name === playerChoice)
  const enemyChoiceIndex = data.findIndex((data) => data.name === enemyChoice)

  const playerPoint = data[playerChoiceIndex].win.includes(enemyChoice)
  const enemyPoint = data[enemyChoiceIndex].win.includes(playerChoice)

  if (playerPoint) {
    return pointsType.PLAYER
  } else if (enemyPoint) {
    return pointsType.ENEMY
  }

  return pointsType.DRAW
}

const winnerMessage = (winner: pointsType): string => {
  switch (winner) {
    case pointsType.PLAYER:
      return 'You Win!'
    case pointsType.ENEMY:
      return 'You Lose!'
    case pointsType.DRAW:
      return "It's a Draw!"
    default:
      return 'Error'
  }
}

const updateScore = (scorePoints: number, winner: pointsType) => {
  if (winner === pointsType.PLAYER) {
    return scorePoints + 1
  } else if (winner === pointsType.ENEMY) {
    if (scorePoints === 0) return 0
    return scorePoints - 1
  } else {
    return scorePoints
  }
}

export { Winner, winnerMessage, updateScore }
