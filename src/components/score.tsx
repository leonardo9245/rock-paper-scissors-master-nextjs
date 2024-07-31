'use client'
import { useContextForm } from '@/hooks/useContextForm'

export function Score() {
  const { scorePoints } = useContextForm()

  return (
    <div className="uppercase bg-white px-6 md:px-12 py-2 rounded-lg flex flex-col items-center justify-center">
      <span className="text-secondary">score</span>
      <div>
        <span className="text-gray-700 text-3xl md:text-6xl">
          {scorePoints}
        </span>
      </div>
    </div>
  )
}
