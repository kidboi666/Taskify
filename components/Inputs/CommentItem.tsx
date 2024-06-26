import { Comment } from '@/types/dashboard'
import { formatDateTime } from '@/utils/formatDate'
import useAsync from '@/hooks/useAsync'
import { ChangeEvent, FormEvent, useState } from 'react'
import { deleteComment, updateComment } from '@/service/comments'
import { useLoadTheme } from '@/store/context/ThemeContext'
import { useLoadUser } from '@/store/context/UserIdContext'
import { useLoadLanguage } from '@/store/context/LanguageContext'
import ShortButton from '../Buttons/ShortButton'
import UserProfile from '../UserInfo/UserProfile'
import EditButton from '../Buttons/EditButton'

interface CommentItemProps {
  comment: Comment
  authorId: number
  onUpdate: (props: Comment) => void
  onDelete: (props: Comment) => void
}

export default function CommentItem({ comment, authorId, onUpdate, onDelete }: CommentItemProps) {
  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState(comment.content)
  const { requestFunction: updateCommentRequest } = useAsync(updateComment)
  const { requestFunction: deleteCommentRequest } = useAsync(deleteComment)
  const { theme } = useLoadTheme()
  const { userId } = useLoadUser()
  const { language } = useLoadLanguage()

  const updateCommentData = async () => {
    await updateCommentRequest({ id: comment.id, content: text })
    setIsEdit(false)
  }

  const deleteCommentData = async () => {
    await deleteCommentRequest(comment.id)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    updateCommentData()
    onUpdate({ ...comment, content: text })
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }
  const handleEditClick = () => {
    setIsEdit(true)
  }
  const handleDeleteClick = () => {
    deleteCommentData()
    onDelete(comment)
  }

  return (
    <li className="flex items-start gap-[1rem]">
      <UserProfile
        size="m"
        profileImageUrl={comment.author.profileImageUrl}
        nickname={comment.author.nickname}
      />
      <div className="w-full">
        <div className="flex items-center gap-[0.8rem] pb-[0.6rem] pt-[0.4rem]">
          <h3
            className={`text-[1.4rem] font-[600] ${theme === 'normal' ? 'text-var-black4' : 'text-var-gray3'}`}
          >
            {comment.author.nickname}
          </h3>
          <span className="text-[1.2rem] text-var-gray4">{formatDateTime(comment.createdAt)}</span>
        </div>
        {isEdit ? (
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <textarea
                id="comment"
                value={text}
                onChange={handleChange}
                placeholder={language === 'ko' ? '댓글 작성하기' : 'Write a comment'}
                className="input-layout h-[7rem] w-full resize-none text-[1.4rem]"
              />
              <div className="absolute bottom-[1.2rem] right-[1.2rem]">
                <ShortButton
                  type="submit"
                  text={language === 'ko' ? '완료' : 'Enter'}
                  color="white"
                />
              </div>
            </div>
          </form>
        ) : (
          <div className="w-full">
            <p
              className={`max-w-[80%] whitespace-pre-wrap break-words text-[1.4rem] ${theme === 'normal' ? 'text-var-black2' : 'text-var-gray3'}`}
            >
              {comment.content}
            </p>
            {authorId === userId && (
              <div className="mt-[1.2rem] flex gap-[1.2rem]">
                <EditButton onClick={handleEditClick} text={language === 'ko' ? '수정' : 'Edit'} />
                <EditButton
                  onClick={handleDeleteClick}
                  text={language === 'ko' ? '삭제' : 'Delete'}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  )
}
