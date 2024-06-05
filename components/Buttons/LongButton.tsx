import React, { ReactNode } from 'react'

interface LongButtonProps {
  type: 'button' | 'submit'
  children: ReactNode
  disabled: boolean // 추가
}

export default function LongButton({ type, children, disabled }: LongButtonProps) {
  const isActive = !disabled
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`inline-block w-[35rem] py-[1.4rem] lg:w-[52rem] ${isActive ? 'bg-[--violet-violet_5534DA]' : 'bg-[--gray-gray_9FA6B2]'} cursor-pointer rounded-[0.8rem] text-center text-[1.8rem] leading-tight text-[--white-white_FFFFFF]`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
