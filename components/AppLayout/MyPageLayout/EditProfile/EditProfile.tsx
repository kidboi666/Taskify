/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProfileImageInput, TextInput, ShortButton } from '@/components'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { ProfileBody } from '@/pages/mypage'
import { useAppDispatch } from '@/hooks/useApp'
import { AxiosError, AxiosResponse } from 'axios'
import { openMyToast } from '@/store/reducers/myToastReducer'
import { openToast } from '@/store/reducers/toastReducer'

interface EditProfileProps {
  error: AxiosError<any> | null
  pending: boolean
  result: AxiosResponse
  onSubmit: (e: FormEvent, nickname: string) => Promise<void>
  imageFile?: File
  setImageFile: (file: File) => void
  profileBody: ProfileBody
}

export default function EditProfile({
  error,
  pending,
  result,
  onSubmit,
  imageFile,
  setImageFile,
  profileBody,
}: EditProfileProps) {
  const [nickName, setNickName] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value)
  }

  const handleFileInputValue = (file: File) => {
    setImageFile(file)
  }

  useEffect(() => {
    setDisabled(!imageFile && profileBody.nickname === nickName)
  }, [nickName, imageFile])

  useEffect(() => {
    setNickName(profileBody.nickname)
  }, [profileBody])

  useEffect(() => {
    if (pending) {
      if (error) {
        const errorMessage = error?.response?.data?.message ?? ''
        dispatch(openMyToast({ text: errorMessage, warn: true }))
      } else if (pending) {
        dispatch(openToast('successUpdateProfile'))
        setDisabled(true)
      }
    }
  }, [pending, error])

  return (
    <form
      onSubmit={(e) => onSubmit(e, nickName)}
      className="flex w-[62rem] flex-col rounded-[0.8rem] bg-var-white p-[2.8rem]"
    >
      <h3 className="mb-[3.2rem] text-[2.4rem] font-bold">프로필</h3>
      <div className="mb-[2rem] flex gap-[1.6rem]">
        <ProfileImageInput
          id="image"
          label="이미지"
          size="m"
          currentImage={profileBody.profileImageUrl}
          onChange={handleFileInputValue}
        />
        <div className="flex w-full flex-col gap-[1.8rem]">
          <TextInput
            id="email"
            label="이메일"
            value={profileBody.email}
            isReadOnly
            placeholder="email@gmail.com"
          />
          <TextInput
            id="nickname"
            label="닉네임"
            value={nickName}
            onChange={handleInputValue}
            ref={inputRef}
            placeholder="닉네임을 입력하세요"
          />
        </div>
      </div>
      <div className="self-end">
        <ShortButton color="purple" type="submit" isDisabled={isDisabled} text="저장" />
      </div>
    </form>
  )
}
