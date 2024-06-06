import { useEffect, useState } from 'react'
import { Invitation } from '@/types/invitation'
import { cancelInvite, getDashBoardInvitation } from '@/service/dashboards'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks/useApp'
import { openToast } from '@/store/reducers/toastReducer'
import { openModal } from '@/store/reducers/modalReducer'
import { PaginationButton, ShortButton } from '..'
import EmptyInvite from '../EmptyInvite/EmptyInvite'

export default function EditInvitation() {
  const [inviteList, setInviteList] = useState<Invitation[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [reload, setReload] = useState(false)
  const router = useRouter()
  const { dashboardId } = router.query
  const dispatch = useAppDispatch()

  const handleCancel = async (id: number) => {
    if (dashboardId) {
      await cancelInvite(Number(dashboardId), id)
      dispatch(openToast('cancelInvite'))
      setReload(!reload)
    }
  }

  useEffect(() => {
    const handleLoadList = async () => {
      if (dashboardId) {
        const { invitations, totalCount } = await getDashBoardInvitation(
          Number(dashboardId),
          currentPage,
        )
        setInviteList(invitations)
        setTotalPage(Math.ceil(totalCount / 4))
      }
    }
    handleLoadList()
  }, [currentPage, dashboardId, reload])

  return (
    <div className="flex w-[62rem] flex-col gap-[2.7rem] rounded-[0.8rem] bg-var-white p-[2.8rem]">
      <div className="flex items-center justify-between">
        <p className="text-center text-[2rem] font-bold">초대 내역</p>
        <div className="flex items-center justify-end gap-[1.6rem]">
          <div className="text-[1.6rem]">
            {totalPage} 페이지중 {currentPage}
          </div>
          <PaginationButton
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
          <ShortButton
            text="초대하기"
            color="purple"
            onClick={() => {
              dispatch(
                openModal({
                  modalName: 'AddMember',
                  modalProps: { dashboardId, reload, setReload },
                }),
                setReload(!reload),
              )
            }}
          />
        </div>
      </div>
      {inviteList[0] ? (
        <div className="flex flex-col">
          <p className="text-[1.6rem] text-var-gray4">이메일</p>
          <div className="flex flex-col">
            {inviteList.map((item) => (
              <div
                key={item.invitee.id}
                className="flex items-center justify-between border-b-[0.1rem] px-0 py-[1.6rem]"
              >
                <p className="text-center text-[1.6rem] font-normal">{item.invitee.email}</p>
                <ShortButton color="white" text="취소" onClick={() => handleCancel(item.id)} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <EmptyInvite>초대한 멤버가 없습니다!</EmptyInvite>
      )}
    </div>
  )
}
