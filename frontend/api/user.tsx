import axios from "axios"
import { selectorFamily, selector, useRecoilValue } from "recoil"

export const BACKEND_URL = "http://localhost:8080"

const loginAPI = selectorFamily({
  key: "UserName",
  get: (username: string, password: string) => async () => {
    const response = await axios.post(`${BACKEND_URL}/api/login`, { username, password })
    return response.data
  },
})

export interface RegisterFormData {
  age: number
  sex: "male" | "female" | "etc"
  email: string
  password: string
  first_name: string
  last_name: string
  nick_name: string
  // profile_img = models.ImageField()
}

const registerAPI = selectorFamily({
  key: "UserName",
  get: (data: RegisterFormData) => async () => {
    const response = await axios.post(`${BACKEND_URL}/api/register`, data)
    console.log(response)
    return response.data
  },
})

const CurrentUserInfo = () => {
  const userInfo = useRecoilValue(login)
  return <div>{userInfo}</div>
}
