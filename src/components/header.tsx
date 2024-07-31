import { Score } from './score'
import { dataNames } from '@/utils/data'

export function Header() {
  return (
    <header className="flex items-center justify-center">
      <div className="flex justify-between w-[90%] md:w-[60%] border-2 border-gray-300 rounded-xl md:rounded-3xl p-2 md:p-8 my-8">
        <div className="flex  flex-col md:text-[1.5rem] uppercase leading-none">
          {dataNames.map((names) => (
            <span key={names}>{names}</span>
          ))}
        </div>

        <Score />
      </div>
    </header>
  )
}
