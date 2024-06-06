import Image from 'next/image'
import crownicon from '@/public/icons/crownicon.svg'

interface SideMenuListItemProps {
  // eslint-disable-next-line react/require-default-props
  color?: string
  // eslint-disable-next-line react/require-default-props
  title?: string
  createdByMe: boolean
}

export default function SideMenuListItem({
  color = '',
  title = '대시보드제목예시',
  createdByMe = true,
}: SideMenuListItemProps) {
  return (
    <div className="flex items-center">
      <div className={`mr-[1.6rem] h-[0.8rem] w-[0.8rem] rounded-full bg-[${color}]`} />
      <div className="text-[1.8rem] text-[#787486]">{title}</div>
      <div className="ml-[0.6rem]">
        {createdByMe && <Image src={crownicon} alt="크라운 아이콘" />}
      </div>
    </div>
  )
}