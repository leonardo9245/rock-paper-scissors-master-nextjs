interface WinAnimType {
  win: boolean
}
export function WinnerAnim({ win }: WinAnimType) {
  return (
    <>
      {win && (
        <>
          <div className="animate-pulse absolute top-[75px] sm:top-[95px] items-center   bg-[#ffffff05] rounded-full w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] scale-[3] z-0">
            <div className=" absolute top-0 items-center   bg-[#ffffff05] rounded-full w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] scale-[.8]">
              <div className="absolute top-0 items-center   bg-[#ffffff05] rounded-full w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] scale-[.7]"></div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
