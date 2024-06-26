import axios from './instance'

export const SignUpAccess = async (id: string, nickname: string, password: string) => {
  const response = await axios.post(`/users`, {
    email: id,
    nickname,
    password,
  })
  return response
}

export const getUserInfo = async () => {
  const response = await axios.get(`/users/me`)
  return response.data
}

export const postProfileImage = async (imageFile: File) => {
  const formData = new FormData()
  formData.append('image', imageFile)
  const response = await axios.post(`/users/me/image`, formData)
  return response
}

export const updateUserProfile = async (params: { nickname: string; profileImageUrl: string }) => {
  const response = await axios.put(`/users/me`, {
    nickname: params.nickname,
    profileImageUrl: params.profileImageUrl,
  })
  return response
}
