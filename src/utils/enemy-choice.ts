import { dataNames } from './data'

const enemyChoiceRandom = (): string => {
  const optionsLenght = dataNames.length
  const randomChoice = dataNames[Math.floor(Math.random() * optionsLenght)]

  return randomChoice
}

export { enemyChoiceRandom }
