import { useEffect, useRef, useState } from 'react'
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import Image from 'next/image'

interface DropDownMenuProps {
  menuList: string[]
}

export default function DropDownMenu({ menuList }: DropDownMenuProps) {
  const [selectMenu, setSelectMenu] = useState(menuList[0])
  const [showMenuList, setShowMenuList] = useState(false)
  const refNode = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (refNode.current && !refNode.current.contains(e.target as Node)) {
      setShowMenuList(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div
      ref={refNode}
      onClick={() => setShowMenuList((prev) => !prev)}
      className={`${showMenuList ? 'border-primary-violet' : 'border-var-gray3'} bg-var-white text-var-black3 relative h-[4.8rem] w-full cursor-pointer rounded-md border border-solid px-[1.6rem] py-[1.3rem]`}
    >
      <div className="flex size-full items-center justify-between">
        <div className="text-primary-violet bg-var-violet col-start-2 flex gap-1 rounded-full px-[0.8rem] py-[0.4rem]">
          <div className="text-[1.2rem]">{`• ${selectMenu}`}</div>
        </div>
        <div className="absolute right-[1.5rem] size-[1rem]">
          <Image
            fill
            src={arrow}
            alt="드롭다운 화살표"
            className={showMenuList ? 'rotate-180' : ''}
          />
        </div>
      </div>
      {showMenuList && (
        <div className="border-var-gray3 bg-var-white absolute left-0 top-[5rem] flex w-full animate-slideDown flex-col overflow-hidden rounded-md border border-solid py-[0.65rem] shadow-lg">
          {menuList.map((menuItem) => (
            <div
              key={menuItem}
              onClick={() => setSelectMenu(menuItem)}
              className={`${selectMenu === menuItem ? 'bg-var-violet' : ''} hover:bg-var-violet relative grid size-full grid-cols-[2.2rem_1fr] place-items-start gap-1 px-[1.6rem] py-[0.65rem]`}
            >
              {menuItem === selectMenu && (
                <div className="col-start-1 size-[1rem] self-center">
                  <Image src={check} alt="체크 표시" />
                </div>
              )}
              <div className="bg-var-violet text-primary-violet col-start-2 flex rounded-full px-[0.8rem] py-[0.4rem]">
                <div className="text-[1.2rem]">{`• ${menuItem}`}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}