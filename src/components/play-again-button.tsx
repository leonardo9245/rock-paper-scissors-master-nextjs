import { useContextForm } from '@/hooks/useContextForm'
import { Button } from './button'
import { HTMLAttributes } from 'react'

export function PlayAgainButton({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  const { setPLayerChoice, setEnemyChoice } = useContextForm()

  const handleClick = () => {
    setPLayerChoice('')
    setEnemyChoice('')
  }

  return (
    <div {...rest}>
      <Button
        className="text-base rounded-md px-12 py-1.5 uppercase border hover:bg-white hover:text-primary hover:transtion duration-200"
        onClick={handleClick}
      >
        Play Again
      </Button>
    </div>
  )
}
