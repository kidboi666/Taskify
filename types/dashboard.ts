export interface DashBoard {
  id: number
  title: string
  color: string
  createdAt: string
  updatedAt: string
  createdByMe: boolean
  userId: number
}

export interface Column {
  createdAt: string
  dashboardId: number
  id: number
  teamId: string
  title: string
  updatedAt: string
}

export interface PostCard {
  assigneeUserId: number
  dashboardId?: number
  columnId: number
  title: string
  description: string
  dueDate: string
  tags: string[]
  imageUrl: string | null
}

export interface UpdateCard {
  columnId: number
  assigneeUserId: number
  title: string
  description: string
  dueDate: string
  tags: string[]
  imageUrl: string | null
}

export interface CardList {
  cursorId: number
  totalCount: number
  cards: Card[]
}

export interface Card {
  id: number
  title: string
  description: string
  tags: string[]
  dueDate: string
  assignee: {
    profileImageUrl: string
    nickname: string
    id: number
  }
  imageUrl?: string
  teamId: string
  columnId: number
  createdAt: string
  updatedAt: string
}
