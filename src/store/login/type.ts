export interface ILoginState {
  token: string
  userInfo: IUserInfo
  userMenu: []
}
export interface IUserInfo {
  name: string
  id: number
}
