import iconRock from '@/assets/images/icon-rock.svg'
import iconPaper from '@/assets/images/icon-paper.svg'
import iconScissors from '@/assets/images/icon-scissors.svg'
import iconLizard from '@/assets/images/icon-lizard.svg'
import iconSpock from '@/assets/images/icon-spock.svg'

interface DataTypes {
  name: string
  icon: string
  win: string[]
}

const data: DataTypes[] = [
  { name: 'Rock', icon: iconRock, win: ['Scissor', 'Lizard'] },
  { name: 'Paper', icon: iconPaper, win: ['Rock', 'Spock'] },
  { name: 'Scissor', icon: iconScissors, win: ['Paper', 'Lizard'] },
  { name: 'Lizard', icon: iconLizard, win: ['Spock', 'Paper'] },
  { name: 'Spock', icon: iconSpock, win: ['Scissor', 'Rock'] },
]

const dataNames: string[] = data.map((names) => names.name)

export { data, dataNames }
