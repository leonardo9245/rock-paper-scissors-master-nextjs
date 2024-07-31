'use client'
import Image from 'next/image'

import { useContextForm } from '@/hooks/useContextForm'
import iconClose from '@/assets/images/icon-close.svg'
import { ButtonRules } from './button-rules'

export function Rules() {
  const { isOpen } = useContextForm()
  return (
    isOpen && (
      <div className="absolute h-full w-full flex items-center justify-center bg-bgRules z-50">
        <div className="h-[470px] w-[400px] bg-white rounded-lg">
          <div className="flex justify-between p-6">
            <h2 className="text-textRules text-3xl uppercase font-bold">
              Rules
            </h2>
            <ButtonRules className="p-2">
              <Image
                src={iconClose}
                width={20}
                height={20}
                alt="close button"
              />
            </ButtonRules>
          </div>
          <div className="h-full w-full bg-[url('../assets/images/image-rules-bonus.svg')] bg-no-repeat bg-top bg-100%"></div>
        </div>
      </div>
    )
  )
}
